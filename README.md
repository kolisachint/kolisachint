## Sachin Koli

**Solution Architect — Cloud Data & AI Platforms.** Eighteen years on the layer most
people never see: the platforms, pipelines and APIs that make a bank's app show you
the right number.

Today I architect the batch and real-time data platform for a UK tier-1 retail bank —
event-driven ingestion on Kafka and Pub/Sub, orchestration across Cloud Composer and a
legacy enterprise scheduler, modelling in BigQuery and dbt, the whole estate provisioned
with Terraform. The hard part is never a single tool. It is making a modern cloud stack
and a twenty-year-old on-premise estate agree with each other, every night, reliably.

Before the platform work, four years on payments at the same bank — cards into Google Pay
and Apple Pay, click-to-pay checkout, then a three-tranche migration of the entire
card-journey estate onto GCP microservices behind Apigee X.

---

### What I build in the open

Agent tooling and on-device inference. Small, composable, mostly Rust — written because I
wanted to understand the primitives rather than call someone's API for them.

| | |
| --- | --- |
| **[hoocode](https://github.com/kolisachint/hoocode)** | A deterministic terminal coding agent, published to npm as [`@kolisachint/hoocode-agent`](https://www.npmjs.com/package/@kolisachint/hoocode-agent). Four packages — CLI, agent runtime with tool calling, a unified LLM API across 25+ providers, and a differential-rendering TUI. Permission gate on every edit and command, MCP, subagents. Extends a fork of the MIT-licensed `pi-mono`. |
| **[embeddingsearchtools](https://github.com/kolisachint/embeddingsearchtools)** | Semantic search in Rust. MiniLM through ONNX Runtime with int8 weights bundled in the binary, **HNSW approximate nearest neighbour written from scratch**, BM25 fusion for hybrid retrieval, mmap-backed store. Library, CLI and daemon. |
| **[voicetools](https://github.com/kolisachint/voicetools)** | Offline speech recognition — microphone → VAD → Parakeet-TDT on ONNX Runtime, 25 languages, `whisper.cpp` fallback. No audio leaves the machine. |
| **[webtools](https://github.com/kolisachint/webtools)** | Token-efficient fetch and search for agents. Preserves reference-style URLs as single-token markers so a page fits inside a context budget. |
| **[hooteams](https://github.com/kolisachint/hooteams) · [hoocowork](https://github.com/kolisachint/hoocowork) · [hoocanvas](https://github.com/kolisachint/hoocanvas)** | The collaboration layer above the agent — multi-agent teams, a shared workspace, and a canvas for the artefacts they produce. |
| **[browsertools](https://github.com/kolisachint/browsertools) · [filetools](https://github.com/kolisachint/filetools) · [computertools](https://github.com/kolisachint/computertools)** | The rest of the tool surface an agent needs to touch a real machine. |

I work on **inference and retrieval**, not model training.

---

### Selected work

- The **self-serve fraud journey** I architected was recognised at the **Banking Tech Awards 2024**
  and the **Card & Payments Awards 2025**. The award went to the programme; my contribution
  was the solution architecture.
- A customer **preference API on GCP** — App Engine, Pub/Sub, Dataflow, BigQuery — serving
  millions of customers and removing **$600,000 a year** in operating cost.
- A **Teradata → BigQuery** data lake migration, and five stacks replaced with cloud-native
  equivalents alongside it: Unix → Compute Engine, Control-M → Airflow, shell ETL → Python.
- An architecture decision (**ADR-007**) that replaced a bespoke four-tier visitor key and
  cookie-anchored sessionization with vendor-native canonical keys — exact dashboard parity,
  a whole class of window-function compute removed, legacy keys retained for reconciliation.

---

### Toolbelt

`GCP` · `BigQuery` · `dbt` · `Airflow / Cloud Composer` · `Pub/Sub` · `Kafka` · `GKE` ·
`Apigee` · `Terraform` · `Python` · `Rust` · `TypeScript` · `SQL` · `ONNX Runtime` ·
`LLM agents` · `MCP` · `RAG / hybrid retrieval`

**Google Cloud Certified — Professional Data Engineer.** Professional Cloud Architect in progress.

---

BE Computer Science, Walchand College of Engineering, Sangli · based in Pune, India

[kolisachint.github.io](https://kolisachint.github.io) · [LinkedIn](https://www.linkedin.com/in/kolisachint) · kolisachint@gmail.com
