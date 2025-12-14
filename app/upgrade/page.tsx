import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UpgradePage() {
  const user = await currentUser();

  if (user?.publicMetadata?.isPro === true) {
    redirect('/vault');
  }

  const userEmail = user?.emailAddresses[0]?.emailAddress || '';

  return (
    <>
      <style>{`
        .upgrade-hero { text-align: center; padding: 60px 0 40px; }
        .upgrade-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
        .upgrade-hero p { font-size: 1.15rem; color: #a1a1aa; max-width: 550px; margin: 0 auto; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 40px auto; }
        .pricing-card { background: #12121a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; text-align: center; transition: all 0.2s; }
        .pricing-card:hover { border-color: #8b5cf6; }
        .pricing-card.featured { border: 2px solid #8b5cf6; position: relative; }
        .pricing-card.featured::before { content: 'BEST VALUE'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 4px 12px; background: #8b5cf6; color: white; font-size: 0.65rem; font-weight: 700; border-radius: 10px; }
        .pricing-name { font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; }
        .pricing-desc { font-size: 0.85rem; color: #6b6b76; margin-bottom: 16px; }
        .pricing-price { font-size: 2.5rem; font-weight: 800; color: #8b5cf6; }
        .pricing-price span { font-size: 1rem; font-weight: 400; color: #6b6b76; }
        .pricing-term { font-size: 0.8rem; color: #6b6b76; margin-bottom: 20px; }
        .pricing-features { list-style: none; margin: 0 0 24px 0; padding: 0; text-align: left; }
        .pricing-features li { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 0.85rem; display: flex; align-items: center; gap: 8px; }
        .pricing-features li:last-child { border-bottom: none; }
        .pricing-features li::before { content: '✓'; color: #10b981; font-weight: 700; }
        .pricing-btn { display: block; width: 100%; padding: 12px; text-align: center; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.15s; }
        .pricing-btn-primary { background: #8b5cf6; color: white; border: none; }
        .pricing-btn-primary:hover { background: #a78bfa; }
        .pricing-btn-secondary { background: transparent; color: #f5f5f7; border: 1px solid rgba(255,255,255,0.08); }
        .pricing-btn-secondary:hover { border-color: #8b5cf6; }
        .guarantee { text-align: center; margin-top: 32px; padding: 20px; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .guarantee p { font-size: 0.9rem; color: #10b981; margin: 0; }
        @media (max-width: 768px) { .pricing-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="upgrade-hero">
        <h1>🔐 Unlock Pro Playbooks</h1>
        <p>You're signed in, but you need Pro access to view the Vault. Choose a plan below to unlock 100+ production-ready AI systems.</p>
      </section>

      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="pricing-name">Starter Pack</div>
          <div className="pricing-desc">Perfect for trying Prax</div>
          <div className="pricing-price">$29</div>
          <div className="pricing-term">one-time payment</div>
          <ul className="pricing-features">
            <li>20 curated Pro systems</li>
            <li>All 11 categories sampled</li>
            <li>Prompt + Guide included</li>
            <li>Email support</li>
          </ul>
          <a 
            href={`https://praxai.lemonsqueezy.com/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec?checkout[email]=${encodeURIComponent(userEmail)}`} 
            className="pricing-btn pricing-btn-secondary"
          >
            Get Starter Pack
          </a>
        </div>

        <div className="pricing-card featured">
          <div className="pricing-name">Team Playbooks</div>
          <div className="pricing-desc">Best for teams & agencies</div>
          <div className="pricing-price">$299</div>
          <div className="pricing-term">lifetime access</div>
          <ul className="pricing-features">
            <li>100+ systems + lifetime updates</li>
            <li>Prompt + Guide + Automation</li>
            <li>Team license (up to 5 seats)</li>
            <li>Priority support</li>
          </ul>
          <a 
            href={`https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157?checkout[email]=${encodeURIComponent(userEmail)}`} 
            className="pricing-btn pricing-btn-primary"
          >
            Get Team Playbooks
          </a>
        </div>

        <div className="pricing-card">
          <div className="pricing-name">Monthly Pro</div>
          <div className="pricing-desc">Always up-to-date</div>
          <div className="pricing-price">$49<span>/mo</span></div>
          <div className="pricing-term">cancel anytime</div>
          <ul className="pricing-features">
            <li>100+ systems + all updates</li>
            <li>Prompt + Guide + Automation</li>
            <li>Tested on GPT-4o, Claude & Gemini</li>
            <li>Updates when models change</li>
          </ul>
          <a 
            href={`https://praxai.lemonsqueezy.com/buy/557bd908-945f-4dd3-bbc0-e701df7303b9?checkout[email]=${encodeURIComponent(userEmail)}`} 
            className="pricing-btn pricing-btn-secondary"
          >
            Start Monthly
          </a>
        </div>
      </div>

      <div className="guarantee">
        <p>🔒 Secure checkout via LemonSqueezy. 30-day money-back guarantee on all plans.</p>
      </div>

      <footer className="footer" style={{marginTop: '80px'}}>
        <div>© 2025 Prax. A product of SNIPAI UK LTD (Company No. 16865430)</div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@prax.digital">Contact</a>
        </div>
      </footer>
    </>
  );
}
