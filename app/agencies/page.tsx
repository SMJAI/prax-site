import Link from "next/link";

export const metadata = {
  title: "Prax for Agencies — AI Systems for Your Entire Team",
  description: "Equip your agency with production-ready AI systems. Deliver client work 10x faster with battle-tested prompts.",
};

export default function AgenciesPage() {
  return (
    <>
      <style>{`
        .agency-hero { text-align: center; padding: 80px 0 60px; position: relative; }
        .agency-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2)); border: 1px solid rgba(34,197,94,0.3); border-radius: 24px; font-size: 0.8rem; font-weight: 600; color: var(--success); margin-bottom: 24px; }
        .agency-hero h1 { font-size: 2.75rem; font-weight: 800; margin-bottom: 20px; line-height: 1.2; }
        .agency-hero h1 span { background: linear-gradient(135deg, #a78bfa, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .agency-hero p { font-size: 1.25rem; color: var(--text-secondary); max-width: 650px; margin: 0 auto 32px; }
        .hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        
        .demo-section { padding: 60px 0; }
        .demo-header { text-align: center; margin-bottom: 48px; }
        .demo-header h2 { font-size: 2rem; margin-bottom: 12px; }
        .demo-header p { color: var(--text-muted); }
        .demo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 1000px; margin: 0 auto; }
        .demo-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; transition: all 0.2s; }
        .demo-card:hover { border-color: #8b5cf6; transform: translateY(-4px); }
        .demo-video { position: relative; width: 100%; padding-bottom: 56.25%; background: #0a0a0f; }
        .demo-video iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        .demo-content { padding: 24px; }
        .demo-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
        .demo-desc { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; }
        .demo-tag { display: inline-block; padding: 4px 12px; background: rgba(139,92,246,0.15); color: #a78bfa; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
        
        .pain-section { padding: 60px 0; }
        .pain-header { text-align: center; margin-bottom: 48px; }
        .pain-header h2 { font-size: 2rem; margin-bottom: 12px; }
        .pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pain-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 28px; }
        .pain-card-icon { font-size: 2rem; margin-bottom: 16px; }
        .pain-card h3 { font-size: 1.1rem; margin-bottom: 8px; color: #ef4444; }
        .pain-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
        .includes-section { padding: 60px 0; }
        .includes-header { text-align: center; margin-bottom: 48px; }
        .includes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .includes-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 32px; text-align: center; }
        .includes-card-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .includes-card h3 { font-size: 1.1rem; margin-bottom: 8px; }
        .includes-card p { font-size: 0.85rem; color: var(--text-muted); }
        .cta-section { padding: 80px 0; text-align: center; }
        .cta-section h2 { font-size: 2rem; margin-bottom: 16px; }
        .cta-section p { color: var(--text-secondary); max-width: 500px; margin: 0 auto 32px; }
        .cta-buttons { display: flex; gap: 16px; justify-content: center; }
        @media (max-width: 900px) { .pain-grid, .includes-grid, .demo-grid { grid-template-columns: 1fr; } .agency-hero h1 { font-size: 2rem; } }
      `}</style>

      <section className="agency-hero">
        <div className="agency-badge">🏢 BUILT FOR AGENCIES</div>
        <h1>Deliver Client Work<br/><span>10x Faster</span></h1>
        <p>Equip your entire team with production-ready AI systems. Battle-tested prompts that deliver consistent, high-quality output every time.</p>
        <div className="hero-cta">
          <a href="https://praxdigital.lemonsqueezy.com/checkout/buy/15eeba33-3d0d-45a4-898b-998cefce0157" className="btn btn-primary" style={{padding: '16px 32px', fontSize: '1.1rem'}}>Get Team Access — $299</a>
          <a href="#demos" className="btn" style={{padding: '16px 32px'}}>Watch Demos ↓</a>
        </div>
      </section>

      <section className="demo-section" id="demos">
        <div className="demo-header">
          <h2>🎬 See Prax In Action</h2>
          <p>Watch how agencies use these systems to deliver client work faster</p>
        </div>
        
        <div className="demo-grid">
          <div className="demo-card">
            <div className="demo-video">
              <iframe 
                src="https://www.youtube.com/embed/mI_3cSEAMOY" 
                title="Landing Page Copy Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="demo-content">
              <div className="demo-title">Landing Page Copy in 2 Minutes</div>
              <div className="demo-desc">Generate complete, high-converting landing page copy using the PAS framework. Perfect for client websites and campaigns.</div>
              <span className="demo-tag">Marketing</span>
            </div>
          </div>
          
          <div className="demo-card">
            <div className="demo-video">
              <iframe 
                src="https://www.youtube.com/embed/pUx_wlTjC2U" 
                title="Custom GPT Builder Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="demo-content">
              <div className="demo-title">Build Custom GPTs for Clients</div>
              <div className="demo-desc">Create specialized AI assistants with complete instructions and conversation starters. A new revenue stream for your agency.</div>
              <span className="demo-tag">AI & Agents</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pain-section">
        <div className="pain-header">
          <h2>Sound Familiar?</h2>
          <p style={{color: 'var(--text-muted)'}}>The problems every agency faces with AI adoption</p>
        </div>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-card-icon">😤</div>
            <h3>"Our AI outputs are inconsistent"</h3>
            <p>One project gets great results, another gets garbage. There's no standard. No quality control. Every deliverable is a gamble.</p>
          </div>
          <div className="pain-card">
            <div className="pain-card-icon">⏰</div>
            <h3>"We waste hours on prompt engineering"</h3>
            <p>Your team spends more time figuring out how to ask ChatGPT than actually doing the work. That's expensive trial-and-error.</p>
          </div>
          <div className="pain-card">
            <div className="pain-card-icon">💸</div>
            <h3>"We can't scale without hiring"</h3>
            <p>More clients means more headcount. But what if your current team could handle 2x the workload with the right AI systems?</p>
          </div>
        </div>
      </section>

      <section className="includes-section">
        <div className="includes-header">
          <h2>What Your Team Gets</h2>
          <p style={{color: 'var(--text-muted)'}}>Every system is a complete package, not just text</p>
        </div>
        <div className="includes-grid">
          <div className="includes-card">
            <div className="includes-card-icon">📝</div>
            <h3>The Mega-Prompt</h3>
            <p>Production-ready prompt with variables to customize. Copy-paste into any AI model.</p>
          </div>
          <div className="includes-card">
            <div className="includes-card-icon">🎬</div>
            <h3>Video Guide</h3>
            <p>Short video showing exactly how to use it, what to change, and how to handle edge cases.</p>
          </div>
          <div className="includes-card">
            <div className="includes-card-icon">⚙️</div>
            <h3>Automation File</h3>
            <p>Make.com / Zapier blueprint to run the system on 100 inputs automatically.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Deliver More With Less?</h2>
        <p>Join agencies who stopped wasting time on prompt engineering and started delivering.</p>
        <div className="cta-buttons">
          <a href="https://praxdigital.lemonsqueezy.com/checkout/buy/15eeba33-3d0d-45a4-898b-998cefce0157" className="btn btn-primary" style={{padding: '16px 32px'}}>Get Team Access — $299</a>
          <a href="mailto:hello@prax.digital?subject=Agency%20Inquiry" className="btn" style={{padding: '16px 32px'}}>Talk to Us →</a>
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
