import Link from "next/link";

export const metadata = {
  title: "Submit a System — Prax",
  description: "Submit your AI system to Prax. Share with thousands of users and earn recognition.",
};

export default function SubmitPage() {
  return (
    <>
      <style>{`
        .submit-hero { text-align: center; padding: 60px 0 40px; }
        .submit-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
        .submit-hero p { font-size: 1.1rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 48px 0; }
        .benefit-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px; text-align: center; }
        .benefit-icon { font-size: 2rem; margin-bottom: 12px; }
        .benefit-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; }
        .benefit-desc { font-size: 0.9rem; color: var(--text-muted); }
        .submit-form { max-width: 600px; margin: 0 auto; padding: 40px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
        .form-group { margin-bottom: 24px; }
        .form-label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; }
        .form-input, .form-select, .form-textarea { width: 100%; padding: 12px 14px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-md); color: var(--text-primary); font-family: inherit; font-size: 0.95rem; }
        .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--accent); }
        .form-textarea { min-height: 200px; resize: vertical; font-family: monospace; }
        .form-hint { font-size: 0.8rem; color: var(--text-muted); margin-top: 6px; }
        .partner-note { background: var(--success-subtle); border: 1px solid rgba(16,185,129,0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px; }
        .partner-note p { font-size: 0.9rem; color: var(--text-primary); margin: 0; }
        .partner-note a { color: var(--success); }
        @media (max-width: 768px) { .benefits-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="submit-hero">
        <h1>Submit a System</h1>
        <p>Share your AI system with thousands of users. Get recognition, earn royalties, and help the community.</p>
      </section>

      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon">💰</div>
          <div className="benefit-title">70% Revenue Share</div>
          <div className="benefit-desc">Become a <Link href="/partners" style={{color: 'var(--accent)'}}>Prax Partner</Link> and earn 70% on every sale from your systems.</div>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🏆</div>
          <div className="benefit-title">Leaderboard Recognition</div>
          <div className="benefit-desc">Top contributors featured on our homepage and social channels.</div>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">📢</div>
          <div className="benefit-title">Social Shoutout</div>
          <div className="benefit-desc">We promote your systems to our audience with credit to you.</div>
        </div>
      </div>

      <div className="submit-form">
        <div className="partner-note">
          <p>💡 <strong>Want to earn money?</strong> <Link href="/partners">Become a Prax Partner</Link> and earn 70% revenue share on your systems!</p>
        </div>

        <form action="mailto:hello@prax.digital?subject=System%20Submission" method="post" encType="text/plain">
          <div className="form-group">
            <label className="form-label">System Name</label>
            <input type="text" className="form-input" name="name" placeholder="e.g., SEO Blog Post Generator" required />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" required>
              <option value="">Select a category</option>
              <option value="ai-agents">🤖 AI & Agents</option>
              <option value="marketing">📣 Marketing</option>
              <option value="education">📚 Education</option>
              <option value="reasoning">🧠 Reasoning</option>
              <option value="coding">💻 Coding</option>
              <option value="science">🔬 Science</option>
              <option value="business">💼 Business</option>
              <option value="writing">✍️ Writing</option>
              <option value="analysis">📊 Analysis</option>
              <option value="creative">🎨 Creative</option>
              <option value="professional">👔 Professional</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Short Description</label>
            <input type="text" className="form-input" name="description" placeholder="One sentence explaining what it does" required />
            <p className="form-hint">Keep it under 100 characters</p>
          </div>

          <div className="form-group">
            <label className="form-label">The System (Prompt)</label>
            <textarea className="form-textarea" name="prompt" placeholder="Paste your full system/prompt here..." required></textarea>
            <p className="form-hint">Include all instructions, variables, and formatting</p>
          </div>

          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-input" name="email" placeholder="you@example.com" required />
            <p className="form-hint">We'll notify you when your system is approved</p>
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '14px'}}>Submit System →</button>
        </form>
      </div>

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
