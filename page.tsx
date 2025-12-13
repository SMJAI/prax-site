import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UpgradePage() {
  const user = await currentUser();

  // If already pro, redirect to vault
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
        .upgrade-box { max-width: 500px; margin: 0 auto; background: var(--bg-secondary); border: 2px solid var(--accent); border-radius: var(--radius-lg); padding: 40px; text-align: center; }
        .upgrade-box h2 { font-size: 1.5rem; margin-bottom: 8px; }
        .upgrade-box .price { font-size: 3rem; font-weight: 800; color: var(--accent); margin: 24px 0; }
        .upgrade-box .price span { font-size: 1rem; font-weight: 400; color: var(--text-muted); }
        .upgrade-features { list-style: none; text-align: left; margin: 24px 0; }
        .upgrade-features li { padding: 12px 0; border-bottom: 1px solid var(--border-color); font-size: 0.95rem; display: flex; align-items: center; gap: 10px; }
        .upgrade-features li:last-child { border-bottom: none; }
        .upgrade-features li::before { content: '✓'; color: var(--success); font-weight: 700; font-size: 1.1rem; }
        .upgrade-btn { display: block; width: 100%; padding: 16px; background: var(--accent); color: white; border: none; border-radius: var(--radius-md); font-size: 1.1rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: all 0.2s; }
        .upgrade-btn:hover { background: #a78bfa; }
        .upgrade-note { margin-top: 16px; font-size: 0.85rem; color: var(--text-muted); }
        .other-options { margin-top: 48px; text-align: center; }
        .other-options h3 { font-size: 1.1rem; margin-bottom: 20px; color: var(--text-muted); }
        .options-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 600px; margin: 0 auto; }
        .option-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 24px; text-align: center; }
        .option-card:hover { border-color: var(--accent); }
        .option-card h4 { font-size: 1rem; margin-bottom: 4px; }
        .option-card .option-price { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 8px 0; }
        .option-card p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 16px; }
        .option-btn { display: inline-block; padding: 10px 20px; border: 1px solid var(--border-color); border-radius: var(--radius-md); color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; transition: all 0.2s; }
        .option-btn:hover { border-color: var(--accent); color: var(--text-primary); }
      `}</style>

      <section className="upgrade-hero">
        <h1>🔐 Unlock Pro Playbooks</h1>
        <p>You're signed in, but you need Pro access to view the Vault. Choose a plan below to unlock 100+ production-ready AI systems.</p>
      </section>

      <div className="upgrade-box">
        <h2>Team Playbooks</h2>
        <p style={{color: 'var(--text-muted)'}}>Best value for teams & agencies</p>
        <div className="price">$299 <span>one-time</span></div>
        <ul className="upgrade-features">
          <li>100+ production-ready AI systems</li>
          <li>Mega-Prompt + Video Guide + Automation</li>
          <li>Team license (up to 5 seats)</li>
          <li>Lifetime access + updates</li>
          <li>Priority support</li>
        </ul>
        <a 
          href={`https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157?checkout[email]=${encodeURIComponent(userEmail)}`} 
          className="upgrade-btn"
        >
          Get Pro Access →
        </a>
        <p className="upgrade-note">🔒 Secure checkout via LemonSqueezy. 30-day money-back guarantee.</p>
      </div>

      <div className="other-options">
        <h3>Other Options</h3>
        <div className="options-grid">
          <div className="option-card">
            <h4>Starter Pack</h4>
            <div className="option-price">$29</div>
            <p>20 curated systems to try</p>
            <a 
              href={`https://praxai.lemonsqueezy.com/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec?checkout[email]=${encodeURIComponent(userEmail)}`} 
              className="option-btn"
            >
              Get Starter
            </a>
          </div>
          <div className="option-card">
            <h4>Monthly Pro</h4>
            <div className="option-price">$49/mo</div>
            <p>All systems, cancel anytime</p>
            <a 
              href={`https://praxai.lemonsqueezy.com/buy/557bd908-945f-4dd3-bbc0-e701df7303b9?checkout[email]=${encodeURIComponent(userEmail)}`} 
              className="option-btn"
            >
              Start Monthly
            </a>
          </div>
        </div>
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
