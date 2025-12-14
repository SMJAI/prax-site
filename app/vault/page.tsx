"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// Pro Prompts Data with Video Tutorials
const PRO_PROMPTS = {
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
    // AI & AGENTS - PRO
    {id:"pro-ai01",category:"ai-agents",title:"🔥 Custom GPT Builder",desc:"Design a specialized GPT with complete instructions",model:"GPT-4o",video:"https://youtu.be/pUx_wlTjC2U",prompt:`You are an expert at designing Custom GPTs. Help me create one.

I need a Custom GPT for: [PURPOSE]

Provide:
1. **Name**: Catchy, descriptive name
2. **Description**: 2-3 sentences for the GPT store
3. **Instructions**: Complete system prompt (500+ words) including role, tone, behaviors, do's/don'ts
4. **Conversation Starters**: 4 example prompts
5. **Knowledge Files**: What documents to upload
6. **Capabilities**: Which features to enable`},
    {id:"pro-ai02",category:"ai-agents",title:"Enterprise AI Assistant Builder",desc:"Build complete AI assistants with memory, tools, and guardrails",model:"Claude / GPT-4o",prompt:`You are an expert AI systems architect. Help me design an enterprise-grade AI assistant.

**Assistant Purpose**: [DESCRIBE THE ASSISTANT'S MAIN FUNCTION]
**Target Users**: [WHO WILL USE THIS]
**Integration Requirements**: [WHAT SYSTEMS IT NEEDS TO CONNECT TO]

Create a comprehensive AI assistant specification including:

## 1. Core Identity
- Name and persona
- Primary role and responsibilities
- Tone and communication style
- Key personality traits

## 2. Capabilities Matrix
- What it CAN do (be specific)
- What it CANNOT do (limitations)
- Escalation triggers (when to hand off to humans)

## 3. Knowledge Architecture
- Required knowledge bases
- Data sources to integrate
- Update frequency requirements

## 4. Guardrails & Safety
- Content restrictions
- Privacy protections
- Compliance requirements
- Error handling protocols

## 5. Memory System
- What to remember between sessions
- What to forget
- User preference tracking

## 6. Tool Integration
- APIs to connect
- Actions it can perform
- Authentication requirements

## 7. Success Metrics
- How to measure effectiveness
- KPIs to track
- Feedback loops

## 8. Sample Interactions
- 5 example conversations showing ideal behavior
- 3 edge cases and how to handle them`},
    {id:"pro-ai03",category:"ai-agents",title:"Multi-Agent Workflow Designer",desc:"Design complex multi-agent systems with handoffs",model:"Claude / GPT-4o",prompt:`You are an expert in multi-agent AI systems. Help me design a workflow with multiple specialized agents.

**Overall Goal**: [WHAT THE SYSTEM SHOULD ACCOMPLISH]
**Complexity Level**: [SIMPLE/MEDIUM/COMPLEX]

Design a multi-agent system with:

## Agent Roster
For each agent, define:
- Name and role
- Specialized capabilities
- Input requirements
- Output format
- Handoff triggers

## Workflow Architecture
- Sequence diagram of agent interactions
- Decision points and routing logic
- Parallel vs sequential processing
- Error recovery procedures

## Communication Protocol
- How agents share information
- Message format standards
- State management approach

## Orchestration Layer
- How to coordinate agents
- Priority handling
- Resource allocation
- Timeout management

## Implementation Guide
- Recommended tech stack
- Code structure
- Testing approach`},

    // MARKETING - PRO
    {id:"pro-mkt01",category:"marketing",title:"🔥 Landing Page Copy Framework",desc:"Write high-converting landing page copy using PAS formula",model:"Claude / GPT-4o",video:"https://youtu.be/mI_3cSEAMOY",prompt:`Write landing page copy (PAS framework).

**Product**: [WHAT YOU'RE SELLING]
**Audience**: [WHO YOU'RE SELLING TO]
**CTA**: [DESIRED ACTION]

## Above the Fold
Headline, Subheadline, CTA Button, Social Proof

## Problem Section
## Agitation Section
## Solution Section (Features → Benefits)
## Social Proof
## FAQ (5)
## Final CTA with urgency`},
    {id:"pro-mkt02",category:"marketing",title:"Full-Funnel Content System",desc:"Create TOFU, MOFU, BOFU content that converts",model:"GPT-4o",prompt:`Create a full-funnel content strategy.

**Product/Service**: [WHAT YOU SELL]
**Target Audience**: [WHO BUYS]
**Sales Cycle Length**: [SHORT/MEDIUM/LONG]

Generate content for each funnel stage:

## TOFU (Top of Funnel) - Awareness
- 5 blog post topics that attract cold traffic
- 3 social media content themes
- 2 lead magnet ideas
- SEO keywords to target

## MOFU (Middle of Funnel) - Consideration
- 3 comparison/evaluation content pieces
- 2 case study outlines
- Email nurture sequence (5 emails)
- Webinar/demo topics

## BOFU (Bottom of Funnel) - Decision
- Sales page outline
- Objection-handling content
- Testimonial request template
- Urgency/scarcity tactics

## Content Calendar
- 30-day publishing schedule
- Content repurposing plan
- Distribution channels for each piece`},
    {id:"pro-mkt03",category:"marketing",title:"Viral Hook Generator",desc:"Create scroll-stopping hooks for any platform",model:"GPT-4o",prompt:`Generate viral hooks for my content.

**Topic**: [WHAT THE CONTENT IS ABOUT]
**Platform**: [TIKTOK/YOUTUBE/LINKEDIN/TWITTER/INSTAGRAM]
**Tone**: [PROFESSIONAL/CASUAL/PROVOCATIVE/EDUCATIONAL]

Create 20 hooks in these categories:

## Pattern Interrupt (5)
Unexpected openings that stop the scroll

## Curiosity Gap (5)
Create information gaps that demand resolution

## Controversy/Hot Take (3)
Bold statements that spark engagement

## Story Opening (3)
Narrative hooks that pull people in

## Direct Challenge (2)
Call out the viewer directly

## Data/Proof (2)
Lead with surprising statistics

For each hook:
- The hook text (under 10 words)
- Why it works psychologically
- Best follow-up approach`},

    // CODING - PRO
    {id:"pro-c01",category:"coding",title:"Full-Stack Feature Generator",desc:"Generate complete features with frontend, backend, and tests",model:"Claude",prompt:`Generate a complete full-stack feature.

**Feature**: [DESCRIBE THE FEATURE]
**Tech Stack**: [FRONTEND/BACKEND/DATABASE]
**Auth Required**: [YES/NO]

Provide complete, production-ready code for:

## 1. Database Schema
- Tables/collections needed
- Relationships
- Indexes for performance
- Migration file

## 2. Backend API
- RESTful endpoints
- Request/response types
- Validation logic
- Error handling
- Authentication middleware (if needed)

## 3. Frontend Components
- React/Vue components
- State management
- API integration
- Loading/error states
- Form handling

## 4. Tests
- Unit tests for business logic
- Integration tests for API
- Component tests for frontend
- E2E test scenarios

## 5. Documentation
- API documentation
- Component props documentation
- Setup instructions`},
    {id:"pro-c02",category:"coding",title:"Code Review Assistant",desc:"Get senior-engineer level code review feedback",model:"Claude",prompt:`Review this code like a senior engineer at a top tech company.

**Code**:
\`\`\`
[PASTE YOUR CODE HERE]
\`\`\`

**Context**: [WHAT THIS CODE DOES]
**Concerns**: [SPECIFIC AREAS YOU WANT REVIEWED]

Provide review covering:

## Security Issues
- Vulnerabilities identified
- Risk level (Critical/High/Medium/Low)
- Remediation steps

## Performance
- Time complexity analysis
- Memory usage concerns
- Optimization opportunities

## Code Quality
- SOLID principles violations
- Code smells
- Naming improvements
- Structure suggestions

## Error Handling
- Missing error cases
- Edge cases not covered
- Recovery improvements

## Testing Gaps
- What tests are needed
- Test cases to add

## Refactored Version
Provide the improved code with comments explaining changes.`},

    // BUSINESS - PRO
    {id:"pro-b01",category:"business",title:"Investor Pitch Deck Builder",desc:"Create a compelling pitch deck structure",model:"Claude / GPT-4o",prompt:`Create a pitch deck for investors.

**Company**: [NAME]
**Industry**: [SECTOR]
**Stage**: [PRE-SEED/SEED/SERIES A]
**Raising**: [AMOUNT]

Generate a 12-slide pitch deck:

## Slide 1: Title
- Company name, tagline, your name

## Slide 2: Problem
- Pain point with data
- Who experiences this

## Slide 3: Solution
- Your product/service
- Key differentiator

## Slide 4: Market Size
- TAM, SAM, SOM with sources

## Slide 5: Product
- How it works
- Key features
- Screenshots/demo description

## Slide 6: Business Model
- Revenue streams
- Pricing
- Unit economics

## Slide 7: Traction
- Key metrics
- Growth rate
- Notable customers

## Slide 8: Competition
- Competitive landscape
- Your positioning

## Slide 9: Go-to-Market
- Acquisition strategy
- Sales process

## Slide 10: Team
- Founders and key hires
- Relevant experience

## Slide 11: Financials
- Projections (3 years)
- Key assumptions

## Slide 12: The Ask
- Amount raising
- Use of funds
- Milestones to hit`},
    {id:"pro-b02",category:"business",title:"Strategic Planning Framework",desc:"Create a comprehensive strategic plan",model:"Claude / GPT-4o",prompt:`Create a strategic plan for my business.

**Company**: [NAME AND DESCRIPTION]
**Current Revenue**: [AMOUNT]
**Goal**: [WHERE YOU WANT TO BE]
**Timeframe**: [1 YEAR / 3 YEARS / 5 YEARS]

Generate a complete strategic plan:

## Executive Summary
- Vision statement
- Mission statement
- Core values
- Strategic priorities (top 3-5)

## Situation Analysis
- SWOT analysis
- PESTLE analysis
- Competitive positioning

## Strategic Objectives
For each objective:
- Specific goal
- Key results (measurable)
- Owner
- Timeline
- Resources needed

## Growth Strategy
- Market expansion opportunities
- Product development roadmap
- Partnership strategy
- M&A considerations

## Operational Plan
- Key initiatives by quarter
- Resource allocation
- Budget requirements
- Risk mitigation

## KPIs & Metrics
- Dashboard metrics
- Review cadence
- Success criteria

## Implementation Roadmap
- 90-day quick wins
- Year 1 milestones
- Long-term vision`},

    // WRITING - PRO
    {id:"pro-w01",category:"writing",title:"Sales Email Sequence",desc:"High-converting cold outreach sequence",model:"GPT-4o",prompt:`Write a cold email sequence that converts.

**Product/Service**: [WHAT YOU'RE SELLING]
**Target**: [JOB TITLE AND COMPANY TYPE]
**Price Point**: [RANGE]
**Main Value Prop**: [KEY BENEFIT]

Create a 5-email sequence:

## Email 1: Pattern Interrupt
- Unexpected subject line
- Personalized opening
- One clear pain point
- Soft CTA (reply, not meeting)

## Email 2: Value Add (Day 3)
- Share useful insight/resource
- No hard sell
- Build credibility

## Email 3: Social Proof (Day 6)
- Case study or result
- Specific numbers
- Similar company to theirs

## Email 4: Direct Ask (Day 10)
- Clear meeting request
- Specific time options
- What they'll get from the call

## Email 5: Breakup (Day 14)
- Final attempt
- Door open for future
- Remove from sequence notice

For each email provide:
- Subject line (under 40 chars)
- Body (under 100 words)
- CTA
- Psychological principle used`},
    {id:"pro-w02",category:"writing",title:"Thought Leadership Article",desc:"Write authoritative long-form content",model:"Claude",prompt:`Write a thought leadership article.

**Topic**: [SUBJECT]
**Author's Expertise**: [BACKGROUND]
**Target Publication**: [WHERE THIS WILL BE PUBLISHED]
**Audience**: [WHO READS THIS]
**Word Count**: [TARGET LENGTH]

Create an article with:

## Headline Options (5)
- Curiosity-driven
- Benefit-driven
- Contrarian
- Question-based
- Number-based

## Opening Hook
- Start with story, stat, or bold claim
- First 2 sentences that demand reading

## Key Arguments (3-5)
For each:
- Main point
- Supporting evidence
- Real example
- Counter-argument addressed

## Expert Insights
- Original frameworks
- Unique perspectives
- Quotable moments

## Actionable Takeaways
- What readers should do differently
- Implementation steps

## Strong Conclusion
- Memorable final thought
- Call to action

## Meta Information
- SEO title
- Meta description
- Social media snippets`},

    // ANALYSIS - PRO
    {id:"pro-a01",category:"analysis",title:"Due Diligence Report",desc:"Comprehensive business analysis",model:"Claude / GPT-4o",prompt:`Conduct due diligence on this company/opportunity.

**Subject**: [COMPANY OR OPPORTUNITY NAME]
**Context**: [INVESTMENT/ACQUISITION/PARTNERSHIP]
**Information Available**: [PASTE ANY DATA YOU HAVE]

Generate a due diligence report:

## Executive Summary
- Recommendation (Proceed/Caution/Pass)
- Key findings summary
- Critical risks identified

## Business Analysis
- Business model assessment
- Revenue quality
- Customer concentration
- Competitive moat

## Financial Analysis
- Revenue trends
- Profitability metrics
- Cash flow health
- Working capital needs

## Market Analysis
- Market size and growth
- Competitive landscape
- Market position

## Operational Review
- Team assessment
- Technology stack
- Scalability
- Key dependencies

## Legal & Compliance
- Corporate structure
- IP ownership
- Regulatory risks
- Litigation history

## Risk Assessment
- Red flags identified
- Risk mitigation options
- Deal breakers

## Valuation Considerations
- Comparable analysis
- Key value drivers
- Recommended terms

## Next Steps
- Additional diligence needed
- Key questions for management
- Timeline recommendation`},

    // PROFESSIONAL - PRO  
    {id:"pro-pr01",category:"professional",title:"Executive Communication Pack",desc:"High-stakes emails, memos, and announcements",model:"Claude / GPT-4o",prompt:`Write executive-level communications.

**Situation**: [DESCRIBE THE SITUATION]
**Audience**: [WHO RECEIVES THIS]
**Tone Required**: [FORMAL/DIPLOMATIC/URGENT/INSPIRING]
**Sensitivity Level**: [LOW/MEDIUM/HIGH]

Generate communications for:

## Internal Memo
- Clear subject line
- Context and background
- Key message
- Action items
- Timeline

## All-Hands Talking Points
- Opening hook
- 3 key messages
- Anticipated questions and answers
- Closing statement

## Board Update
- Executive summary
- Key metrics
- Challenges and mitigation
- Asks/decisions needed

## Press Statement (if applicable)
- Official statement
- Q&A preparation
- Spokesperson notes

## Email to Key Stakeholders
- Personalized approach
- Key concerns addressed
- Next steps

For each piece:
- What to emphasize
- What to avoid
- Tone guidance
- Follow-up recommendations`},

    // CREATIVE - PRO
    {id:"pro-cr01",category:"creative",title:"Brand Story Framework",desc:"Create a compelling brand narrative",model:"Claude / GPT-4o",prompt:`Create a brand story for my company.

**Company**: [NAME]
**Industry**: [SECTOR]
**Founder Background**: [BRIEF BIO]
**Mission**: [WHAT YOU'RE TRYING TO ACHIEVE]

Generate a complete brand story:

## Origin Story
- The "aha moment"
- Founder's journey
- Early struggles
- First breakthrough

## Brand Narrative Framework
- The Hero (your customer)
- The Problem (what they face)
- The Guide (your brand)
- The Plan (your solution)
- The Transformation (results)

## Brand Voice Guidelines
- Personality traits (3-5)
- Tone spectrum
- Words we use
- Words we avoid
- Example sentences

## Key Messages
- Elevator pitch (10 seconds)
- Short description (30 seconds)
- Full story (2 minutes)

## Story Assets
- About page copy
- Founder bio
- Company timeline
- Mission statement
- Vision statement

## Storytelling Templates
- Customer success story format
- Product launch narrative
- Company milestone announcement`},
  ]
};

