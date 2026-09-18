## Sachin Koli

**Solution Architect — Cloud Data & AI Platforms.** Since 2008 on the layer most people
never see: the platforms, pipelines and APIs that make a bank's app show you the right
number. Lately the same instincts pointed at AI systems — retrieval, agents, inference on
the machine in front of you.

### → [kolisachint.github.io](https://kolisachint.github.io)

The work in detail — what shipped, what it cost, and what I would do differently.

---

### Same instinct, different blast radius

The platform I am paid for is a UK tier-1 retail bank's batch and real-time data estate —
Kafka and Pub/Sub ingestion, Cloud Composer against a legacy enterprise scheduler,
BigQuery and dbt modelling, Terraform throughout. It is closed; it lives inside a bank.
These are open, and they are the same instinct at a smaller blast radius — applied AI,
mostly Rust, written to understand the primitive rather than call someone's API for it.

- **[hoocode](https://github.com/kolisachint/hoocode)** — a deterministic terminal coding
  agent, published on npm. A permission gate on every edit, one API across 25+ providers,
  MCP, subagents.
- **[embeddingsearchtools](https://github.com/kolisachint/embeddingsearchtools)** —
  semantic search in Rust. HNSW written from scratch, BM25 fused on top, an int8 MiniLM
  inside the binary.
- **[webtools](https://github.com/kolisachint/webtools)** — token-efficient web fetch and
  search for agents. Links collapse to `[1]`-sized markers, so a whole page fits inside a
  context budget.
- **[voicetools](https://github.com/kolisachint/voicetools)** — offline speech
  recognition. Microphone to stdout; no audio ever leaves the machine.

Inference and retrieval, not model training.

The hard part is never a single tool, on either side. It is making a modern cloud stack
and a twenty-year-old on-premise estate agree with each other, every night — four years on
the same bank's payments platform before that. The engagements, and what each one actually
involved, are [on the site](https://kolisachint.github.io/about).

<!-- now:start -->
**Now · September 2026** — Building HooCode, a terminal coding agent, and the small Rust tools it leans on — search, browser, speech, files.
<!-- now:end -->

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kolisachint)
[![X](https://img.shields.io/badge/@sachinkoli-333333?style=flat-square&logo=x&logoColor=white)](https://x.com/sachinkoli)
[![Gmail](https://img.shields.io/badge/kolisachint@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:kolisachint@gmail.com)
