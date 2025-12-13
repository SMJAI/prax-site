import Link from "next/link";

export const metadata = {
  title: "About — Prax",
  description: "About Prax - AI Systems That Actually Work. Our mission, methodology, and how we curate systems.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-hero { text-align: center; padding: 60px 0 48px; }
        .about-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
        .about-hero p { font-size: 1.15rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.7; }
        .mission-section { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 48px 0; }
        .mission-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 32px; text-align: center; }
        .mission-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .mission-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .mission-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
        .contact-section { text-align: center; padding: 60px 0; }
        .contact-section h2 { font-size: 1.5rem; margin-bottom: 12px; }
        .contact-section > p { color: var(--text-muted); margin-bottom: 24px; }
        .contact-methods { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .contact-method { display: flex; align-items: center; gap: 8px; padding: 16px 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); text-decoration: none; color: var(--text-primary); transition: all 0.2s; }
        .contact-method:hover { border-color: var(--accent); }
        @media (max-width: 768px) { .mission-section { grid-template-columns: 1fr; } }
      `}</style>

      <section className="about-hero">
        <h1>About Prax</h1>
        <p>We're building the world's most useful library of AI systems. Not clever tricks — clear instructions that tell AI exactly what you need.</p>
      </section>

      <div className="stats-bar">
        <div className="stat">
          <div className="stat-value">100</div>
          <div className="stat-label">Free Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value">100</div>
          <div className="stat-label">Pro Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value">11</div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat">
          <div className="stat-value">Weekly</div>
          <div className="stat-label">Updates</div>
        </div>
      </div>

      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <div className="mission-title">Curated Quality</div>
          <div className="mission-desc">Every system is hand-reviewed and tested. No filler, no fluff — just systems that actually work.</div>
        </div>
        <div className="mission-card">
          <div className="mission-icon">⚡</div>
          <div className="mission-title">Ready to Use</div>
          <div className="mission-desc">Copy, paste, and go. Every system is formatted and ready to use with your preferred AI model.</div>
        </div>
        <div className="mission-card">
          <div className="mission-icon">🌱</div>
          <div className="mission-title">Always Growing</div>
          <div className="mission-desc">New systems added weekly. Community submissions keep our library fresh and relevant.</div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions, feedback, or want to contribute?</p>
        <div className="contact-methods">
          <a href="mailto:hello@prax.digital" className="contact-method">
            <span>📧</span> hello@prax.digital
          </a>
          <a href="https://twitter.com/PraxDigital" target="_blank" className="contact-method">
            <span>𝕏</span> @PraxDigital
          </a>
          <Link href="/partners" className="contact-method">
            <span>💰</span> Become a Partner
          </Link>
        </div>
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
