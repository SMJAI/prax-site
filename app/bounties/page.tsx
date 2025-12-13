import Link from "next/link";

export const metadata = {
  title: "Bounty Board — Prax",
  description: "Get paid to build AI systems. View active bounties with upfront payment + ongoing royalties.",
};

export default function BountiesPage() {
  const bounties = [
    {
      title: "Real Estate Lease Analyzer",
      reward: "$500",
      category: "Legal",
      difficulty: "Intermediate",
      urgent: true,
      description: "Build an AI system that analyzes commercial real estate leases, extracts key terms, identifies red flags, and generates a summary memo.",
      deadline: "Dec 31, 2025"
    },
    {
      title: "LinkedIn Outreach Sequence Generator",
      reward: "$750",
      category: "Sales",
      difficulty: "Advanced",
      urgent: false,
      description: "Create a multi-step system that researches a prospect's LinkedIn profile and generates a personalized 5-message outreach sequence.",
      deadline: "Jan 15, 2026"
    },
    {
      title: "YouTube Script-to-Shorts Converter",
      reward: "$750",
      category: "Marketing",
      difficulty: "Intermediate",
      urgent: false,
      description: "Build a system that takes a long-form YouTube video script and extracts the most engaging 60-second segments as Shorts scripts.",
      deadline: "Jan 20, 2026"
    }
  ];

  return (
    <>
      <style>{`
        .bounty-hero { text-align: center; padding: 60px 0 40px; }
        .bounty-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
        .bounty-hero p { font-size: 1.1rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }
        .bounty-stats { display: flex; justify-content: center; gap: 48px; padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); margin: 32px 0; }
        .bounty-stat { text-align: center; }
        .bounty-stat-value { font-size: 1.75rem; font-weight: 700; color: var(--success); }
        .bounty-stat-label { font-size: 0.8rem; color: var(--text-muted); }
        .bounty-list { display: flex; flex-direction: column; gap: 20px; }
        .bounty-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px; }
        .bounty-card:hover { border-color: var(--accent); }
        .bounty-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; }
        .bounty-card-title { font-size: 1.25rem; font-weight: 700; }
        .bounty-reward-amount { font-size: 1.5rem; font-weight: 800; color: var(--success); }
        .bounty-reward-label { font-size: 0.75rem; color: var(--text-muted); }
        .bounty-card-meta { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
        .bounty-tag { padding: 4px 10px; background: var(--bg-tertiary); border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--text-muted); }
        .bounty-tag.category { background: var(--accent-subtle); color: var(--accent); }
        .bounty-tag.urgent { background: rgba(239,68,68,0.15); color: #ef4444; }
        .bounty-card-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; }
        .bounty-card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid var(--border-color); }
        .bounty-deadline { font-size: 0.85rem; color: var(--text-muted); }
        .suggest-section { margin-top: 60px; padding: 40px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); text-align: center; }
        .suggest-section h2 { font-size: 1.5rem; margin-bottom: 12px; }
        .suggest-section p { color: var(--text-muted); margin-bottom: 24px; }
        @media (max-width: 768px) { .bounty-stats { flex-direction: column; gap: 16px; } .bounty-card-header { flex-direction: column; } }
      `}</style>

      <section className="bounty-hero">
        <h1>🎯 Bounty Board</h1>
        <p>Get paid to build AI systems. Upfront payment + 70% ongoing royalties on every sale.</p>
      </section>

      <div className="bounty-stats">
        <div className="bounty-stat">
          <div className="bounty-stat-value">{bounties.length}</div>
          <div className="bounty-stat-label">Active Bounties</div>
        </div>
        <div className="bounty-stat">
          <div className="bounty-stat-value">$2,000</div>
          <div className="bounty-stat-label">Total Available</div>
        </div>
        <div className="bounty-stat">
          <div className="bounty-stat-value">70%</div>
          <div className="bounty-stat-label">Ongoing Royalties</div>
        </div>
      </div>

      <div className="bounty-list">
        {bounties.map((bounty, index) => (
          <div key={index} className="bounty-card">
            <div className="bounty-card-header">
              <div>
                <div className="bounty-card-title">{bounty.title}</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div className="bounty-reward-amount">{bounty.reward}</div>
                <div className="bounty-reward-label">+ 70% royalties</div>
              </div>
            </div>
            <div className="bounty-card-meta">
              <span className="bounty-tag category">{bounty.category}</span>
              <span className="bounty-tag">{bounty.difficulty}</span>
              {bounty.urgent && <span className="bounty-tag urgent">🔥 Urgent</span>}
            </div>
            <div className="bounty-card-desc">{bounty.description}</div>
            <div className="bounty-card-footer">
              <span className="bounty-deadline">⏰ Deadline: {bounty.deadline}</span>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfTLEaS32NcqHFQ32maGTJgR8y1AKJysxcy2s3PMKFHQwnkw/viewform" target="_blank" className="btn btn-primary">Claim Bounty →</a>
            </div>
          </div>
        ))}
      </div>

      <section className="suggest-section">
        <h2>Don't See What You're Looking For?</h2>
        <p>Suggest a bounty and we'll consider adding it. Or propose your own system idea — if there's demand, we'll create a bounty for it.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfTLEaS32NcqHFQ32maGTJgR8y1AKJysxcy2s3PMKFHQwnkw/viewform" target="_blank" className="btn btn-primary">Suggest a Bounty →</a>
      </section>

      <footer className="footer" style={{marginTop: '60px'}}>
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