function getCategoryIcon(catId: string) {
  const c = PRO_PROMPTS.categories.find(x => x.id === catId);
  return c ? c.icon : '📝';
}

function getCategoryName(catId: string) {
  const c = PRO_PROMPTS.categories.find(x => x.id === catId);
  return c ? c.name : catId;
}

export default function VaultPage() {
  const { user, isLoaded } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Check auth and pro status
  useEffect(() => {
    if (isLoaded && !user) {
      window.location.href = '/sign-in';
    }
    if (isLoaded && user && user.publicMetadata?.isPro !== true) {
      window.location.href = '/upgrade';
    }
  }, [isLoaded, user]);

  const filteredPrompts = useMemo(() => {
    let list = [...PRO_PROMPTS.prompts];
    
    if (currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q)
      );
    }
    
    return list;
  }, [currentCategory, searchQuery]);

  const copyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  if (!isLoaded) {
    return <div style={{textAlign: 'center', padding: '100px'}}>Loading...</div>;
  }

  return (
    <>
      <section className="vault-hero">
        <h1>🔐 Pro Playbooks</h1>
        <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
          Welcome back, <strong>{user?.firstName || user?.emailAddresses?.[0]?.emailAddress || 'Pro Member'}</strong>! 
          Access your complete library of production-ready AI systems.
        </p>
      </section>

      <div className="vault-stats">
        <div className="vault-stat">
          <div className="vault-stat-value">{PRO_PROMPTS.prompts.length}+</div>
          <div className="vault-stat-label">Pro Systems</div>
        </div>
        <div className="vault-stat">
          <div className="vault-stat-value">{PRO_PROMPTS.categories.length}</div>
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

      <div className="filter-section">
        <div className="filter-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search pro systems..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="filter-container">
          <button 
            className={`filter-btn ${currentCategory === "all" ? "active" : ""}`}
            onClick={() => setCurrentCategory("all")}
          >
            All ({PRO_PROMPTS.prompts.length})
          </button>
          {PRO_PROMPTS.categories.map(cat => {
            const count = PRO_PROMPTS.prompts.filter(p => p.category === cat.id).length;
            if (count === 0) return null;
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

      <div className="prompt-table-section">
        <p className="results-info">Showing {filteredPrompts.length} of {PRO_PROMPTS.prompts.length} Pro Systems</p>
        <div className="table-wrapper">
          <table className="prompt-table">
            <thead>
              <tr>
                <th style={{width: '140px'}}>Category</th>
                <th>System</th>
                <th style={{width: '120px'}}>Model</th>
                <th style={{width: '180px', textAlign: 'right'}}>Actions</th>
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
                    <div style={{display: 'flex', gap: '8px', justifyContent: 'flex-end'}}>
                      {p.video && (
                        <a 
                          href={p.video} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-video"
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(239, 68, 68, 0.2)',
                            color: '#ef4444',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          🎥 Watch
                        </a>
                      )}
                      <button 
                        className={`btn-copy ${copiedId === p.id ? "copied" : ""}`}
                        onClick={() => copyPrompt(p.id, p.prompt)}
                      >
                        {copiedId === p.id ? "✓ Copied" : "📋 Copy"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
