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
        .upgrade-hero { text-align: center; padding: 80px 0 60px; }
        .upgrade-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
        .upgrade-hero p { font-size: 1.15rem; color: var(--text-secondary); max-width: 550px; margin: 0 auto 32px; }
        .upgrade-box { max-width: 500px; margin: 0 auto; background: var(--bg-secondary); border: 2px solid var(--accent); border-radius: 12px; padding: 40px; text-align: center; }
        .upgrade-box h2 { font-size: 1.5rem; margin-bottom: 8px; }
        .upgrade-box .price { font-size: 3rem; font-weight: 800; color: #8b5cf6; margin: 24px 0; }
        .upgrade-box .price span { font-size: 1rem; font-weight: 400; color: #6b6b76; }
        .upgrade-features { list-style: none; text-align: left; margin: 24px 0; padding: 0; }
        .upgrade-features li { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 0.95rem; display: flex; align-items: center; gap: 10px; }
        .upgrade-features li:last-child { border-bottom: none; }
        .upgrade-features li::before { content: '✓'; color: #10b981; font-weight: 700; font-size: 1.1rem; }
        .upgrade-btn { display: block; width: 100%; padding: 16px; background: #8b5cf6; color: white; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 700; cursor: pointer; text-decoration: none; }
        .upgrade-btn:hover { background: #a78bfa; }
        .upgrade-note { margin-top: 16px; font-size: 0.85rem; color: #6b6b76; }
      `}</style>

      <section className="upgrade-hero">
        <h1>🔐 Unlock Pro Playbooks</h1>
        <p>You're signed in, but you need Pro access to view the Vault. Choose a plan below.</p>
      </section>

      <div className="upgrade-box">
        <h2>Team Playbooks</h2>
        <p style={{color: '#6b6b76'}}>Best value for teams & agencies</p>
        <div className="price">$299 <span>one-time</span></div>
        <ul className="upgrade-features">
          <li>100+ production-ready AI systems</li>
          <li>Mega-Prompt + Video Guide + Automation</li>
          <li>Team license (up to 5 seats)</li>
          <li>Lifetime access + updates</li>
        </ul>
        <a 
          href={`https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157?checkout[email]=${encodeURIComponent(userEmail)}`} 
          className="upgrade-btn"
        >
          Get Pro Access →
        </a>
        <p className="upgrade-note">🔒 Secure checkout. 30-day money-back guarantee.</p>
      </div>

      <footer className="footer" style={{marginTop: '80px'}}>
        <div>© 2025 Prax. A product of SNIPAI UK LTD</div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
}