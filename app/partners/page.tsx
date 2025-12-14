import Link from "next/link";

export const metadata = {
  title: "Prax Partners — Earn 70% Revenue Share Building AI Systems",
  description: "Join Prax as a Partner. Build AI systems, we handle marketing. You keep 70% of every sale.",
};

export default function PartnersPage() {
  return (
    <>
      <style>{`
        .partner-hero { text-align: center; padding: 80px 0 60px; position: relative; }
        .partner-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2)); border: 1px solid rgba(34,197,94,0.3); border-radius: 24px; font-size: 0.8rem; font-weight: 600; color: #10b981; margin-bottom: 24px; }
        .partner-hero h1 { font-size: 2.75rem; font-weight: 800; margin-bottom: 20px; line-height: 1.2; }
        .partner-hero h1 span { color: #10b981; }
        .partner-hero > p { font-size: 1.25rem; color: #a1a1aa; max-width: 650px; margin: 0 auto 32px; }
        .hero-stats { display: flex; gap: 48px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap; }
        .hero-stat { text-align: center; }
        .hero-stat-value { font-size: 2.5rem; font-weight: 800; color: #10b981; }
        .hero-stat-label { font-size: 0.85rem; color: #6b6b76; }
        .how-section { padding: 60px 0; }
        .how-header { text-align: center; margin-bottom: 48px; }
        .how-header h2 { font-size: 2rem; margin-bottom: 12px; }
        .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .how-card { text-align: center; }
        .how-card-number { width: 48px; height: 48px; background: #8b5cf6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; color: white; margin: 0 auto 16px; }
        .how-card h3 { font-size: 1.1rem; margin-bottom: 8px; }
        .how-card p { font-size: 0.9rem; color: #6b6b76; }
        .bounties-section { padding: 60px 0; }
        .bounties-header { text-align: center; margin-bottom: 40px; }
        .bounties-header h2 { font-size: 2rem; margin-bottom: 12px; }
        .bounties-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px; }
        .bounty-mini { background: #12121a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; }
        .bounty-mini:hover { border-color: #8b5cf6; }
        .bounty-mini-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
        .bounty-mini-title { font-size: 1rem; font-weight: 600; }
        .bounty-mini-status { font-size: 0.7rem; padding: 4px 8px; background: rgba(34,197,94,0.15); color: #10b981; border-radius: 10px; }
        .bounty-mini-reward { font-size: 1.5rem; font-weight: 800; color: #10b981; margin-bottom: 8px; }
        .bounty-mini-desc { font-size: 0.8rem; color: #6b6b76; }
        .bounties-cta { text-align: center; }
        .split-section { padding: 60px 0; background: #12121a; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); margin: 0 -24px; padding-left: 24px; padding-right: 24px; }
        .split-header { text-align: center; margin-bottom: 48px; }
        .split-header h2 { font-size: 2rem; margin-bottom: 12px; }
        .split-content { max-width: 700px; margin: 0 auto; }
        .split-bar { display: flex; border-radius: 12px; overflow: hidden; margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .split-you { flex: 7; background: #10b981; padding: 32px; text-align: center; }
        .split-prax { flex: 3; background: #8b5cf6; padding: 32px; text-align: center; }
        .split-percent { font-size: 2.5rem; font-weight: 800; color: white; }
        .split-label { font-size: 0.85rem; color: rgba(255,255,255,0.8); }
        .split-explainer { background: #0a0a0f; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
        .split-explainer h4 { font-size: 1.1rem; margin-bottom: 16px; }
        .split-explainer p { font-size: 0.9rem; color: #a1a1aa; line-height: 1.7; margin-bottom: 16px; }
        .split-example-box { background: #12121a; border-radius: 8px; padding: 20px; margin-top: 20px; }
        .split-example-box h5 { font-size: 0.85rem; color: #6b6b76; margin-bottom: 12px; }
        .split-example-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 0.9rem; }
        .split-example-row.total { border-top: 1px solid rgba(255,255,255,0.08); margin-top: 8px; padding-top: 12px; font-weight: 600; }
        .cta-section { padding: 80px 0; text-align: center; }
        .cta-section h2 { font-size: 2rem; margin-bottom: 16px; }
        .cta-section > p { color: #a1a1aa; max-width: 500px; margin: 0 auto 32px; }
        .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .apply-note { margin-top: 16px; font-size: 0.85rem; color: #6b6b76; }
        @media (max-width: 900px) { .how-grid, .bounties-grid { grid-template-columns: 1fr; } .hero-stats { flex-direction: column; gap: 24px; } .partner-hero h1 { font-size: 2rem; } }
      `}</style>

      <section className="partner-hero">
        <div className="partner-badge">💰 PARTNER PROGRAM</div>
        <h1>Build Once.<br/>Earn <span>Forever.</span></h1>
        <p>You're great at building AI workflows. We're great at selling them. Build systems, get paid every month based on usage.</p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">70%</div>
            <div className="hero-stat-label">Revenue Pool</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">$0</div>
            <div className="hero-stat-label">Upfront Cost</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">∞</div>
            <div className="hero-stat-label">Passive Income</div>
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScx-6Fg9C5FvuKwGNEVo41aSRhKLbpxXtAcjV9DG4KqTL-qcQ/viewform" target="_blank" className="btn btn-primary" style={{padding: '16px 32px', fontSize: '1.1rem'}}>Apply to Become a Partner →</a>
        <p className="apply-note">Takes 2 minutes. We review applications weekly.</p>
      </section>

      <section className="how-section">
        <div className="how-header">
          <h2>How It Works</h2>
        </div>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-card-number">1</div>
            <h3>Apply & Get Approved</h3>
            <p>Show us your expertise. We accept prompt engineers, AI consultants, and automation builders.</p>
          </div>
          <div className="how-card">
            <div className="how-card-number">2</div>
            <h3>Build Systems</h3>
            <p>Create production-ready AI systems. We provide templates, guidelines, and feedback.</p>
          </div>
          <div className="how-card">
            <div className="how-card-number">3</div>
            <h3>Get Paid Monthly</h3>
            <p>Earn from the revenue pool based on how often your systems are used. More usage = more money.</p>
          </div>
        </div>
      </section>

      <section className="bounties-section">
        <div className="bounties-header">
          <h2>🎯 Top Bounties Available Now</h2>
          <p style={{color: '#6b6b76'}}>Get paid upfront + ongoing royalties. Claim one today.</p>
        </div>
        <div className="bounties-grid">
          <div className="bounty-mini">
            <div className="bounty-mini-header">
              <span className="bounty-mini-title">Real Estate Lease Analyzer</span>
              <span className="bounty-mini-status">🟢 Open</span>
            </div>
            <div className="bounty-mini-reward">$500</div>
            <div className="bounty-mini-desc">Advance + Usage Royalties</div>
          </div>
          <div className="bounty-mini">
            <div className="bounty-mini-header">
              <span className="bounty-mini-title">LinkedIn Outreach Generator</span>
              <span className="bounty-mini-status">🟢 Open</span>
            </div>
            <div className="bounty-mini-reward">$750</div>
            <div className="bounty-mini-desc">Advance + Usage Royalties</div>
          </div>
          <div className="bounty-mini">
            <div className="bounty-mini-header">
              <span className="bounty-mini-title">YouTube Script-to-Shorts</span>
              <span className="bounty-mini-status">🟢 Open</span>
            </div>
            <div className="bounty-mini-reward">$750</div>
            <div className="bounty-mini-desc">Advance + Usage Royalties</div>
          </div>
        </div>
        <div className="bounties-cta">
          <Link href="/bounties" className="btn btn-primary">View All Bounties →</Link>
        </div>
      </section>

      <section className="split-section">
        <div className="split-header">
          <h2>The Revenue Model</h2>
          <p style={{color: '#6b6b76'}}>Fair, transparent, usage-based payouts</p>
        </div>
        <div className="split-content">
          <div className="split-bar">
            <div className="split-you">
              <div className="split-percent">70%</div>
              <div className="split-label">Partner Pool</div>
            </div>
            <div className="split-prax">
              <div className="split-percent">30%</div>
              <div className="split-label">Prax</div>
            </div>
          </div>
          
          <div className="split-explainer">
            <h4>💰 How Payouts Work</h4>
            <p>We take <strong>70% of all monthly revenue</strong> and distribute it to partners based on <strong>system usage</strong> — how many times users copy, use, or run your systems.</p>
            <p>This means: the more useful your system, the more you earn. Build something people actually use, and get paid every single month.</p>
            
            <div className="split-example-box">
              <h5>Example: Prax earns $10,000 in a month</h5>
              <div className="split-example-row">
                <span>Partner Pool (70%)</span>
                <span>$7,000</span>
              </div>
              <div className="split-example-row">
                <span>Your systems = 15% of total usage</span>
                <span></span>
              </div>
              <div className="split-example-row total">
                <span>Your Payout</span>
                <span style={{color: '#10b981'}}>$1,050/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Build & Earn?</h2>
        <p>Join the Prax Partner Program. Build systems once, get paid forever.</p>
        <div className="cta-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScx-6Fg9C5FvuKwGNEVo41aSRhKLbpxXtAcjV9DG4KqTL-qcQ/viewform" target="_blank" className="btn btn-primary" style={{padding: '14px 28px'}}>Apply Now →</a>
          <Link href="/bounties" className="btn" style={{padding: '14px 28px'}}>View Bounties</Link>
        </div>
        <p className="apply-note">We review applications weekly and respond within 48 hours.</p>
      </section>

      <footer className="footer">
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
