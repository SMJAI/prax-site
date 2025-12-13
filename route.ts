import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { clerkClient } from '@clerk/nextjs/server';

// Verify the webhook signature from LemonSqueezy
function verifySignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get('x-signature') || '';
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';

    // Verify webhook signature
    if (secret && !verifySignature(payload, signature, secret)) {
      console.error('Invalid webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const data = JSON.parse(payload);
    const eventName = data.meta?.event_name;

    console.log('LemonSqueezy webhook received:', eventName);

    // Handle successful payment
    if (eventName === 'order_created' || eventName === 'subscription_created') {
      const customerEmail = data.data?.attributes?.user_email;
      const customerName = data.data?.attributes?.user_name;
      const productId = data.data?.attributes?.first_order_item?.product_id;
      const variantId = data.data?.attributes?.first_order_item?.variant_id;

      console.log('Payment received for:', customerEmail);

      if (customerEmail) {
        // Find user in Clerk by email
        const client = await clerkClient();
        const users = await client.users.getUserList({
          emailAddress: [customerEmail],
        });

        if (users.data.length > 0) {
          const user = users.data[0];
          
          // Update user's public metadata to mark as pro
          await client.users.updateUserMetadata(user.id, {
            publicMetadata: {
              isPro: true,
              plan: 'pro',
              productId: productId,
              variantId: variantId,
              purchasedAt: new Date().toISOString(),
            },
          });

          console.log('User marked as pro:', user.id);
        } else {
          // User hasn't signed up yet - store for later
          console.log('User not found in Clerk, email:', customerEmail);
          // You could store this in a database to check when they sign up
        }
      }
    }

    // Handle subscription cancelled
    if (eventName === 'subscription_cancelled' || eventName === 'subscription_expired') {
      const customerEmail = data.data?.attributes?.user_email;

      if (customerEmail) {
        const client = await clerkClient();
        const users = await client.users.getUserList({
          emailAddress: [customerEmail],
        });

        if (users.data.length > 0) {
          const user = users.data[0];
          
          // Remove pro status
          await client.users.updateUserMetadata(user.id, {
            publicMetadata: {
              isPro: false,
              plan: 'free',
              cancelledAt: new Date().toISOString(),
            },
          });

          console.log('User pro status removed:', user.id);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 });
  }
}
