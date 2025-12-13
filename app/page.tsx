import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">⚡ 200+ Production-Ready Systems</div>
        <h1>AI Systems That <span>Actually Work</span></h1>
        <p>Stop wasting hours on prompt engineering. Copy battle-tested AI systems used by top teams.</p>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat-value" id="stat-free">100</div>
          <div className="stat-label">Free Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value" id="stat-pro">100</div>
          <div className="stat-label">Pro Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value" id="stat-categories">11</div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat">
          <div className="stat-value">Weekly</div>
          <div className="stat-label">Updates</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" placeholder="Search systems..." />
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort:</span>
            <button className="sort-btn active">Default</button>
            <button className="sort-btn">Top Voted</button>
            <button className="sort-btn">Most Copied</button>
            <button className="sort-btn">A-Z</button>
          </div>
        </div>
        <div className="filter-container">
          <button className="filter-btn active">All (200)</button>
          <button className="filter-btn">🤖 AI & Agents</button>
          <button className="filter-btn">📣 Marketing</button>
          <button className="filter-btn">📚 Education</button>
          <button className="filter-btn">🧠 Reasoning</button>
          <button className="filter-btn">💻 Coding</button>
          <button className="filter-btn">🔬 Science</button>
          <button className="filter-btn">💼 Business</button>
          <button className="filter-btn">✍️ Writing</button>
          <button className="filter-btn">📊 Analysis</button>
          <button className="filter-btn">🎨 Creative</button>
          <button className="filter-btn">👔 Professional</button>
        </div>
      </div>

      {/* Systems Table */}
      <div className="prompt-table-section">
        <p className="results-info">Showing 20 of 100 systems</p>
        <div className="table-wrapper">
          <table className="prompt-table">
            <thead>
              <tr>
                <th style={{width: '60px', textAlign: 'center'}}>Votes</th>
                <th style={{width: '140px'}}>Category</th>
                <th>System</th>
                <th style={{width: '70px', textAlign: 'center'}}>Copies</th>
                <th style={{width: '120px'}}>Model</th>
                <th style={{width: '140px', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-votes">
                  <div className="vote-box">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">42</span>
                    <button className="vote-btn">▼</button>
                  </div>
                </td>
                <td><span className="cat-badge">🤖 AI & Agents</span></td>
                <td>
                  <div className="p-title">Custom GPT Builder</div>
                  <div className="p-desc">Design a specialized GPT with complete instructions</div>
                </td>
                <td className="td-copies">1.2k</td>
                <td className="td-model">GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td className="td-votes">
                  <div className="vote-box">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">38</span>
                    <button className="vote-btn">▼</button>
                  </div>
                </td>
                <td><span className="cat-badge">💻 Coding</span></td>
                <td>
                  <div className="p-title">Production Python Generator</div>
                  <div className="p-desc">Google-style typed Python with tests and docs</div>
                </td>
                <td className="td-copies">892</td>
                <td className="td-model">Claude / GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td className="td-votes">
                  <div className="vote-box">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">35</span>
                    <button className="vote-btn">▼</button>
                  </div>
                </td>
                <td><span className="cat-badge">📣 Marketing</span></td>
                <td>
                  <div className="p-title">SEO Content System</div>
                  <div className="p-desc">Create high-ranking content with semantic optimization</div>
                </td>
                <td className="td-copies">756</td>
                <td className="td-model">GPT-4o / Claude</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td className="td-votes">
                  <div className="vote-box">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">31</span>
                    <button className="vote-btn">▼</button>
                  </div>
                </td>
                <td><span className="cat-badge">💼 Business</span></td>
                <td>
                  <div className="p-title">Lead Qualification Agent</div>
                  <div className="p-desc">Score and qualify leads with AI-powered analysis</div>
                </td>
                <td className="td-copies">623</td>
                <td className="td-model">Claude</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
              <tr>
                <td className="td-votes">
                  <div className="vote-box">
                    <button className="vote-btn">▲</button>
                    <span className="vote-count">28</span>
                    <button className="vote-btn">▼</button>
                  </div>
                </td>
                <td><span className="cat-badge">✍️ Writing</span></td>
                <td>
                  <div className="p-title">Blog Post Generator</div>
                  <div className="p-desc">Long-form content with proper structure and SEO</div>
                </td>
                <td className="td-copies">589</td>
                <td className="td-model">GPT-4o</td>
                <td className="td-actions">
                  <button className="btn-copy">📋 Copy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* See The Difference Section */}
      <section className="comparison-section" id="proof">
        <div className="comparison-header">
          <h2>See The Difference</h2>
          <p style={{color: 'var(--text-muted)'}}>Generic prompts vs. Prax production systems</p>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card">
            <div className="comparison-card-header">
              <div className="comparison-category">SEO Content</div>
              <div className="comparison-title">Blog Post Generator</div>
            </div>
            <div className="comparison-before">
              <div className="comparison-label">❌ Generic Prompt</div>
              <div className="comparison-text">"Write a blog post about coffee"</div>
            </div>
            <div className="comparison-after">
              <div className="comparison-label">✓ Prax System</div>
              <div className="comparison-text">2,000-word instruction set with competitor analysis, keyword extraction, and structured output</div>
            </div>
            <div className="comparison-result">
              <div className="comparison-result-text">3x longer time-on-page, 94% semantic coverage</div>
            </div>
          </div>
          <div className="comparison-card">
            <div className="comparison-card-header">
              <div className="comparison-category">Development</div>
              <div className="comparison-title">Code Review Agent</div>
            </div>
            <div className="comparison-before">
              <div className="comparison-label">❌ Generic Prompt</div>
              <div className="comparison-text">"Review this code for bugs"</div>
            </div>
            <div className="comparison-after">
              <div className="comparison-label">✓ Prax System</div>
              <div className="comparison-text">Multi-pass review covering security, performance, maintainability with severity ratings</div>
            </div>
            <div className="comparison-result">
              <div className="comparison-result-text">47 issues caught that basic review missed</div>
            </div>
          </div>
          <div className="comparison-card">
            <div className="comparison-card-header">
              <div className="comparison-category">Sales</div>
              <div className="comparison-title">Lead Qualification</div>
            </div>
            <div className="comparison-before">
              <div className="comparison-label">❌ Generic Prompt</div>
              <div className="comparison-text">"Is this a good lead?"</div>
            </div>
            <div className="comparison-after">
              <div className="comparison-label">✓ Prax System</div>
              <div className="comparison-text">BANT framework analysis with scoring matrix and next-step recommendations</div>
            </div>
            <div className="comparison-result">
              <div className="comparison-result-text">2.3x higher conversion to qualified meetings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-header">
          <h2>Choose Your Plan</h2>
          <p>From solo makers to teams — unlock production-ready AI systems</p>
        </div>
        
        <div style={{display:'flex', justifyContent:'center', gap:'32px', marginBottom:'32px', flexWrap:'wrap'}}>
          <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'0.9rem', color:'var(--text-secondary)'}}>
            <span>📝</span> Mega-Prompt
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'0.9rem', color:'var(--text-secondary)'}}>
            <span>🎬</span> Video Guide
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'0.9rem', color:'var(--text-secondary)'}}>
            <span>⚙️</span> Automation File
          </div>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-name">Starter Pack</div>
            <div className="pricing-desc">Perfect for trying Prax quality</div>
            <div className="pricing-price">$29</div>
            <div className="pricing-term">one-time payment</div>
            <ul className="pricing-features">
              <li>20 curated Pro systems</li>
              <li>All 11 categories sampled</li>
              <li>Prompt + Guide included</li>
              <li>Email support</li>
            </ul>
            <a href="https://praxai.lemonsqueezy.com/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec" className="pricing-btn pricing-btn-secondary">Get Starter Pack</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-name">Monthly Pro</div>
            <div className="pricing-desc">Always up-to-date access</div>
            <div className="pricing-price">$49<span>/mo</span></div>
            <div className="pricing-term">cancel anytime</div>
            <ul className="pricing-features">
              <li>100+ systems + all updates</li>
              <li>Prompt + Guide + Automation</li>
              <li>Tested on GPT-4o, Claude & Gemini</li>
              <li>Updates when models change</li>
            </ul>
            <a href="https://praxai.lemonsqueezy.com/buy/557bd908-945f-4dd3-bbc0-e701df7303b9" className="pricing-btn pricing-btn-secondary">Start Monthly</a>
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
            <a href="https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157" className="pricing-btn pricing-btn-primary">Get Team Playbooks</a>
          </div>
        </div>
        <div className="team-note">
          <p>🏢 <strong>Need Enterprise?</strong> Custom systems, unlimited seats, dedicated support. <Link href="/agencies">Learn more →</Link></p>
        </div>
      </section>

      {/* Footer */}
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
