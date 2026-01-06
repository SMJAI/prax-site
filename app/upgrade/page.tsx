"use client";

import { useState, useMemo, useEffect } from "react";
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
    {id:"ai01",category:"ai-agents",title:"Custom GPT Builder",desc:"Design a specialized GPT with complete instructions",model:"GPT-4o",prompt:`You are an expert at designing Custom GPTs. Help me create one.\n\nI need a Custom GPT for: [PURPOSE]\n\nProvide:\n1. **Name**: Catchy, descriptive name\n2. **Description**: 2-3 sentences for the GPT store\n3. **Instructions**: Complete system prompt (500+ words) including role, tone, behaviors, do's/don'ts\n4. **Conversation Starters**: 4 example prompts\n5. **Knowledge Files**: What documents to upload\n6. **Capabilities**: Which features to enable`},
    {id:"ai02",category:"ai-agents",title:"Prompt Improver",desc:"Transforms basic prompts into effective ones",model:"Claude / GPT-4o",prompt:`You are a prompt engineering expert. Transform my basic prompt into a highly effective one.\n\nMy prompt: [PASTE HERE]\n\nImprove by:\n1. Adding a clear role/persona\n2. Specifying exact output format\n3. Including relevant context\n4. Adding examples if helpful\n5. Breaking complex tasks into steps\n\nProvide:\n- **Improved Prompt**\n- **Why It's Better**: 3 key improvements\n- **Variations**: 2 alternatives`},
    {id:"ai03",category:"ai-agents",title:"AI Workflow Designer",desc:"Creates multi-step AI automation workflows",model:"Claude / GPT-4o",prompt:`Design an AI automation workflow.\n\nTask: [DESCRIBE TASK]\n\n## Workflow\n**Trigger**: What initiates this?\n**Steps**: For each - Action, AI Prompt, Input, Output, Tool\n**Error Handling**: What if a step fails?\n**Time Saved**: Hours per week\n**Tools Needed**: List required`},
    {id:"ai04",category:"ai-agents",title:"Chain of Thought Prompt",desc:"Forces step-by-step reasoning",model:"o1 / Claude",prompt:`Solve using explicit chain-of-thought reasoning.\n\nProblem: [YOUR PROBLEM]\n\nYou MUST:\n1. **Understand**: Restate the problem\n2. **Identify**: What info do we have/need?\n3. **Plan**: What approach? Why?\n4. **Execute**: Show ALL work, numbered steps\n5. **Verify**: Check your answer\n6. **Conclude**: State final answer clearly`},
    {id:"ai05",category:"ai-agents",title:"Few-Shot Example Builder",desc:"Creates examples that teach AI your style",model:"Claude / GPT-4o",prompt:`Create few-shot examples for: [TASK TYPE]\nDesired style: [DESCRIBE]\n\nCreate 3 input/output examples demonstrating:\n- Exact format wanted\n- Tone and style\n- Edge cases handled\n\n## Example 1\n**Input**: [realistic]\n**Output**: [ideal]\n\n[Continue x3]\n\n## Usage Instructions`},
    {id:"ai06",category:"ai-agents",title:"AI Output Evaluator",desc:"Scores and critiques AI content",model:"Claude / GPT-4o",prompt:`Evaluate this AI output.\n\n**Request**: [WHAT WAS ASKED]\n**Output**: [PASTE]\n\nScore 1-10: Accuracy, Completeness, Clarity, Usefulness, Format\n**Overall**: X/50\n**Strengths**:\n**Weaknesses**:\n**Revised Version**:`},
    
    // MARKETING (6)
    {id:"mkt01",category:"marketing",title:"Value Proposition Canvas",desc:"Creates compelling value propositions",model:"Claude / GPT-4o",prompt:`Create a value proposition.\n\nProduct: [DESCRIBE]\nTarget: [WHO]\n\n## Customer Profile\n**Jobs**: Functional, social, emotional\n**Pains**: Frustrations, risks, obstacles\n**Gains**: Desired outcomes\n\n## Value Map\n**Pain Relievers**: How you address pains\n**Gain Creators**: How you create gains\n\n## Statement\nFor [target] who [need], [product] is a [category] that [benefit]. Unlike [competitors], we [differentiator].`},
    {id:"mkt02",category:"marketing",title:"Customer Persona Builder",desc:"Creates detailed buyer personas",model:"Claude / GPT-4o",prompt:`Create a buyer persona.\n\nProduct: [DESCRIBE]\n\n## Persona: [Name]\n**Demographics**: Age, job, income, location\n**Psychographics**: Values, interests, personality\n**Goals**: Primary, secondary, success metrics\n**Challenges**: Pain points, frustrations, fears\n**Buying Behavior**: Research, influences, objections\n**Messaging**: Key messages, words to use/avoid\n**Where to Reach**: Platforms, communities`},
    {id:"mkt03",category:"marketing",title:"A/B Test Hypothesis Generator",desc:"Creates experiment hypotheses",model:"Claude / GPT-4o",prompt:`Create A/B test hypotheses.\n\nPage: [WHAT YOU'RE TESTING]\nGoal: [IMPROVE WHAT]\n\nGenerate 5 hypotheses:\n\n## Hypothesis 1: [Name]\n**Observation**: What we noticed\n**Change**: Control vs Variant\n**Rationale**: Why this will work\n**Expected Impact**: Lift %\n**Priority**: (Impact × Confidence × Ease) = X/30\n\nRank all 5, recommend first test.`},
    {id:"mkt04",category:"marketing",title:"Email Subject Line Generator",desc:"High-converting subject lines",model:"GPT-4o / Claude",prompt:`Generate 15 subject lines.\n\n**Purpose**: [EMAIL TOPIC]\n**Audience**: [WHO]\n**Offer**: [VALUE PROP]\n\n**Curiosity (3)**:\n**Benefit-Focused (3)**:\n**Urgency (3)**:\n**Personalization (3)**:\n**Question (3)**:\n\nFor each: char count, predicted open rate\n**Top 3** with A/B test plan.`},
    {id:"mkt05",category:"marketing",title:"Landing Page Copy Framework",desc:"Persuasive landing pages",model:"Claude / GPT-4o",prompt:`Write landing page copy (PAS framework).\n\n**Product**: [WHAT]\n**Audience**: [WHO]\n**CTA**: [ACTION]\n\n## Above the Fold\nHeadline, Subheadline, CTA Button, Social Proof\n\n## Problem Section\n## Agitation Section\n## Solution Section (Features → Benefits)\n## Social Proof\n## FAQ (5)\n## Final CTA with urgency`},
    {id:"mkt06",category:"marketing",title:"Competitor Ad Analysis",desc:"Analyzes competitor ads",model:"GPT-4o / Claude",prompt:`Analyze this competitor's ad.\n\n**Competitor**: [NAME]\n**Ad**: [DESCRIBE]\n\n## Message Analysis\nClaim, Value prop, Target, Emotional appeal\n\n## Creative Analysis\nHook, Format, CTA\n\n## Strategic Insights\nStrengths, Weaknesses, How to differentiate\n\n## Counter-Ad Concept`},
    
    // EDUCATION (6)
    {id:"edu01",category:"education",title:"Lesson Plan Generator",desc:"Structured lesson plans",model:"Claude / GPT-4o",prompt:`Create a lesson plan.\n\n**Topic**: [WHAT]\n**Audience**: [LEVEL]\n**Duration**: [LENGTH]\n\n## Learning Objectives (3 measurable)\n## Materials Needed\n## Lesson Structure\n- Opening (10%): Hook\n- Introduction (15%): Core concepts\n- Guided Practice (25%)\n- Independent Practice (25%)\n- Assessment (15%)\n- Closing (10%)\n\n## Differentiation\nFor struggling/advanced learners`},
    {id:"edu02",category:"education",title:"Explain Like I'm 5",desc:"Simplifies complex concepts",model:"Claude / GPT-4o",prompt:`Explain at three levels.\n\nTopic: [CONCEPT]\n\n## Level 1: Like I'm 5\nSimple words, analogies (100 words)\n\n## Level 2: Like I'm a High Schooler\nMore detail, terminology (200 words)\n\n## Level 3: Like I'm a Professional\nTechnical accuracy (300 words)\n\n## Best Analogy\n## Common Misconceptions`},
    {id:"edu03",category:"education",title:"Study Guide Creator",desc:"Comprehensive study guides",model:"Claude / GPT-4o",prompt:`Create a study guide.\n\n**Subject**: [SUBJECT]\n**Material**: [TOPICS]\n**Exam Format**: [TYPE]\n\n## Key Concepts\n## Must-Know Definitions\n## Important Formulas\n## Topic Summaries\n## Common Exam Questions\n## Memory Tricks\n## Practice Problems\n## Priority Focus Areas`},
    {id:"edu04",category:"education",title:"Socratic Tutor",desc:"Teaches through questions",model:"Claude",prompt:`You are a Socratic tutor.\n\nTopic: [TOPIC]\nMy understanding: [WHAT I KNOW]\n\nYour approach:\n1. Start with what I know\n2. Ask probing questions\n3. Go deeper with follow-ups\n4. Give hints as questions if stuck\n5. Help me discover answers\n\nDo NOT give answers directly.\n\nStart by asking what I already know.`},
    {id:"edu05",category:"education",title:"Flashcard Generator",desc:"Effective flashcards",model:"GPT-4o / Claude",prompt:`Create flashcards.\n\n**Topic**: [WHAT]\n**Material**: [CONTENT]\n**Count**: [NUMBER]\n\nPrinciples: One concept per card, clear single answer, active recall\n\n## Card 1\n**Front**: [Question]\n**Back**: [Answer]\n**Mnemonic**:\n\n[Continue...]\n\n## Study Tips`},
    {id:"edu06",category:"education",title:"Writing Feedback",desc:"Constructive writing feedback",model:"Claude",prompt:`Provide feedback.\n\n**Level**: [GRADE]\n**Assignment**: [TYPE]\n**Prompt**: [WHAT THEY WROTE]\n\n**Writing**: [PASTE]\n\n## Feedback\n**Strengths**: Specific, with quotes\n**Areas for Improvement**: 2-3 with examples\n**Grammar**: Significant errors only\n**Assessment**: Needs work / Meets / Exceeds\n**Next Steps**: ONE focus area\n**Encouragement**:`},
    
    // REASONING (7)
    {id:"r01",category:"reasoning",title:"Deep Chain-of-Thought",desc:"Extreme step-by-step math",model:"GPT-4o / Claude",prompt:`Use extreme chain-of-thought. Write every intermediate step.\nFinal answer in \\boxed{} then say "DONE".\n\nProblem:`},
    {id:"r02",category:"reasoning",title:"8-Step MCQ Reasoning",desc:"Systematic MCQ reasoning",model:"Claude / Gemini",prompt:`List 8 reasoning steps minimum.\nEnd with: Final Answer: (X)\n\nQuestion:`},
    {id:"r03",category:"reasoning",title:"Olympiad Math",desc:"Rigorous proofs with lemmas",model:"o1 / Claude",prompt:`Solve like Terence Tao. Show every lemma.\nFinal in \\boxed{} then "QED".\n\nProblem:`},
    {id:"r04",category:"reasoning",title:"PhD Science MCQ",desc:"Graduate-level science",model:"Claude / GPT-4o",prompt:`Think step-by-step for 4,000 words, criticize your reasoning, output only A, B, C or D in <answer> tags.\n\nQuestion:`},
    {id:"r05",category:"reasoning",title:"Problem Decomposition",desc:"Breaks complex problems",model:"Claude / GPT-4o",prompt:`Break down this problem.\n\n**Problem**: [DESCRIBE]\n\n## Decomposition\n1. Reframe: What are we really solving?\n2. Sub-Problems: A, B, C...\n3. Dependencies: What first?\n4. Solution Path\n5. Unknowns to learn`},
    {id:"r06",category:"reasoning",title:"Argument Builder",desc:"Constructs persuasive arguments",model:"Claude / GPT-4o",prompt:`Build argument for: [POSITION]\n\n**Thesis**: Clear statement\n\n**Argument 1-3**: Claim + Evidence + Reasoning\n\n**Anticipate Objections**: Objection + Rebuttal\n\n**Conclusion**:`},
    {id:"r07",category:"reasoning",title:"Critical Reading",desc:"Analyzes arguments critically",model:"Claude / GPT-4o",prompt:`Analyze this argument.\n\n**Text**: [PASTE]\n\n**Main Claim**:\n**Evidence**:\n**Logic**: Valid/Invalid?\n**Fallacies**:\n**Missing Info**:\n**Alternatives**:\n**Assessment**: Strong/Moderate/Weak`},
    
    // CODING (13)
    {id:"c01",category:"coding",title:"Competitive Programming",desc:"Grandmaster-level solutions",model:"GPT-4o / Claude",prompt:`You are a 3500-rated grandmaster. Output optimal C++20 solution with comments, then clean code.\n\nProblem:`},
    {id:"c02",category:"coding",title:"Bug Root Cause",desc:"Bug analysis + fix",model:"GPT-4o / Claude",prompt:`Explain root cause in detail, then output only fixed code.\n\nCode:`},
    {id:"c03",category:"coding",title:"Production Python",desc:"Google-style typed Python",model:"Claude / GPT-4o",prompt:`Write production-ready, fully typed Python with tests.\n\nSpec:`},
    {id:"c04",category:"coding",title:"ML Training Loop",desc:"PyTorch + wandb",model:"Claude / GPT-4o",prompt:`Write full PyTorch training loop with wandb logging.\n\nTask:`},
    {id:"c05",category:"coding",title:"Security Audit",desc:"Vulnerabilities + patches",model:"Claude / GPT-4o",prompt:`Write mitigations + exploit code + patch.\n\nVulnerability:`},
    {id:"c06",category:"coding",title:"DevOps Deploy",desc:"Terraform + K8s",model:"Claude / GPT-4o",prompt:`Write Terraform + Kubernetes with zero downtime.\n\nService:`},
    {id:"c07",category:"coding",title:"API Design",desc:"RESTful API spec",model:"Claude / GPT-4o",prompt:`Design complete RESTful API with OpenAPI 3.0 spec.\n\nRequirements:`},
    {id:"c08",category:"coding",title:"Agent Task Runner",desc:"Autonomous agent",model:"GPT-4o / Claude",prompt:`Complete task in <50 actions. Format: Observation → Thought → Action.\n\nTask:`},
    {id:"c09",category:"coding",title:"Code Translator",desc:"Convert between languages",model:"Claude / GPT-4o",prompt:`Convert code.\n\n**From**: [LANG]\n**To**: [LANG]\n\nCode:\n\`\`\`\n[PASTE]\n\`\`\`\n\n## Converted Code\n## Key Differences\n## Idiomatic Version`},
    {id:"c10",category:"coding",title:"Regex Explained",desc:"Builds and explains regex",model:"GPT-4o / Claude",prompt:`Help with regex.\n\n**Task**: [WHAT TO MATCH]\n**Should match**: [EXAMPLES]\n**Should NOT match**: [EXAMPLES]\n\n**Pattern**: \`[regex]\`\n**Explanation**: Part by part\n**Test Results**:\n**In JS/Python**:`},
    {id:"c11",category:"coding",title:"Git Commit Message",desc:"Conventional commits",model:"GPT-4o / Claude",prompt:`Write commit message.\n\n**Changes**: [DESCRIBE]\n**Why**: [REASON]\n\n\`\`\`\ntype(scope): subject\n\nbody\n\`\`\``},
    {id:"c12",category:"coding",title:"Error Decoder",desc:"Explains errors plainly",model:"Claude / GPT-4o",prompt:`Explain this error.\n\n**Error**: [PASTE]\n**Code**: [PASTE]\n\n**What it means**:\n**Why it happened**:\n**Root cause**:\n**Fix**:\n**Prevention**:`},
    {id:"c13",category:"coding",title:"Code Commenter",desc:"Adds useful comments",model:"Claude / GPT-4o",prompt:`Add comments. Explain WHY not WHAT.\n\n**Code**: [PASTE]\n**Level**: [minimal/standard/verbose]\n\n## Commented Code\n## Documentation`},
    
    // SCIENCE (7)
    {id:"s01",category:"science",title:"Medical Diagnosis",desc:"Differential diagnosis",model:"Claude / GPT-4o",prompt:`List differential diagnoses with probabilities. Final in <diagnosis> tags.\n\nSymptoms:`},
    {id:"s02",category:"science",title:"Research Proposal",desc:"Full methodology",model:"Claude / GPT-4o",prompt:`Write complete research proposal with hypothesis, methodology, budget, timeline.\n\nTopic:`},
    {id:"s03",category:"science",title:"Literature Review",desc:"Systematic review",model:"Claude / GPT-4o",prompt:`Write systematic literature review with citations, identify gaps.\n\nTopic:`},
    {id:"s04",category:"science",title:"Experiment Design",desc:"Complete methodology",model:"Claude / GPT-4o",prompt:`Design experiment with hypothesis, variables, controls, sample size, analysis plan.\n\nQuestion:`},
    {id:"s05",category:"science",title:"Data Analysis Plan",desc:"Statistical methodology",model:"Claude / GPT-4o",prompt:`Create data analysis plan with statistical tests, assumptions, interpretation.\n\nStudy:`},
    {id:"s06",category:"science",title:"Lab Protocol",desc:"Step-by-step procedure",model:"Claude / GPT-4o",prompt:`Write detailed lab protocol with materials, safety, procedure, troubleshooting.\n\nExperiment:`},
    {id:"s07",category:"science",title:"Scientific Explanation",desc:"Mechanism explanation",model:"Claude / GPT-4o",prompt:`Explain the mechanism with clear steps and diagram suggestions.\n\nPhenomenon:`},
    
    // BUSINESS (13)
    {id:"b01",category:"business",title:"DCF Model",desc:"Quant-grade valuation",model:"o1 / Claude",prompt:`Build full DCF model in Python with assumptions.\n\nCompany:`},
    {id:"b02",category:"business",title:"3-Statement Model",desc:"Income, balance, cash flow",model:"Claude / GPT-4o",prompt:`Build complete 3-statement model in Excel formulas.\n\nScenario:`},
    {id:"b03",category:"business",title:"VC Due Diligence",desc:"Investment analysis",model:"Claude / GPT-4o",prompt:`Write complete due diligence report with valuation.\n\nStartup:`},
    {id:"b04",category:"business",title:"Business Plan",desc:"Complete plan + financials",model:"Claude / GPT-4o",prompt:`Write complete business plan with financials.\n\nCompany:`},
    {id:"b05",category:"business",title:"Product PRD",desc:"Metrics, edge cases, rollout",model:"Claude / GPT-4o",prompt:`Write complete PRD with metrics, edge cases, rollout.\n\nFeature:`},
    {id:"b06",category:"business",title:"OKRs Generator",desc:"Objectives and key results",model:"Claude / GPT-4o",prompt:`Create OKRs for this team/company.\n\nContext:`},
    {id:"b07",category:"business",title:"Competitive Analysis",desc:"Market positioning",model:"Claude / GPT-4o",prompt:`Conduct competitive analysis with positioning, strengths/weaknesses, recommendations.\n\nIndustry:`},
    {id:"b08",category:"business",title:"Pricing Strategy",desc:"Complete pricing analysis",model:"Claude / GPT-4o",prompt:`Develop pricing strategy with market analysis, models, recommendations.\n\nProduct:`},
    {id:"b09",category:"business",title:"RICE Score Calculator",desc:"Feature prioritization",model:"Claude / GPT-4o",prompt:`RICE score this.\n\n**Feature**: [DESCRIBE]\n\n**Reach**: Users/quarter + rationale\n**Impact**: 3 to 0.25 + rationale\n**Confidence**: 100% to 50% + rationale\n**Effort**: Person-months\n\n**Score**: (R × I × C) / E = X`},
    {id:"b10",category:"business",title:"Stakeholder Update",desc:"Clear status updates",model:"Claude / GPT-4o",prompt:`Write stakeholder update.\n\n**Project**: [NAME]\n\n**TL;DR**:\n✅ Progress\n🔄 In Progress\n⚠️ Blockers\n📊 Metrics\n➡️ Next Steps`},
    {id:"b11",category:"business",title:"Process Documentation",desc:"SOPs and handbooks",model:"Claude / GPT-4o",prompt:`Document as SOP.\n\n**Process**: [NAME]\n\n**Overview**: Name, version, owner\n**Scope**: Covers/doesn't\n**Prerequisites**:\n**Procedure**: Steps\n**Exceptions**:\n**Troubleshooting**:`},
    {id:"b12",category:"business",title:"Meeting Agenda",desc:"Effective meetings",model:"Claude / GPT-4o",prompt:`Create meeting agenda.\n\n**Purpose**: [WHY]\n**Duration**: [LENGTH]\n\n| Time | Topic | Owner | Goal |\n\n**Pre-Meeting Prep**:\n**Decisions Needed**:`},
    {id:"b13",category:"business",title:"Job Description",desc:"Compelling job posts",model:"Claude / GPT-4o",prompt:`Write job description.\n\n**Role**: [TITLE]\n**Level**: [LEVEL]\n\n**About Us**:\n**About the Role**:\n**What You'll Do**:\n**What You Bring**:\n**What We Offer**:`},
    
    // WRITING (10)
    {id:"w01",category:"writing",title:"Investigative Report",desc:"Full report + sources",model:"Claude / GPT-4o",prompt:`Write investigative report with sources and timeline.\n\nTopic:`},
    {id:"w02",category:"writing",title:"Short Story",desc:"Complete story with twist",model:"Claude / GPT-4o",prompt:`Write complete short story with compelling characters and twist.\n\nTheme:`},
    {id:"w03",category:"writing",title:"Ad Copy",desc:"Viral ad script",model:"Claude / GPT-4o",prompt:`Write compelling ad copy that converts.\n\nProduct:`},
    {id:"w04",category:"writing",title:"Technical Documentation",desc:"Clear tech writing",model:"Claude / GPT-4o",prompt:`Create clear, comprehensive documentation.\n\nSubject:`},
    {id:"w05",category:"writing",title:"Email Sequence",desc:"Multi-email campaigns",model:"Claude / GPT-4o",prompt:`Write 5-email sequence for this campaign.\n\nGoal:`},
    {id:"w06",category:"writing",title:"Hook Generator",desc:"Attention-grabbing openers",model:"Claude / GPT-4o",prompt:`Generate 10 hooks for: [TOPIC]\n\nCreate: Question, Statistic, Story, Contrarian, Quote, Problem, Curiosity, Bold Claim, "Imagine", Direct Address\n\n**Top 3 Recommendations**`},
    {id:"w07",category:"writing",title:"Content Repurposer",desc:"Multiple formats",model:"Claude / GPT-4o",prompt:`Repurpose:\n\n[PASTE]\n\nInto:\n- Twitter Thread\n- LinkedIn Post\n- Email Snippet\n- Instagram Caption\n- Video Script (60s)\n- Quote Graphics (3)`},
    {id:"w08",category:"writing",title:"Tone Adjuster",desc:"Rewrites in different tones",model:"Claude / GPT-4o",prompt:`Rewrite in different tone.\n\n**Original**: [PASTE]\n**Current**: [formal/casual]\n**Target**: [DESIRED]\n\n## Rewritten\n## Changes Made`},
    {id:"w09",category:"writing",title:"Headline Analyzer",desc:"Improves headlines",model:"GPT-4o / Claude",prompt:`Analyze: [HEADLINE]\n\nScores (1-10): Emotional, Clarity, Specificity\n**Overall**: X/40\n\n**Improved Headlines** (5)\n**A/B Test Recommendation**`},
    {id:"w10",category:"writing",title:"Story Structure",desc:"Narrative frameworks",model:"Claude / GPT-4o",prompt:`Structure this story.\n\n**Story**: [DESCRIBE]\n**Purpose**: [GOAL]\n\n## Hero's Journey\n## Pixar Format\n## Opening & Closing Options`},
    
    // ANALYSIS (10)
    {id:"a01",category:"analysis",title:"Contract Review",desc:"Risk analysis + clauses",model:"Claude / GPT-4o",prompt:`Review contract for risks, unfavorable clauses, missing protections.\n\nContract:`},
    {id:"a02",category:"analysis",title:"Data Analysis",desc:"Statistical insights",model:"Claude / GPT-4o",prompt:`Analyze data with statistical insights and actionable conclusions.\n\nData:`},
    {id:"a03",category:"analysis",title:"Market Research",desc:"Industry analysis",model:"Claude / GPT-4o",prompt:`Conduct market research: size, trends, key players, opportunities.\n\nMarket:`},
    {id:"a04",category:"analysis",title:"Risk Assessment",desc:"Risk + mitigation",model:"Claude / GPT-4o",prompt:`Identify risks with likelihood, impact, mitigation strategies.\n\nSituation:`},
    {id:"a05",category:"analysis",title:"Root Cause Analysis",desc:"Problem investigation",model:"Claude / GPT-4o",prompt:`Conduct root cause analysis using 5 Whys and Fishbone.\n\nProblem:`},
    {id:"a06",category:"analysis",title:"SWOT Analysis",desc:"Strategic analysis",model:"Claude / GPT-4o",prompt:`SWOT for: [SUBJECT]\n\n**Strengths**: Evidence + leverage\n**Weaknesses**: Impact + address\n**Opportunities**: Timeline + action\n**Threats**: Likelihood + mitigation\n\n## Strategic Actions`},
    {id:"a07",category:"analysis",title:"Pros and Cons",desc:"Decision analysis",model:"Claude / GPT-4o",prompt:`Pros/cons for: [DECISION]\n\n## Option A\n**Pros**: Weight (1-5), Explanation\n**Cons**: Weight (1-5), Explanation\n**Score**: Net X\n\n## Option B\n## Recommendation`},
    {id:"a08",category:"analysis",title:"Five Whys",desc:"Root cause method",model:"Claude / GPT-4o",prompt:`Five Whys for: [PROBLEM]\n\nWhy 1 → Why 2 → Why 3 → Why 4 → Why 5 = ROOT CAUSE\n\n## Corrective Actions\n- Immediate\n- Root cause\n- Systemic`},
    {id:"a09",category:"analysis",title:"Cost-Benefit Analysis",desc:"Financial evaluation",model:"Claude / GPT-4o",prompt:`Cost-benefit for: [PROPOSAL]\n\n## Costs (One-Time, Ongoing, Hidden)\n## Benefits (Quantifiable, Non-Quantifiable)\n## Analysis (NPV, Payback, ROI)\n## Recommendation`},
    {id:"a10",category:"analysis",title:"Stakeholder Analysis",desc:"Maps interests",model:"Claude / GPT-4o",prompt:`Stakeholder analysis for: [PROJECT]\n\n| Name | Interest | Influence | Strategy |\n\n## Key Profiles\nWants, Fears, How to win\n\n## Communication Plan`},
    
    // CREATIVE (10)
    {id:"cr01",category:"creative",title:"Brand Voice Guide",desc:"Communication standards",model:"Claude / GPT-4o",prompt:`Create brand voice guide: tone, vocabulary, do's/don'ts, examples.\n\nBrand:`},
    {id:"cr02",category:"creative",title:"Social Media Strategy",desc:"Platform content",model:"Claude / GPT-4o",prompt:`Create social strategy: content pillars, schedule, engagement tactics.\n\nBrand:`},
    {id:"cr03",category:"creative",title:"Video Script",desc:"Engaging video content",model:"Claude / GPT-4o",prompt:`Write video script with hook, content, visuals, CTA.\n\nTopic:`},
    {id:"cr04",category:"creative",title:"Podcast Outline",desc:"Episode structure",model:"Claude / GPT-4o",prompt:`Create episode outline with segments, talking points, engagement moments.\n\nTopic:`},
    {id:"cr05",category:"creative",title:"Presentation Design",desc:"Slide structure",model:"Claude / GPT-4o",prompt:`Create presentation structure with slide content, speaker notes, visuals.\n\nTopic:`},
    {id:"cr06",category:"creative",title:"Product Description",desc:"Compelling product copy",model:"Claude / GPT-4o",prompt:`Write product description.\n\n**Product**: [WHAT]\n**Customer**: [WHO]\n**Price Point**: [LEVEL]\n\nHeadline, Benefits (Feature → Benefit → Feeling), How It Works, FAQ, CTA\n\n**SEO**: Title, Meta, Keywords`},
    {id:"cr07",category:"creative",title:"Bio Writer",desc:"Professional bios",model:"Claude / GPT-4o",prompt:`Write a bio.\n\n**Name**: [NAME]\n**Role**: [TITLE]\n**Achievements**: [LIST]\n\n## Bios\n- Third Person (150 words)\n- Third Person Short (50 words)\n- First Person (150 words)\n- One-Liner\n- Twitter Bio (160 chars)\n\n## LinkedIn Headlines (3)`},
    {id:"cr08",category:"creative",title:"Analogy Generator",desc:"Explains with analogies",model:"Claude / GPT-4o",prompt:`Create analogies for: [CONCEPT]\n\n- Everyday Object\n- Human Body\n- Sports/Game\n- Kitchen/Food\n- Building\n- Relationship\n- Journey\n\n## Best for Your Audience`},
    {id:"cr09",category:"creative",title:"Metaphor Enhancer",desc:"Adds vivid imagery",model:"Claude",prompt:`Enhance with metaphors.\n\n**Original**: [PASTE]\n**Tone**: [INSPIRING/DRAMATIC/WARM]\n\n## Enhanced Version\n## Metaphors Used\n## Sensory Details Added`},
    {id:"cr10",category:"creative",title:"CTA Writer",desc:"Compelling calls to action",model:"Claude / GPT-4o",prompt:`Write CTAs.\n\n**Action**: [DESIRED]\n**Context**: [WHERE]\n**Urgency**: [LOW/MEDIUM/HIGH]\n\n## Button CTAs (under 5 words)\n- Action-Focused (3)\n- Benefit-Focused (3)\n- Urgency-Focused (2)\n\n## Full CTA Sections (4 versions)\n## A/B Test Suggestions`},
    
    // PROFESSIONAL (12)
    {id:"pr01",category:"professional",title:"Performance Review",desc:"Employee evaluations",model:"Claude / GPT-4o",prompt:`Write balanced, constructive performance review with specific examples.\n\nContext:`},
    {id:"pr02",category:"professional",title:"Interview Questions",desc:"Role-specific questions",model:"Claude / GPT-4o",prompt:`Create interview questions: behavioral, technical, culture fit with evaluation criteria.\n\nRole:`},
    {id:"pr03",category:"professional",title:"Project Charter",desc:"Project documentation",model:"Claude / GPT-4o",prompt:`Create project charter: scope, objectives, stakeholders, timeline, success criteria.\n\nProject:`},
    {id:"pr04",category:"professional",title:"Change Management",desc:"Change implementation",model:"Claude / GPT-4o",prompt:`Create change management plan: communication, training, resistance management.\n\nChange:`},
    {id:"pr05",category:"professional",title:"Negotiation Prep",desc:"Negotiation strategy",model:"Claude / GPT-4o",prompt:`Prepare negotiation strategy: BATNA, ZOPA, tactics, concession planning.\n\nNegotiation:`},
    {id:"pr06",category:"professional",title:"Presentation Coach",desc:"Presentation improvement",model:"Claude / GPT-4o",prompt:`Review presentation: structure, content, delivery suggestions, engagement.\n\nPresentation:`},
    {id:"pr07",category:"professional",title:"Feedback Framework",desc:"Delivering feedback",model:"Claude / GPT-4o",prompt:`Structure feedback using SBI (Situation-Behavior-Impact).\n\nFeedback needed:`},
    {id:"pr08",category:"professional",title:"Career Development",desc:"Growth planning",model:"Claude / GPT-4o",prompt:`Create career development plan: skills gap, learning path, milestones.\n\nCurrent role and goals:`},
    {id:"pr09",category:"professional",title:"Email Templates",desc:"Professional responses",model:"Claude / GPT-4o",prompt:`Create email templates.\n\n**Scenario**: [SITUATION]\n**Tone**: [FORMAL/FRIENDLY]\n\n## Responses\n1. Initial Response\n2. Positive Response\n3. Negative Response (decline politely)\n4. Clarification Request\n5. Follow-Up\n\nEach: Subject + body + sign-off`},
    {id:"pr10",category:"professional",title:"Delegation Brief",desc:"Effective delegation",model:"Claude / GPT-4o",prompt:`Create delegation brief.\n\n**Task**: [WHAT]\n**To**: [WHO]\n**Deadline**: [WHEN]\n\n## Brief\nTask, Context, Expected Outcome, Authority Level, Resources, Checkpoints, Support`},
    {id:"pr11",category:"professional",title:"Decision Document",desc:"Documents decisions",model:"Claude / GPT-4o",prompt:`Document this decision.\n\n**Decision**: [WHAT]\n\n## Record\nDate, Decision, Context, Options Considered, Criteria, Rationale, Expected Outcomes, Risks, Review Date`},
    {id:"pr12",category:"professional",title:"Quarterly Goals",desc:"OKR planning",model:"Claude / GPT-4o",prompt:`Create quarterly goals.\n\n**Role**: [YOUR ROLE]\n**Quarter**: [Q1/Q2/Q3/Q4]\n\n## OKRs\n\n**Objective 1**: [Qualitative]\n- KR1: [Measurable] - Target: [X]\n- KR2, KR3...\n\n## Weekly Check-In Template\n## End of Quarter Review`},
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
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [userVotes, setUserVotes] = useState<Record<string, number>>({});
  const [copies, setCopies] = useState<Record<string, number>>({});

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedVotes = localStorage.getItem('prax_votes');
      const savedUserVotes = localStorage.getItem('prax_user_votes');
      const savedCopies = localStorage.getItem('prax_copies');
      if (savedVotes) setVotes(JSON.parse(savedVotes));
      if (savedUserVotes) setUserVotes(JSON.parse(savedUserVotes));
      if (savedCopies) setCopies(JSON.parse(savedCopies));
    } catch (e) {
      console.error('Error loading from localStorage', e);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('prax_votes', JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem('prax_user_votes', JSON.stringify(userVotes));
  }, [userVotes]);

  useEffect(() => {
    localStorage.setItem('prax_copies', JSON.stringify(copies));
  }, [copies]);

  const handleVote = (id: string, dir: number) => {
    const currentUserVote = userVotes[id] || 0;
    const currentVoteCount = votes[id] || 0;
    
    let newUserVote = dir;
    let newVoteCount = currentVoteCount;
    
    if (currentUserVote === dir) {
      // Clicking same direction again - remove vote
      newUserVote = 0;
      newVoteCount = currentVoteCount - dir;
    } else if (currentUserVote === 0) {
      // No previous vote
      newVoteCount = currentVoteCount + dir;
    } else {
      // Changing vote direction
      newVoteCount = currentVoteCount + (dir * 2);
    }
    
    setUserVotes(prev => ({ ...prev, [id]: newUserVote }));
    setVotes(prev => ({ ...prev, [id]: newVoteCount }));
  };

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
    } else if (currentSort === "votes") {
      list.sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0));
    } else if (currentSort === "copies") {
      list.sort((a, b) => (copies[b.id] || 0) - (copies[a.id] || 0));
    }
    
    return list;
  }, [currentCategory, searchQuery, currentSort, votes, copies]);

  const copyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setCopies(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
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
              className={`sort-btn ${currentSort === "votes" ? "active" : ""}`}
              onClick={() => setCurrentSort("votes")}
            >Top Voted</button>
            <button 
              className={`sort-btn ${currentSort === "copies" ? "active" : ""}`}
              onClick={() => setCurrentSort("copies")}
            >Most Copied</button>
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
                <th style={{width: '70px', textAlign: 'center'}}>Votes</th>
                <th style={{width: '140px'}}>Category</th>
                <th>System</th>
                <th style={{width: '70px', textAlign: 'center'}}>Copies</th>
                <th style={{width: '120px'}}>Model</th>
                <th style={{width: '100px', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrompts.map(p => {
                const voteCount = votes[p.id] || 0;
                const userVote = userVotes[p.id] || 0;
                const copyCount = copies[p.id] || 0;
                
                return (
                  <tr key={p.id}>
                    <td className="td-votes">
                      <div className="vote-box">
                        <button 
                          className={`vote-btn up ${userVote === 1 ? 'active' : ''}`}
                          onClick={() => handleVote(p.id, 1)}
                        >▲</button>
                        <span className={`vote-count ${voteCount > 0 ? 'pos' : voteCount < 0 ? 'neg' : ''}`}>
                          {voteCount}
                        </span>
                        <button 
                          className={`vote-btn down ${userVote === -1 ? 'active' : ''}`}
                          onClick={() => handleVote(p.id, -1)}
                        >▼</button>
                      </div>
                    </td>
                    <td><span className="cat-badge">{getCategoryIcon(p.category)} {getCategoryName(p.category)}</span></td>
                    <td>
                      <div className="p-title">{p.title}</div>
                      <div className="p-desc">{p.desc}</div>
                    </td>
                    <td className="td-copies">{copyCount}</td>
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
                );
              })}
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
            <a href="https://praxdigital.lemonsqueezy.com/checkout/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec?discount=0" className="pricing-btn pricing-btn-secondary">Get Starter</a>
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
            <a href="https://praxdigital.lemonsqueezy.com/checkout/buy/15eeba33-3d0d-45a4-898b-998cefce0157" className="pricing-btn pricing-btn-primary">Get Team Access</a>
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
            <a href="https://praxdigital.lemonsqueezy.com/checkout/buy/557bd908-945f-4dd3-bbc0-e701df7303b9" className="pricing-btn pricing-btn-secondary">Start Monthly</a>
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
