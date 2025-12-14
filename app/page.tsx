"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// All 100 prompts from your original app.js
const PROMPTS_DATA = {
  categories: [
    { id: "ai-agents", name: "AI & Agents", icon: "🤖" },
    { id: "marketing", name: "Marketing", icon: "📱" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "reasoning", name: "Reasoning", icon: "🧠" },
    { id: "coding", name: "Coding", icon: "💻" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "writing", name: "Writing", icon: "✍️" },
    { id: "analysis", name: "Analysis", icon: "📊" },
    { id: "creative", name: "Creative", icon: "🎨" },
    { id: "professional", name: "Professional", icon: "👔" }
  ],
  prompts: [
    // AI & AGENTS (6)
    {id:"ai01",category:"ai-agents",title:"Custom GPT Builder",desc:"Design a specialized GPT with complete instructions",model:"GPT-4o",prompt:`You are an expert at designing Custom GPTs...`},
    {id:"ai02",category:"ai-agents",title:"Prompt Improver",desc:"Transforms basic prompts into effective ones",model:"Claude / GPT-4o",prompt:`You are a prompt engineering expert...`},
    {id:"ai03",category:"ai-agents",title:"AI Workflow Designer",desc:"Creates multi-step AI automation workflows",model:"Claude / GPT-4o",prompt:`Design an AI automation workflow...`},
    {id:"ai04",category:"ai-agents",title:"Chain of Thought Prompt",desc:"Forces step-by-step reasoning",model:"o1 / Claude",prompt:`Solve using explicit chain-of-thought reasoning...`},
    {id:"ai05",category:"ai-agents",title:"Few-Shot Example Builder",desc:"Creates examples that teach AI your style",model:"Claude / GPT-4o",prompt:`Create few-shot examples for...`},
    {id:"ai06",category:"ai-agents",title:"AI Output Evaluator",desc:"Scores and critiques AI content",model:"Claude / GPT-4o",prompt:`Evaluate this AI output...`},
    
    // MARKETING (6)
    {id:"mkt01",category:"marketing",title:"Value Proposition Canvas",desc:"Creates compelling value propositions",model:"Claude / GPT-4o",prompt:`Create a value proposition...`},
    {id:"mkt02",category:"marketing",title:"Customer Persona Builder",desc:"Creates detailed buyer personas",model:"Claude / GPT-4o",prompt:`Create a buyer persona...`},
    {id:"mkt03",category:"marketing",title:"A/B Test Hypothesis Generator",desc:"Creates experiment hypotheses",model:"Claude / GPT-4o",prompt:`Create A/B test hypotheses...`},
    {id:"mkt04",category:"marketing",title:"Email Subject Line Generator",desc:"High-converting subject lines",model:"GPT-4o / Claude",prompt:`Generate 15 subject lines...`},
    {id:"mkt05",category:"marketing",title:"Landing Page Copy Framework",desc:"Persuasive landing pages",model:"Claude / GPT-4o",prompt:`Write landing page copy (PAS framework)...`},
    {id:"mkt06",category:"marketing",title:"Competitor Ad Analysis",desc:"Analyzes competitor ads",model:"GPT-4o / Claude",prompt:`Analyze this competitor's ad...`},
    
    // EDUCATION (6)
    {id:"edu01",category:"education",title:"Lesson Plan Generator",desc:"Structured lesson plans",model:"Claude / GPT-4o",prompt:`Create a lesson plan...`},
    {id:"edu02",category:"education",title:"Explain Like I'm 5",desc:"Simplifies complex concepts",model:"Claude / GPT-4o",prompt:`Explain at three levels...`},
    {id:"edu03",category:"education",title:"Study Guide Creator",desc:"Comprehensive study guides",model:"Claude / GPT-4o",prompt:`Create a study guide...`},
    {id:"edu04",category:"education",title:"Socratic Tutor",desc:"Teaches through questions",model:"Claude",prompt:`You are a Socratic tutor...`},
    {id:"edu05",category:"education",title:"Flashcard Generator",desc:"Effective flashcards",model:"GPT-4o / Claude",prompt:`Create flashcards...`},
    {id:"edu06",category:"education",title:"Writing Feedback",desc:"Constructive writing feedback",model:"Claude",prompt:`Provide feedback...`},
    
    // REASONING (7)
    {id:"r01",category:"reasoning",title:"Deep Chain-of-Thought",desc:"Extreme step-by-step math",model:"GPT-4o / Claude",prompt:`Use extreme chain-of-thought...`},
    {id:"r02",category:"reasoning",title:"8-Step MCQ Reasoning",desc:"Systematic MCQ reasoning",model:"Claude / Gemini",prompt:`List 8 reasoning steps minimum...`},
    {id:"r03",category:"reasoning",title:"Olympiad Math",desc:"Rigorous proofs with lemmas",model:"o1 / Claude",prompt:`Solve like Terence Tao...`},
    {id:"r04",category:"reasoning",title:"PhD Science MCQ",desc:"Graduate-level science",model:"Claude / GPT-4o",prompt:`Think step-by-step for 4,000 words...`},
    {id:"r05",category:"reasoning",title:"Problem Decomposition",desc:"Breaks complex problems",model:"Claude / GPT-4o",prompt:`Break down this problem...`},
    {id:"r06",category:"reasoning",title:"Argument Builder",desc:"Constructs persuasive arguments",model:"Claude / GPT-4o",prompt:`Build argument for...`},
    {id:"r07",category:"reasoning",title:"Critical Reading",desc:"Analyzes arguments critically",model:"Claude / GPT-4o",prompt:`Analyze this argument...`},
    
    // CODING (13)
    {id:"c01",category:"coding",title:"Competitive Programming",desc:"Grandmaster-level solutions",model:"GPT-4o / Claude",prompt:`You are a 3500-rated grandmaster...`},
    {id:"c02",category:"coding",title:"Bug Root Cause",desc:"Bug analysis + fix",model:"GPT-4o / Claude",prompt:`Explain root cause in detail...`},
    {id:"c03",category:"coding",title:"Production Python",desc:"Google-style typed Python",model:"Claude / GPT-4o",prompt:`Write production-ready, fully typed Python...`},
    {id:"c04",category:"coding",title:"ML Training Loop",desc:"PyTorch + wandb",model:"Claude / GPT-4o",prompt:`Write full PyTorch training loop...`},
    {id:"c05",category:"coding",title:"Security Audit",desc:"Vulnerabilities + patches",model:"Claude / GPT-4o",prompt:`Write mitigations + exploit code...`},
    {id:"c06",category:"coding",title:"DevOps Deploy",desc:"Terraform + K8s",model:"Claude / GPT-4o",prompt:`Write Terraform + Kubernetes...`},
    {id:"c07",category:"coding",title:"API Design",desc:"RESTful API spec",model:"Claude / GPT-4o",prompt:`Design complete RESTful API...`},
    {id:"c08",category:"coding",title:"Agent Task Runner",desc:"Autonomous agent",model:"GPT-4o / Claude",prompt:`Complete task in <50 actions...`},
    {id:"c09",category:"coding",title:"Code Translator",desc:"Convert between languages",model:"Claude / GPT-4o",prompt:`Convert code...`},
    {id:"c10",category:"coding",title:"Regex Explained",desc:"Builds and explains regex",model:"GPT-4o / Claude",prompt:`Help with regex...`},
    {id:"c11",category:"coding",title:"Git Commit Message",desc:"Conventional commits",model:"GPT-4o / Claude",prompt:`Write commit message...`},
    {id:"c12",category:"coding",title:"Error Decoder",desc:"Explains errors plainly",model:"Claude / GPT-4o",prompt:`Explain this error...`},
    {id:"c13",category:"coding",title:"Code Commenter",desc:"Adds useful comments",model:"Claude / GPT-4o",prompt:`Add comments. Explain WHY not WHAT...`},
    
    // SCIENCE (7)
    {id:"s01",category:"science",title:"Medical Diagnosis",desc:"Differential diagnosis",model:"Claude / GPT-4o",prompt:`List differential diagnoses...`},
    {id:"s02",category:"science",title:"Research Proposal",desc:"Full methodology",model:"Claude / GPT-4o",prompt:`Write complete research proposal...`},
    {id:"s03",category:"science",title:"Literature Review",desc:"Systematic review",model:"Claude / GPT-4o",prompt:`Write systematic literature review...`},
    {id:"s04",category:"science",title:"Experiment Design",desc:"Complete methodology",model:"Claude / GPT-4o",prompt:`Design experiment with hypothesis...`},
    {id:"s05",category:"science",title:"Data Analysis Plan",desc:"Statistical methodology",model:"Claude / GPT-4o",prompt:`Create data analysis plan...`},
    {id:"s06",category:"science",title:"Lab Protocol",desc:"Step-by-step procedure",model:"Claude / GPT-4o",prompt:`Write detailed lab protocol...`},
    {id:"s07",category:"science",title:"Scientific Explanation",desc:"Mechanism explanation",model:"Claude / GPT-4o",prompt:`Explain the mechanism...`},
    
    // BUSINESS (13)
    {id:"b01",category:"business",title:"DCF Model",desc:"Quant-grade valuation",model:"o1 / Claude",prompt:`Build full DCF model in Python...`},
    {id:"b02",category:"business",title:"3-Statement Model",desc:"Income, balance, cash flow",model:"Claude / GPT-4o",prompt:`Build complete 3-statement model...`},
    {id:"b03",category:"business",title:"VC Due Diligence",desc:"Investment analysis",model:"Claude / GPT-4o",prompt:`Write complete due diligence report...`},
    {id:"b04",category:"business",title:"Business Plan",desc:"Complete plan + financials",model:"Claude / GPT-4o",prompt:`Write complete business plan...`},
    {id:"b05",category:"business",title:"Product PRD",desc:"Metrics, edge cases, rollout",model:"Claude / GPT-4o",prompt:`Write complete PRD...`},
    {id:"b06",category:"business",title:"OKRs Generator",desc:"Objectives and key results",model:"Claude / GPT-4o",prompt:`Create OKRs for this team...`},
    {id:"b07",category:"business",title:"Competitive Analysis",desc:"Market positioning",model:"Claude / GPT-4o",prompt:`Conduct competitive analysis...`},
    {id:"b08",category:"business",title:"Pricing Strategy",desc:"Complete pricing analysis",model:"Claude / GPT-4o",prompt:`Develop pricing strategy...`},
    {id:"b09",category:"business",title:"RICE Score Calculator",desc:"Feature prioritization",model:"Claude / GPT-4o",prompt:`RICE score this...`},
    {id:"b10",category:"business",title:"Stakeholder Update",desc:"Clear status updates",model:"Claude / GPT-4o",prompt:`Write stakeholder update...`},
    {id:"b11",category:"business",title:"Process Documentation",desc:"SOPs and handbooks",model:"Claude / GPT-4o",prompt:`Document as SOP...`},
    {id:"b12",category:"business",title:"Meeting Agenda",desc:"Effective meetings",model:"Claude / GPT-4o",prompt:`Create meeting agenda...`},
    {id:"b13",category:"business",title:"Job Description",desc:"Compelling job posts",model:"Claude / GPT-4o",prompt:`Write job description...`},
    
    // WRITING (10)
    {id:"w01",category:"writing",title:"Investigative Report",desc:"Full report + sources",model:"Claude / GPT-4o",prompt:`Write investigative report...`},
    {id:"w02",category:"writing",title:"Short Story",desc:"Complete story with twist",model:"Claude / GPT-4o",prompt:`Write complete short story...`},
    {id:"w03",category:"writing",title:"Ad Copy",desc:"Viral ad script",model:"Claude / GPT-4o",prompt:`Write compelling ad copy...`},
    {id:"w04",category:"writing",title:"Technical Documentation",desc:"Clear tech writing",model:"Claude / GPT-4o",prompt:`Create clear, comprehensive documentation...`},
    {id:"w05",category:"writing",title:"Email Sequence",desc:"Multi-email campaigns",model:"Claude / GPT-4o",prompt:`Write 5-email sequence...`},
    {id:"w06",category:"writing",title:"Hook Generator",desc:"Attention-grabbing openers",model:"Claude / GPT-4o",prompt:`Generate 10 hooks for...`},
    {id:"w07",category:"writing",title:"Content Repurposer",desc:"Multiple formats",model:"Claude / GPT-4o",prompt:`Repurpose...`},
    {id:"w08",category:"writing",title:"Tone Adjuster",desc:"Rewrites in different tones",model:"Claude / GPT-4o",prompt:`Rewrite in different tone...`},
    {id:"w09",category:"writing",title:"Headline Analyzer",desc:"Improves headlines",model:"GPT-4o / Claude",prompt:`Analyze headline...`},
    {id:"w10",category:"writing",title:"Story Structure",desc:"Narrative frameworks",model:"Claude / GPT-4o",prompt:`Structure this story...`},
    
    // ANALYSIS (10)
    {id:"a01",category:"analysis",title:"Contract Review",desc:"Risk analysis + clauses",model:"Claude / GPT-4o",prompt:`Review contract for risks...`},
    {id:"a02",category:"analysis",title:"Data Analysis",desc:"Statistical insights",model:"Claude / GPT-4o",prompt:`Analyze data with statistical insights...`},
    {id:"a03",category:"analysis",title:"Market Research",desc:"Industry analysis",model:"Claude / GPT-4o",prompt:`Conduct market research...`},
    {id:"a04",category:"analysis",title:"Risk Assessment",desc:"Risk + mitigation",model:"Claude / GPT-4o",prompt:`Identify risks with likelihood...`},
    {id:"a05",category:"analysis",title:"Root Cause Analysis",desc:"Problem investigation",model:"Claude / GPT-4o",prompt:`Conduct root cause analysis...`},
    {id:"a06",category:"analysis",title:"SWOT Analysis",desc:"Strategic analysis",model:"Claude / GPT-4o",prompt:`SWOT for...`},
    {id:"a07",category:"analysis",title:"Pros and Cons",desc:"Decision analysis",model:"Claude / GPT-4o",prompt:`Pros/cons for...`},
    {id:"a08",category:"analysis",title:"Five Whys",desc:"Root cause method",model:"Claude / GPT-4o",prompt:`Five Whys for...`},
    {id:"a09",category:"analysis",title:"Cost-Benefit Analysis",desc:"Financial evaluation",model:"Claude / GPT-4o",prompt:`Cost-benefit for...`},
    {id:"a10",category:"analysis",title:"Stakeholder Analysis",desc:"Maps interests",model:"Claude / GPT-4o",prompt:`Stakeholder analysis for...`},
    
    // CREATIVE (10)
    {id:"cr01",category:"creative",title:"Brand Voice Guide",desc:"Communication standards",model:"Claude / GPT-4o",prompt:`Create brand voice guide...`},
    {id:"cr02",category:"creative",title:"Social Media Strategy",desc:"Platform content",model:"Claude / GPT-4o",prompt:`Create social strategy...`},
    {id:"cr03",category:"creative",title:"Video Script",desc:"Engaging video content",model:"Claude / GPT-4o",prompt:`Write video script...`},
    {id:"cr04",category:"creative",title:"Podcast Outline",desc:"Episode structure",model:"Claude / GPT-4o",prompt:`Create episode outline...`},
    {id:"cr05",category:"creative",title:"Presentation Design",desc:"Slide structure",model:"Claude / GPT-4o",prompt:`Create presentation structure...`},
    {id:"cr06",category:"creative",title:"Product Description",desc:"Compelling product copy",model:"Claude / GPT-4o",prompt:`Write product description...`},
    {id:"cr07",category:"creative",title:"Bio Writer",desc:"Professional bios",model:"Claude / GPT-4o",prompt:`Write a bio...`},
    {id:"cr08",category:"creative",title:"Analogy Generator",desc:"Explains with analogies",model:"Claude / GPT-4o",prompt:`Create analogies for...`},
    {id:"cr09",category:"creative",title:"Metaphor Enhancer",desc:"Adds vivid imagery",model:"Claude",prompt:`Enhance with metaphors...`},
    {id:"cr10",category:"creative",title:"CTA Writer",desc:"Compelling calls to action",model:"Claude / GPT-4o",prompt:`Write CTAs...`},
    
    // PROFESSIONAL (12)
    {id:"pr01",category:"professional",title:"Performance Review",desc:"Employee evaluations",model:"Claude / GPT-4o",prompt:`Write balanced, constructive performance review...`},
    {id:"pr02",category:"professional",title:"Interview Questions",desc:"Role-specific questions",model:"Claude / GPT-4o",prompt:`Create interview questions...`},
    {id:"pr03",category:"professional",title:"Project Charter",desc:"Project documentation",model:"Claude / GPT-4o",prompt:`Create project charter...`},
    {id:"pr04",category:"professional",title:"Change Management",desc:"Change implementation",model:"Claude / GPT-4o",prompt:`Create change management plan...`},
    {id:"pr05",category:"professional",title:"Negotiation Prep",desc:"Negotiation strategy",model:"Claude / GPT-4o",prompt:`Prepare negotiation strategy...`},
    {id:"pr06",category:"professional",title:"Presentation Coach",desc:"Presentation improvement",model:"Claude / GPT-4o",prompt:`Review presentation...`},
    {id:"pr07",category:"professional",title:"Feedback Framework",desc:"Delivering feedback",model:"Claude / GPT-4o",prompt:`Structure feedback using SBI...`},
    {id:"pr08",category:"professional",title:"Career Development",desc:"Growth planning",model:"Claude / GPT-4o",prompt:`Create career development plan...`},
    {id:"pr09",category:"professional",title:"Email Templates",desc:"Professional responses",model:"Claude / GPT-4o",prompt:`Create email templates...`},
    {id:"pr10",category:"professional",title:"Delegation Brief",desc:"Effective delegation",model:"Claude / GPT-4o",prompt:`Create delegation brief...`},
    {id:"pr11",category:"professional",title:"Decision Document",desc:"Documents decisions",model:"Claude / GPT-4o",prompt:`Document this decision...`},
    {id:"pr12",category:"professional",title:"Quarterly Goals",desc:"OKR planning",model:"Claude / GPT-4o",prompt:`Create quarterly goals...`},
  ]
};

