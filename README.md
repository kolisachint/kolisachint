## Sachin Koli

**Solution Architect — Cloud Data & AI Platforms.** Since 2008 on the layer most
people never see: the platforms, pipelines and APIs that make a bank's app show you the
right number.

Today I architect the batch and real-time data platform for a UK tier-1 retail bank —
Kafka and Pub/Sub ingestion, Cloud Composer against a legacy enterprise scheduler,
BigQuery and dbt modelling, Terraform throughout. The hard part is never a single tool;
it is making a modern cloud stack and a twenty-year-old on-premise estate agree with each
other, every night. Before that, four years on payments at the same bank.

### → [kolisachint.github.io](https://kolisachint.github.io)

The work in detail — what shipped, what it cost, and what I would do differently.

---

### In the open

Applied AI, mostly Rust: agent tooling, retrieval and on-device inference, written to
understand the primitives rather than call someone's API for them. The platform work I am
paid for sits inside a bank and cannot be shown — **these four can:**

- **[hoocode](https://github.com/kolisachint/hoocode)** — a deterministic terminal coding agent, on npm. Permission gate on every edit, one API across 25+ providers, MCP, subagents.
- **[embeddingsearchtools](https://github.com/kolisachint/embeddingsearchtools)** — semantic search in Rust. HNSW written from scratch, BM25 fused on top, int8 MiniLM in the binary.
- **[voicetools](https://github.com/kolisachint/voicetools)** — offline speech recognition. Microphone to stdout; no audio leaves the machine.
- **[webtools](https://github.com/kolisachint/webtools)** — token-efficient web fetch and search for agents, in Rust. Links collapse to `[1]`-sized markers, so a whole page fits inside a context budget.

I work on **inference and retrieval**, not model training.

---

### Two that stuck

- The **self-serve fraud journey** I architected was recognised at the **Banking Tech Awards 2024**
  and the **Card & Payments Awards 2025**. The award went to the programme; my contribution
  was the solution architecture.
- Earlier, in US retail: a customer **preference API on GCP** serving millions of customers,
  taking **$600,000 a year** out of operating cost.

Migrations, platform rebuilds and the ADRs behind them are on the site.

---

`GCP` · `BigQuery` · `dbt` · `Cloud Composer` · `Pub/Sub` · `Kafka` · `Apigee` · `Terraform` ·
`Python` · `Rust` · `TypeScript` · `ONNX Runtime` · `MCP` · `RAG`

**Google Cloud Certified — Professional Data Engineer.** Professional Cloud Architect in progress.

[kolisachint.github.io](https://kolisachint.github.io) · [LinkedIn](https://www.linkedin.com/in/kolisachint) · [kolisachint@gmail.com](mailto:kolisachint@gmail.com)
