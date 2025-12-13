import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function VaultPage() {
  const user = await currentUser();

  return (
    <>
      <section className="vault-hero">
        <h1>🔐 Pro Playbooks</h1>
        <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
          Welcome back, <strong>{user?.firstName || user?.emailAddresses[0]?.emailAddress || 'Pro Member'}</strong>! 
          Access your complete library of production-ready AI systems.
        </p>
      </section>

      <div className="vault-stats">
        <div className="vault-stat">
          <div className="vault-stat-value">100+</div>
          <div className="vault-stat-label">Pro Systems</div>
        </div>
        <div className="vault-stat">
          <div className="vault-stat-value">11</div>
          <div className="vault-stat-label">Categories</div>
        </div>
        <div className="vault-stat">
          <div className="vault-stat-value">Weekly</div>
          <div className="vault-stat-label">Updates</div>
        </div>
        <div className="vault-stat">
          <div className="vault-stat-value">∞</div>
          <div className="vault-stat-label">Lifetime Access</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" placeholder="Search pro systems..." />
          </div>
        </div>
        <div className="filter-container">
          <button className="filter-btn active">All Pro Systems</button>
          <button className="filter-btn">🤖 AI & Agents</button>
          <button className="filter-btn">📣 Marketing</button>
          <button className="filter-btn">💻 Coding</button>
          <button className="filter-btn">💼 Business</button>
          <button className="filter-btn">✍️ Writing</button>
        </div>
      </div>

      {/* Pro Systems Table */}
      <div className="prompt-table-section">
        <p className="results-info">Showing 100+ Pro Systems</p>
        <div className="table-wrapper">
          <table className="prompt-table">
            <thead>
              <tr>
                <th style={{width: '140px'}}>Category</th>
                <th>System</th>
                <th style={{width: '120px'}}>Model</th>
                <th style={{width: '140px', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="cat-badge">🤖 AI & Agents</span></td>
                <td>
                  <div className="p-title">🔥 Enterprise AI Assistant Builder</div>
                  <div className="p-desc">Build complete AI assistants with memory, tools, and guardrails</div>
                </td>
                <td className="td-model">Claude / GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td><span className="cat-badge">📣 Marketing</span></td>
                <td>
                  <div className="p-title">🔥 Full-Funnel Content System</div>
                  <div className="p-desc">Create TOFU, MOFU, BOFU content that converts</div>
                </td>
                <td className="td-model">GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td><span className="cat-badge">💻 Coding</span></td>
                <td>
                  <div className="p-title">🔥 Full-Stack Code Generator</div>
                  <div className="p-desc">Generate complete features with frontend, backend, and tests</div>
                </td>
                <td className="td-model">Claude</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td><span className="cat-badge">💼 Business</span></td>
                <td>
                  <div className="p-title">🔥 Sales Call Analyzer</div>
                  <div className="p-desc">Analyze sales calls for objections, sentiment, and next steps</div>
                </td>
                <td className="td-model">Claude / GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td><span className="cat-badge">✍️ Writing</span></td>
                <td>
                  <div className="p-title">🔥 Book Outline Generator</div>
                  <div className="p-desc">Create detailed book outlines with chapter summaries</div>
                </td>
                <td className="td-model">GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