function getCategoryIcon(catId: string) {
  const c = PROMPTS_DATA.categories.find(x => x.id === catId);
  return c ? c.icon : '📝';
}

function getCategoryName(catId: string) {
  const c = PROMPTS_DATA.categories.find(x => x.id === catId);
  return c ? c.name : catId;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentSort, setCurrentSort] = useState("default");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    let list = [...PROMPTS_DATA.prompts];
    
    // Filter by category
    if (currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }
    
    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q)
      );
    }
    
    // Sort
    if (currentSort === "name") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return list;
  }, [currentCategory, searchQuery, currentSort]);

  const copyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">⚡ {PROMPTS_DATA.prompts.length} Production-Ready Systems</div>
        <h1>AI Systems That <span>Actually Work</span></h1>
        <p>Stop wasting hours on prompt engineering. Copy battle-tested AI systems used by top teams.</p>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat-value">{PROMPTS_DATA.prompts.length}</div>
          <div className="stat-label">Free Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value">100+</div>
          <div className="stat-label">Pro Systems</div>
        </div>
        <div className="stat">
          <div className="stat-value">{PROMPTS_DATA.categories.length}</div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat">
          <div className="stat-value">Weekly</div>
          <div className="stat-label">Updates</div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="filter-section">
        <div className="filter-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search systems..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort:</span>
            <button 
              className={`sort-btn ${currentSort === "default" ? "active" : ""}`}
              onClick={() => setCurrentSort("default")}
            >Default</button>
            <button 
              className={`sort-btn ${currentSort === "name" ? "active" : ""}`}
              onClick={() => setCurrentSort("name")}
            >A-Z</button>
          </div>
        </div>
        <div className="filter-container">
          <button 
            className={`filter-btn ${currentCategory === "all" ? "active" : ""}`}
            onClick={() => setCurrentCategory("all")}
          >
            All ({PROMPTS_DATA.prompts.length})
          </button>
          {PROMPTS_DATA.categories.map(cat => {
            const count = PROMPTS_DATA.prompts.filter(p => p.category === cat.id).length;
            return (
              <button 
                key={cat.id}
                className={`filter-btn ${currentCategory === cat.id ? "active" : ""}`}
                onClick={() => setCurrentCategory(cat.id)}
              >
                {cat.icon} {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Systems Table */}
      <div className="prompt-table-section">
        <p className="results-info">Showing {filteredPrompts.length} of {PROMPTS_DATA.prompts.length} systems</p>
        <div className="table-wrapper">
          <table className="prompt-table">
            <thead>
              <tr>
                <th style={{width: '140px'}}>Category</th>
                <th>System</th>
                <th style={{width: '120px'}}>Model</th>
                <th style={{width: '100px', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrompts.map(p => (
                <tr key={p.id}>
                  <td><span className="cat-badge">{getCategoryIcon(p.category)} {getCategoryName(p.category)}</span></td>
                  <td>
                    <div className="p-title">{p.title}</div>
                    <div className="p-desc">{p.desc}</div>
                  </td>
                  <td className="td-model">{p.model}</td>
                  <td className="td-actions">
                    <button 
                      className={`btn-copy ${copiedId === p.id ? "copied" : ""}`}
                      onClick={() => copyPrompt(p.id, p.prompt)}
                    >
                      {copiedId === p.id ? "✓ Copied" : "📋 Copy"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-header">
          <h2>Want More? Unlock Pro Systems</h2>
          <p>Get 100+ advanced systems with video guides and automation files</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-name">Starter Pack</div>
            <div className="pricing-desc">Perfect for trying Prax</div>
            <div className="pricing-price">$29</div>
            <div className="pricing-term">one-time</div>
            <ul className="pricing-features">
              <li>20 curated Pro systems</li>
              <li>All 11 categories sampled</li>
              <li>Prompt + Guide included</li>
            </ul>
            <a href="https://praxai.lemonsqueezy.com/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec" className="pricing-btn pricing-btn-secondary">Get Starter</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-name">Team Playbooks</div>
            <div className="pricing-desc">Best for teams</div>
            <div className="pricing-price">$299</div>
            <div className="pricing-term">lifetime</div>
            <ul className="pricing-features">
              <li>100+ systems + updates</li>
              <li>Prompt + Guide + Automation</li>
              <li>Team license (5 seats)</li>
            </ul>
            <a href="https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157" className="pricing-btn pricing-btn-primary">Get Team Access</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-name">Monthly Pro</div>
            <div className="pricing-desc">Always up-to-date</div>
            <div className="pricing-price">$49<span>/mo</span></div>
            <div className="pricing-term">cancel anytime</div>
            <ul className="pricing-features">
              <li>100+ systems + updates</li>
              <li>Prompt + Guide + Automation</li>
              <li>New systems weekly</li>
            </ul>
            <a href="https://praxai.lemonsqueezy.com/buy/557bd908-945f-4dd3-bbc0-e701df7303b9" className="pricing-btn pricing-btn-secondary">Start Monthly</a>
          </div>
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
