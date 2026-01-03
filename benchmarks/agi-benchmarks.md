# AGI Benchmarks

Benchmarks designed to measure progress toward Artificial General Intelligence (AGI). These tests evaluate reasoning, abstraction, novel problem-solving, and capabilities that approach or exceed human-level performance.

---

## Reasoning & Abstraction

### ARC-AGI (Abstraction and Reasoning Corpus)
The gold standard for measuring fluid intelligence and novel problem-solving in AI systems.

| Metric | Details |
|--------|---------|
| **Creator** | Fran\u00e7ois Chollet (2019) |
| **What it tests** | Fluid intelligence, abstraction, generalization to novel tasks |
| **Format** | Visual grid puzzles requiring pattern recognition and transformation |
| **Human baseline** | ~85% (average), 100% (with effort) |
| **Current SOTA** | ~55% (as of late 2024) |
| **Prize** | $1M ARC Prize for human-level performance |

**Why it matters:** Unlike benchmarks that can be memorized, ARC tests genuine reasoning on problems the model has never seen. Each puzzle requires understanding abstract rules and applying them to new situations.

- **Website:** [arcprize.org](https://arcprize.org/)
- **Paper:** [On the Measure of Intelligence](https://arxiv.org/abs/1911.01547)
- **Tags:** `#reasoning` `#abstraction` `#fluid-intelligence` `#chollet`

---

### GPQA (Graduate-Level Google-Proof Q&A)
Expert-level science questions that even PhD holders struggle with outside their specialty.

| Metric | Details |
|--------|---------|
| **Creator** | Anthropic & NYU (2023) |
| **What it tests** | Deep domain expertise in physics, chemistry, biology |
| **Format** | Multiple-choice questions written by domain experts |
| **Human baseline** | ~65% (non-expert PhDs), ~80%+ (domain experts) |
| **Current SOTA** | ~60% (Claude 3.5, GPT-4o) |

**Why it matters:** Tests whether models have genuine understanding vs. pattern matching. Questions are "Google-proof"—even with search, non-experts struggle.

- **Paper:** [GPQA: A Graduate-Level Google-Proof Q&A Benchmark](https://arxiv.org/abs/2311.12022)
- **Tags:** `#science` `#expertise` `#reasoning` `#graduate-level`

---

### Frontier Math
Competition-level and research mathematics problems.

| Metric | Details |
|--------|---------|
| **Creator** | Epoch AI (2024) |
| **What it tests** | Advanced mathematical reasoning, proof construction |
| **Format** | Original problems from research mathematicians |
| **Human baseline** | Requires expert mathematicians |
| **Current SOTA** | <5% (as of late 2024) |

**Why it matters:** Unlike MATH benchmark (now largely solved), FrontierMath contains novel problems that require genuine mathematical creativity. Problems take human experts hours to days to solve.

- **Website:** [epochai.org/frontiermath](https://epochai.org/frontiermath)
- **Tags:** `#mathematics` `#reasoning` `#proof` `#research-level`

---

### Humanity's Last Exam
Crowdsourced hardest possible questions from domain experts worldwide.

| Metric | Details |
|--------|---------|
| **Creator** | Scale AI & CAIS (2024) |
| **What it tests** | Frontier knowledge across all domains |
| **Format** | Expert-submitted questions across 100+ subjects |
| **Human baseline** | Varies by domain (experts only) |
| **Current SOTA** | TBD (benchmark launched late 2024) |

**Why it matters:** Designed to be the "last exam" before AGI—questions so hard that passing would indicate superhuman capabilities in many domains.

- **Website:** [lastexam.ai](https://lastexam.ai/)
- **Tags:** `#frontier` `#multi-domain` `#expert-level` `#agi-test`

---

## Coding & Software Engineering

### SWE-bench
Real-world software engineering tasks from actual GitHub issues.

| Metric | Details |
|--------|---------|
| **Creator** | Princeton NLP (2023) |
| **What it tests** | End-to-end software engineering capability |
| **Format** | Resolve real GitHub issues with passing tests |
| **Variants** | SWE-bench Lite (300 issues), Full (2,294 issues), Verified |
| **Human baseline** | Professional SWE performance (varies) |
| **Current SOTA** | ~50% on Verified (Claude 3.5 Sonnet w/ tools) |

**Why it matters:** Tests the full software engineering loop—understanding codebases, debugging, writing fixes, ensuring tests pass. The closest benchmark to real developer work.

- **Website:** [swebench.com](https://www.swebench.com/)
- **Paper:** [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770)
- **Tags:** `#coding` `#software-engineering` `#github` `#real-world`

---

### HumanEval / HumanEval+
Function-level code generation from docstrings.

| Metric | Details |
|--------|---------|
| **Creator** | OpenAI (2021) |
| **What it tests** | Code generation from natural language |
| **Format** | Python functions with docstrings, verified by unit tests |
| **Problems** | 164 programming problems |
| **Current SOTA** | ~95%+ (largely saturated) |

**Why it matters:** Was the standard code generation benchmark. Now mostly solved, indicating rapid progress in coding capabilities.

- **Paper:** [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374)
- **Tags:** `#coding` `#python` `#function-generation` `#saturated`

---

### MLE-bench
Machine learning engineering competition problems.

| Metric | Details |
|--------|---------|
| **Creator** | OpenAI (2024) |
| **What it tests** | Full ML pipeline: data processing, model training, optimization |
| **Format** | Kaggle-style competition problems |
| **Metric** | Medal-equivalent performance (bronze/silver/gold) |
| **Current SOTA** | ~17% gold medal rate (o1-preview w/ scaffolding) |

**Why it matters:** Tests whether AI can do the work of ML engineers—not just write code, but design experiments, iterate on models, and achieve competitive results.

- **Paper:** [MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095)
- **Tags:** `#ml-engineering` `#kaggle` `#data-science` `#agent`

---

## AI Research & Self-Improvement

### RE-Bench (AI R&D Capabilities)
Can AI systems do AI research?

| Metric | Details |
|--------|---------|
| **Creator** | METR (2024) |
| **What it tests** | AI research and development capabilities |
| **Format** | ML research engineering tasks |
| **Duration** | 2-8 hour tasks for human experts |
| **Current SOTA** | Models achieve 4x human baseline at 2hrs, but plateau |

**Why it matters:** Directly measures whether AI can accelerate AI research—a key factor in potential recursive self-improvement scenarios.

- **Website:** [metr.org/research/re-bench](https://metr.org/blog/2024-11-22-evaluating-r-d-capabilities-of-llms/)
- **Tags:** `#ai-research` `#self-improvement` `#metr` `#safety`

---

## Knowledge & Reasoning Suites

### MMLU (Massive Multitask Language Understanding)
Broad knowledge across 57 academic subjects.

| Metric | Details |
|--------|---------|
| **Creator** | UC Berkeley (2020) |
| **What it tests** | World knowledge from elementary to professional level |
| **Format** | Multiple-choice across 57 subjects |
| **Human baseline** | ~90% (experts in respective fields) |
| **Current SOTA** | ~90%+ (largely saturated) |

**Why it matters:** Was the standard knowledge benchmark. Now mostly solved, with variants like MMLU-Pro providing harder tests.

- **Paper:** [Measuring Massive Multitask Language Understanding](https://arxiv.org/abs/2009.03300)
- **Tags:** `#knowledge` `#multi-domain` `#academic` `#saturated`

---

### MMLU-Pro
Harder version of MMLU with 10 answer choices and reasoning focus.

| Metric | Details |
|--------|---------|
| **Creator** | Tiger Research (2024) |
| **What it tests** | Deeper reasoning with more challenging distractors |
| **Format** | 10-way multiple choice (vs. 4-way in MMLU) |
| **Current SOTA** | ~75-80% |

**Why it matters:** Addresses MMLU saturation by increasing difficulty and reducing guessing effectiveness.

- **Paper:** [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://arxiv.org/abs/2406.01574)
- **Tags:** `#knowledge` `#reasoning` `#harder-mmlu`

---

### SimpleQA
Factual accuracy and hallucination testing.

| Metric | Details |
|--------|---------|
| **Creator** | OpenAI (2024) |
| **What it tests** | Factual accuracy, calibration, hallucination rates |
| **Format** | Short factual questions with verifiable answers |
| **Key metric** | Correct %, Incorrect %, "I don't know" rate |
| **Current SOTA** | ~40-45% correct (with appropriate refusals) |

**Why it matters:** Measures not just accuracy but whether models know what they don't know. Critical for trust and reliability.

- **Paper:** [SimpleQA: Measuring short-form factuality in large language models](https://openai.com/index/introducing-simpleqa/)
- **Tags:** `#factuality` `#hallucination` `#calibration` `#openai`

---

### BIG-Bench (Beyond the Imitation Game)
204 diverse tasks testing capabilities beyond standard benchmarks.

| Metric | Details |
|--------|---------|
| **Creator** | Google + 450 contributors (2022) |
| **What it tests** | Diverse cognitive abilities: logic, math, common sense, etc. |
| **Format** | 204 tasks, many novel and challenging |
| **Variant** | BIG-Bench Hard (23 hardest tasks) |

**Why it matters:** Crowdsourced benchmark designed to find model weaknesses and test emergent capabilities.

- **Paper:** [Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models](https://arxiv.org/abs/2206.04615)
- **Tags:** `#diverse` `#emergent` `#google` `#comprehensive`

---

## Mathematical Reasoning

### MATH
Competition mathematics problems (now largely solved).

| Metric | Details |
|--------|---------|
| **Creator** | UC Berkeley (2021) |
| **What it tests** | High school competition math |
| **Format** | 12,500 problems across 7 difficulty levels |
| **Human baseline** | ~90% (competition mathematicians) |
| **Current SOTA** | ~95%+ (o1, Claude 3.5) |

**Why it matters:** Was the gold standard for mathematical reasoning. Rapid saturation shows how quickly AI capabilities advance.

- **Paper:** [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874)
- **Tags:** `#math` `#competition` `#saturated` `#reasoning`

---

### GSM8K
Grade school math word problems.

| Metric | Details |
|--------|---------|
| **Creator** | OpenAI (2021) |
| **What it tests** | Multi-step arithmetic reasoning |
| **Format** | 8,500 grade-school word problems |
| **Current SOTA** | ~95%+ (saturated) |

**Why it matters:** Early benchmark for chain-of-thought reasoning. Now solved, but historically important.

- **Paper:** [Training Verifiers to Solve Math Word Problems](https://arxiv.org/abs/2110.14168)
- **Tags:** `#math` `#word-problems` `#saturated` `#chain-of-thought`

---

## Agentic & Tool Use

### GAIA (General AI Assistants)
Real-world tasks requiring tools, browsing, and multi-step reasoning.

| Metric | Details |
|--------|---------|
| **Creator** | Meta, HuggingFace, AutoGPT (2023) |
| **What it tests** | Tool use, web browsing, file handling, multi-step reasoning |
| **Format** | Questions requiring real-world actions to answer |
| **Levels** | 1 (simple), 2 (moderate), 3 (complex) |
| **Human baseline** | 92% |
| **Current SOTA** | ~75% with agentic scaffolding |

**Why it matters:** Tests practical assistant capabilities in realistic scenarios requiring multiple tools and reasoning steps.

- **Paper:** [GAIA: a benchmark for General AI Assistants](https://arxiv.org/abs/2311.12983)
- **Tags:** `#agent` `#tool-use` `#real-world` `#assistant`

---

### WebArena / VisualWebArena
Autonomous web browsing and task completion.

| Metric | Details |
|--------|---------|
| **Creator** | CMU (2023/2024) |
| **What it tests** | Navigating websites, completing tasks autonomously |
| **Format** | Tasks on realistic web environments (shopping, forums, etc.) |
| **Human baseline** | ~78% |
| **Current SOTA** | ~35-45% |

**Why it matters:** Tests whether AI can actually use the web like humans—browsing, clicking, filling forms, completing purchases.

- **Paper:** [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://arxiv.org/abs/2307.13854)
- **Tags:** `#agent` `#web-browsing` `#autonomous` `#visual`

---

## Safety & Alignment Evaluations

### METR Evaluations
Comprehensive capability and safety evaluations by Model Evaluation & Threat Research.

| Metric | Details |
|--------|---------|
| **Creator** | METR (formerly ARC Evals) |
| **What it tests** | Dangerous capabilities, autonomous replication, deception |
| **Used by** | OpenAI, Anthropic, Google DeepMind for pre-deployment |

**Why it matters:** Pre-deployment safety evaluations that major labs use to check for dangerous capabilities before releasing models.

- **Website:** [metr.org](https://metr.org/)
- **Tags:** `#safety` `#evaluation` `#dangerous-capabilities` `#pre-deployment`

---

### Agentic Safety Benchmarks
Tests for deceptive, manipulative, or misaligned behavior in agents.

| Benchmark | Focus |
|-----------|-------|
| **Machiavelli** | Deception, manipulation in text games |
| **MACHIAVELLI** | Power-seeking, deceptive behavior |
| **AgentHarm** | Harmful action refusal rates |
| **TruthfulQA** | Truthfulness vs. sycophancy |

**Why it matters:** As AI systems become more agentic, testing for alignment failures becomes critical.

- **Tags:** `#safety` `#alignment` `#deception` `#agent-safety`

---

## Benchmark Saturation Timeline

| Benchmark | Saturated | Years to Saturate | Final SOTA |
|-----------|-----------|-------------------|------------|
| GSM8K | 2023 | 2 years | ~95% |
| HumanEval | 2024 | 3 years | ~95% |
| MMLU | 2024 | 4 years | ~90% |
| MATH | 2024 | 3 years | ~95% |
| GPQA | Not yet | — | ~60% |
| ARC-AGI | Not yet | — | ~55% |
| FrontierMath | Not yet | — | <5% |
| SWE-bench | Not yet | — | ~50% |

---

## Leaderboards & Trackers

| Resource | Description | Link |
|----------|-------------|------|
| **Chatbot Arena** | Crowdsourced model rankings via blind comparisons | [lmarena.ai](https://lmarena.ai/) |
| **Open LLM Leaderboard** | HuggingFace open model rankings | [huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis** | Model speed, cost, and quality comparisons | [artificialanalysis.ai](https://artificialanalysis.ai/) |
| **SEAL Leaderboards** | Safety evaluations | [scale.com/leaderboard](https://scale.com/leaderboard) |
| **HELM** | Stanford holistic evaluation | [crfm.stanford.edu/helm](https://crfm.stanford.edu/helm/latest/) |

---

## Key Insights

### What Makes an AGI Benchmark?
1. **Novel problem-solving** — Can't be solved by memorization
2. **Transfer across domains** — Generalizes to unseen tasks
3. **Human-level difficulty** — Challenging even for experts
4. **Resistance to gaming** — Hard to overfit or shortcut

### Current Gaps in Evaluation
- **Long-horizon planning** — Multi-day or multi-week tasks
- **Physical world reasoning** — Robotics and embodiment
- **Social intelligence** — Nuanced human interaction
- **Creativity** — Genuinely novel ideas vs. recombination
- **Self-awareness** — Understanding own limitations

### The Benchmark Treadmill
Benchmarks saturate within 1-3 years of release. The community continuously creates harder tests, but the gap between "AI capability" and "AGI" remains philosophically contested.

---

*Last updated: January 2026*
