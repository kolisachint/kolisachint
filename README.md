## Sachin Koli

**Solution Architect — Data & AI Platforms.**

Since 2008, I’ve designed and built the systems behind modern software — data platforms, microservices, APIs, distributed systems, and the infrastructure that makes them work reliably at scale.

Today, my work sits at the intersection of **data engineering and AI platforms** — designing systems for data-intensive applications, retrieval, agents, inference, and intelligent services.

### → [kolisachint.github.io](https://kolisachint.github.io)

The work in detail — what shipped, what it cost, and what I’d do differently.

---

### Same instinct, smaller blast radius

My professional work focuses on **data microservices and AI platforms** — connecting data, services, infrastructure, and applications into systems that can operate reliably at scale.

These projects are where I explore the same engineering problems in the open: deliberately smaller, closer to the primitives, and mostly built in Rust.

- **[hoocode](https://github.com/kolisachint/hoocode)** — a deterministic terminal coding agent, published on npm. Permission gates on every edit, one API across 25+ providers, MCP, and subagents.
- **[embeddingsearchtools](https://github.com/kolisachint/embeddingsearchtools)** — semantic search in Rust. HNSW implemented from scratch, BM25 fusion, and an int8 MiniLM model embedded in the binary.
- **[webtools](https://github.com/kolisachint/webtools)** — token-efficient web fetch and search for agents. Links collapse to compact `[1]`-style markers, keeping pages inside a constrained context budget.
- **[voicetools](https://github.com/kolisachint/voicetools)** — offline speech recognition. Microphone to stdout; audio never leaves the machine.

**Inference and retrieval, not model training.**

The interesting part is rarely the tool itself.

It is the architecture around it — how systems communicate, how data moves, how services compose, how failure is handled, and how much infrastructure is actually necessary.

That is what I’m exploring here.

The architecture, experiments, and engineering decisions behind the work are documented on **[the site](https://kolisachint.github.io)**.
