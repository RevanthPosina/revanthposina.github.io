// All site copy lives here. Components only render it.

export const profile = {
  name: 'Revanth Posina',
  title: 'Data Engineer (AI/ML)',
  employer: 'Microsoft',
  email: 'posinarevanth@gmail.com',
  url: 'https://revanthposina.github.io',
  description:
    'Data Engineer (AI/ML) at Microsoft. I build the pipelines, forecasts and agents that power finance analytics at scale.',
  links: {
    github: 'https://github.com/RevanthPosina',
    linkedin: 'https://www.linkedin.com/in/revanth-p/',
    medium: 'https://medium.com/@revp',
    kaggle: 'https://www.kaggle.com/revzkaggle',
  },
  roles: [
    'Data Engineer (AI/ML) at Microsoft',
    'Data, Distributed Systems, AI',
    'LLM agents, with evals',
    'Lakehouses, streaming, query engines',
  ],
};

export const categories = { work: 'Work', side: 'Side projects' };

export const cases = [
  {
    id: 'msft', cat: 'work', org: 'Microsoft', yrs: '2025 to now', vis: 'forecast',
    title: 'Finance forecasting and analytics agents',
    sum: 'Building the governed data layer, forecasting and anomaly models, and LLM agents that finance teams plan with.',
  },
  {
    id: 'p990', cat: 'work', org: 'Project990', yrs: '2025', vis: 'vectors',
    title: 'Form 990 document intelligence',
    sum: 'Turned IRS Form 990 filings into validated datasets and a search service analysts can query in plain English.',
  },
  {
    id: 'bloom', cat: 'work', org: 'Bloom Insurance', yrs: '2023 to 2024', vis: 'stream',
    title: 'Claims migration and near-real-time ingestion',
    sum: 'Moved claims, member and provider analytics onto a streaming cloud platform, then kept it reliable.',
  },
  {
    id: 'ukaidb', cat: 'side', org: 'Personal, open source', yrs: '2026', vis: 'branch',
    title: 'UkaiDB, a control layer for LLM agents on DuckDB',
    sum: 'A Python layer between LLM agents and DuckDB that reuses results across agents, enforces cost budgets, gives each agent a copy-on-write branch of the data, and records where every answer came from.',
    chips: ['Python', 'DuckDB', 'DuckLake', 'Arrow', 'Parquet', 'MCP', 'Claude', 'pytest'],
    bullets: [
      'Reuse across agents: an exact-result cache keyed by a canonical SQL fingerprint from the DuckDB AST plus per-table snapshot tokens, so writes invalidate it. Identical queries already running are joined, and narrower queries are answered from a cached broader result after a correctness check.',
      'Cost control before execution: a LIMIT-aware estimate from EXPLAIN, per-session scan budgets, per-agent token-bucket quotas, and a watchdog that cancels only the offending session.',
      "Data branches for agents on DuckLake: copy-on-write, pinned to a snapshot and created as metadata only, with diff, merge under optimistic concurrency, rebase and row-level conflict detection modeled on PostgreSQL 19's conflict types.",
      'Provenance from an append-only query log and write-event log answers where an answer came from, what a merge made stale, and which write invalidated a cached result.',
      'An MCP server with 12 tools lets Claude or any MCP client use all of it. SQL is checked as read-only, file access is locked down, and tool results are wrapped as untrusted data to resist prompt injection.',
      'Benchmarked with Claude Haiku agents on 10.5M rows of NYC taxi and ClickBench data, across 40 tasks with a held-out split that was never tuned on. Four ideas that did not pay off are published alongside the wins.',
    ],
    mhead: 'Measured with real agents',
    mets: [
      { v: '57% fewer', k: 'rows scanned per attempt, no accuracy loss' },
      { v: '60 to 70%', k: 'of queries served by reuse' },
      { v: '54 of 54', k: 'derived answers matched a fresh run' },
      { v: '57 ms', k: 'to branch 9.55M rows, 0 bytes written' },
    ],
    note: 'Reuse numbers are from 10 parallel attempts per question, 4 concurrent agents and 3 seeds. With one attempt per question there were no duplicate queries and the cache saved nothing. About $3.70 of LLM spend in total. I designed the architecture, experiments and decisions; Claude Code implemented under my direction and I reviewed every change.',
    dia: {
      h: 290,
      nodes: [
        { id: 'ag', x: 10, y: 20, l: 'LLM agents', s: 'Claude Haiku' },
        { id: 'mcp', x: 196, y: 20, l: 'MCP server', s: '12 tools, stdio', k: 'key' },
        { id: 'chk', x: 382, y: 20, l: 'SQL checker', s: 'read-only, sandboxed', k: 'tag' },
        { id: 'fp', x: 568, y: 20, l: 'Fingerprint', s: 'AST + snapshot token', k: 'key' },
        { id: 'wd', x: 196, y: 125, l: 'Watchdog', s: 'per-session cancel', k: 'tag' },
        { id: 'adm', x: 382, y: 125, l: 'Admission', s: 'EXPLAIN cost, budgets', k: 'key' },
        { id: 'rc', x: 568, y: 125, l: 'Result cache', s: 'dedup + derivation', k: 'key' },
        { id: 'prov', x: 10, y: 230, l: 'Provenance', s: 'lineage, impact, why', k: 'key' },
        { id: 'log', x: 196, y: 230, l: 'Query + write logs', s: 'append-only', k: 'tag' },
        { id: 'db', x: 382, y: 230, l: 'DuckDB', s: 'embedded, columnar' },
        { id: 'pool', x: 568, y: 230, l: 'Pools on DuckLake', s: 'copy-on-write branches', k: 'key' },
      ],
      edges: [['ag', 'mcp'], ['mcp', 'chk'], ['chk', 'fp'], ['fp', 'rc'], ['rc', 'adm'], ['wd', 'adm'], ['adm', 'db'], ['pool', 'db'], ['db', 'log'], ['log', 'prov']],
    },
  },
  {
    id: 'adrp', cat: 'side', org: 'Personal, synthetic data', yrs: '2026', vis: 'forget',
    title: 'AI Data Reliability Platform',
    sum: 'Postgres change data capture into an Apache Iceberg lakehouse and a Qdrant vector index, plus a harness that injects faults and delete requests and records whether the copies stay correct and whether deleted data is actually gone, logically and physically.',
    chips: ['Postgres', 'Debezium', 'Redpanda', 'Spark Structured Streaming', 'Apache Iceberg', 'Trino', 'dbt', 'Qdrant', 'Dagster'],
    bullets: [
      'CDC from Postgres 17 through Debezium and Redpanda into Spark Structured Streaming, landing in Iceberg bronze (change log) and silver (current state) on SeaweedFS with a Lakekeeper catalog, a dbt-on-Trino gold layer, and Dagster for maintenance.',
      'An idempotent silver merge: each batch keeps the highest LSN per key and merges only newer versions, with soft tombstones so a replayed older event cannot bring a deleted row back. Property-tested with Hypothesis on a pure model and on the real Spark MERGE, both mutation-checked.',
      'Right to be forgotten, verified logically and physically: one request reaches every location in a documented data inventory, and Iceberg files are rewritten, snapshots expired and orphans removed before a scan of the remaining files. Along the way, a surviving manifest still held the removed value in its column bounds until manifests were rewritten.',
      'A fault matrix whose expected outcomes were committed before any check existed, scored by a consistent-cut reconciler that pauses writers and compares counts and order-independent checksums with the source.',
      'An incremental embedding worker reads changed entities from bronze and keeps the Qdrant index equal to the source. Gold builds SCD2 dimensions and a double-entry ledger from the change log rather than from dbt snapshots.',
    ],
    mhead: 'Recorded runs on one laptop',
    mets: [
      { v: '0 / 0 / 0', k: 'duplicates, losses, resurrections in 3 runs' },
      { v: '0', k: 'silent corruption under 6 scripted faults' },
      { v: '307 s', k: 'median to logical deletion, 12 requests' },
      { v: '34.4 min', k: 'median to physical removal, 12 requests' },
    ],
    note: 'A personal project on synthetic payments data, run on one laptop with no cloud services. Every figure comes from a recorded run manifest and holds only for the faults tested; counts from two or three runs are not rates. Physical removal time depends on when maintenance ran. Postgres WAL, Qdrant WAL and Spark spill are bounded, not removed.',
    dia: {
      h: 290,
      nodes: [
        { id: 'pg', x: 10, y: 20, l: 'Postgres 17', s: 'source of truth' },
        { id: 'dbz', x: 196, y: 20, l: 'Debezium', s: 'CDC, Avro' },
        { id: 'rp', x: 382, y: 20, l: 'Redpanda', s: '+ schema registry' },
        { id: 'sp', x: 568, y: 20, l: 'Spark Streaming', s: 'LSN-guarded MERGE', k: 'key' },
        { id: 'dag', x: 10, y: 125, l: 'Dagster', s: 'maintenance, forget', k: 'tag' },
        { id: 'gold', x: 196, y: 125, l: 'dbt on Trino', s: 'SCD2, ledger' },
        { id: 'sv', x: 382, y: 125, l: 'Iceberg silver', s: 'current state', k: 'key' },
        { id: 'br', x: 568, y: 125, l: 'Iceberg bronze', s: 'change log', k: 'key' },
        { id: 'fx', x: 10, y: 230, l: 'Faults + forgets', s: 'pre-registered', k: 'tag' },
        { id: 'rec', x: 196, y: 230, l: 'Reconciler', s: 'consistent cut', k: 'tag' },
        { id: 'qd', x: 382, y: 230, l: 'Qdrant', s: 'vector index' },
        { id: 'emb', x: 568, y: 230, l: 'Embedder', s: 'incremental from bronze', k: 'key' },
      ],
      edges: [['pg', 'dbz'], ['dbz', 'rp'], ['rp', 'sp'], ['sp', 'br'], ['br', 'sv'], ['sv', 'gold'], ['br', 'emb'], ['emb', 'qd'], ['fx', 'rec'], ['dag', 'gold']],
    },
  },
  {
    id: 'forgedb', cat: 'side', org: 'Personal', yrs: '2026', vis: 'dag',
    title: 'ForgeDB, a distributed SQL engine',
    sum: 'A distributed analytical query engine built from first principles, to show the planning, shuffles, scheduling and fault tolerance that Spark, Trino and DuckDB normally hide.',
    chips: ['Rust', 'Python', 'Parquet', 'Arrow', 'Docker Compose', 'Kubernetes', 'Prometheus', 'Grafana'],
    bullets: [
      'A coordinator parses SQL into logical and physical plans, applies optimizer rules and schedules a distributed execution DAG across worker nodes.',
      'Operators for scans, filters, projections, aggregations, sorts and hash joins. Broadcast or shuffle hash join, chosen from table statistics and configurable thresholds.',
      'A custom shuffle layer with hash and range partitioning, bounded buffers, backpressure and spill to disk when memory runs short.',
      'Its own catalog of partitions, row counts and min/max stats, for partition pruning, predicate pushdown and projection pruning.',
      'Heartbeats and task state on the coordinator. When a worker dies, its unfinished partitions are reassigned and retried. Failure-injection tests kill workers mid-scan, mid-shuffle and mid-aggregation and check the results stay correct.',
    ],
    mhead: "What I'm measuring",
    mets: [
      { v: 'TPC-H style', k: 'workloads from a few GB to 100+ GB' },
      { v: 'Each optimization', k: 'benchmarked against a baseline' },
      { v: 'Bytes and shuffle', k: 'scanned and moved per query' },
      { v: 'Recovery', k: 'retries and correctness under kills' },
    ],
    note: "Not built to compete with production databases. It's here to show the systems fundamentals underneath them. Benchmarks publish with the repo.",
    dia: {
      h: 290,
      nodes: [
        { id: 'q', x: 10, y: 20, l: 'SQL query' },
        { id: 'co', x: 196, y: 20, l: 'Coordinator', s: 'parse + plan', k: 'key' },
        { id: 'op', x: 382, y: 20, l: 'Optimizer', s: 'pushdown, pruning', k: 'key' },
        { id: 'dag', x: 568, y: 20, l: 'Physical DAG', s: 'stages + tasks' },
        { id: 'cat', x: 10, y: 125, l: 'Catalog', s: 'min/max stats' },
        { id: 'obs', x: 196, y: 125, l: 'Prometheus', s: '+ Grafana', k: 'tag' },
        { id: 'wa', x: 382, y: 125, l: 'Worker A', s: 'scan, filter, agg', k: 'key' },
        { id: 'wb', x: 568, y: 125, l: 'Worker B', s: 'hash join', k: 'key' },
        { id: 'hb', x: 10, y: 230, l: 'Heartbeats', s: 'reassign + retry', k: 'tag' },
        { id: 'pq', x: 196, y: 230, l: 'Parquet', s: 'hash + range parts' },
        { id: 'sh', x: 382, y: 230, l: 'Shuffle', s: 'backpressure, spill', k: 'key' },
        { id: 'res', x: 568, y: 230, l: 'Result', s: 'final aggregate' },
      ],
      edges: [['q', 'co'], ['co', 'op'], ['op', 'dag'], ['cat', 'co'], ['dag', 'wa'], ['dag', 'wb'], ['pq', 'wa'], ['wa', 'sh'], ['sh', 'wb'], ['wb', 'res']],
    },
  },
  {
    id: 'sentinel', cat: 'side', org: 'Personal', yrs: '2026', vis: 'heal',
    title: 'SentinelStream, a self-healing streaming platform',
    sum: 'A streaming lab that detects, diagnoses and recovers from data and infrastructure failures, benchmarked on a ladder from 100M up to 1.2B events an hour.',
    chips: ['Kafka', 'Schema Registry', 'Spark or Flink', 'Iceberg or Delta', 'Prometheus', 'Grafana', 'Kubernetes'],
    bullets: [
      'Load generators drive a multi-broker Kafka cluster with configurable event sizes, key skew, bursts and schema versions.',
      'Spark Structured Streaming or Flink validates, enriches and aggregates into Iceberg or Delta. Bad events go to a replayable dead-letter queue.',
      'A reliability control plane runs detect, diagnose, decide, remediate, validate, escalate. Safe actions go through a bounded policy engine; risky ones, like breaking schema changes, get quarantined and escalated.',
      'A chaos framework injects broker loss, hot partitions, skew, memory pressure, slow sinks, and late or duplicate events, then records time to detect and recover, loss and duplicate rates.',
      'An optional AI reliability agent writes root-cause hypotheses but cannot run infrastructure commands. Every action passes through deterministic policy.',
    ],
    mhead: "What I'm measuring",
    mets: [
      { v: '100M to 1.2B', k: 'events an hour, benchmark ladder' },
      { v: 'p50 / p95 / p99', k: 'end-to-end latency' },
      { v: 'MTTD and MTTR', k: 'per failure scenario' },
      { v: 'Cost per 1B', k: 'events processed' },
    ],
    note: 'These are targets, not results yet. Numbers go up when the benchmarks run.',
    dia: {
      h: 290,
      nodes: [
        { id: 'gen', x: 10, y: 20, l: 'Load generators', s: 'skew, bursts' },
        { id: 'kf', x: 196, y: 20, l: 'Kafka cluster', s: 'partitions + RF', k: 'key' },
        { id: 'sp', x: 382, y: 20, l: 'Stream processor', s: 'stateful aggregates', k: 'key' },
        { id: 'lk', x: 568, y: 20, l: 'Iceberg or Delta', s: 'lakehouse sink' },
        { id: 'sr', x: 196, y: 125, l: 'Schema Registry', s: 'contracts', k: 'tag' },
        { id: 'dlq', x: 382, y: 125, l: 'Dead-letter queue', s: 'replayable' },
        { id: 'pm', x: 568, y: 125, l: 'Prometheus', s: 'lag, p99, retries' },
        { id: 'cx', x: 10, y: 230, l: 'Chaos injector', s: 'kills, skew, schemas', k: 'tag' },
        { id: 'cp', x: 196, y: 230, l: 'Control plane', s: 'detect, diagnose', k: 'key' },
        { id: 'pe', x: 382, y: 230, l: 'Policy engine', s: 'bounded actions', k: 'key' },
        { id: 'ai', x: 568, y: 230, l: 'AI SRE agent', s: 'hypotheses only', k: 'tag' },
      ],
      edges: [['gen', 'kf'], ['kf', 'sp'], ['sp', 'lk'], ['sp', 'dlq'], ['sr', 'kf'], ['pm', 'cp'], ['cp', 'pe'], ['ai', 'pe'], ['pe', 'dlq']],
    },
  },
  {
    id: 'atlas', cat: 'side', org: 'Personal', yrs: '2026', vis: 'versions',
    title: 'Atlas, an AI training and eval data platform',
    sum: 'The data systems behind model development: reproducible, versioned training datasets and an evaluation platform with regression gates. Working name TrainForge.',
    chips: ['Spark or Ray', 'Iceberg or Delta', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Prometheus', 'Grafana'],
    bullets: [
      'Ingests documents, app events, structured records, model outputs and human feedback into an immutable raw lakehouse layer.',
      'Distributed preprocessing: schema validation, normalization, language detection, PII filtering, quality scoring, tokenization, and semantic dedup with MinHash and LSH.',
      'A Dataset Registry versions every dataset with its source snapshots, transforms, filters, tokenizer and schema versions, and lineage, so any experiment can be reproduced exactly.',
      'Point-in-time snapshots, incremental processing, and safe backfills when a quality rule changes.',
      'Eval workers score models, prompts and retrieval strategies on accuracy, similarity, assertions, LLM-as-judge, latency, tokens and cost. Regression gates block promotion below thresholds, and a contamination check catches train and eval overlap.',
    ],
    mhead: 'What it enforces',
    mets: [
      { v: 'MinHash + LSH', k: 'semantic dedup' },
      { v: 'Versioned', k: 'datasets with full lineage' },
      { v: 'Regression gates', k: 'quality, latency, cost' },
      { v: 'Contamination', k: 'train vs eval overlap checks' },
    ],
    note: 'In design and early build. Drift monitoring and freshness metrics land in Prometheus and Grafana.',
    dia: {
      h: 290,
      nodes: [
        { id: 'src', x: 10, y: 20, l: 'Sources', s: 'batch + streaming' },
        { id: 'raw', x: 196, y: 20, l: 'Immutable raw', s: 'lakehouse layer' },
        { id: 'pp', x: 382, y: 20, l: 'Preprocessing', s: 'Spark or Ray', k: 'key' },
        { id: 'reg', x: 568, y: 20, l: 'Dataset Registry', s: 'versions + lineage', k: 'key' },
        { id: 'qg', x: 196, y: 125, l: 'Quality gates', s: 'PII, scoring', k: 'tag' },
        { id: 'dd', x: 382, y: 125, l: 'Semantic dedup', s: 'MinHash + LSH', k: 'tag' },
        { id: 'snap', x: 568, y: 125, l: 'Snapshots', s: 'point-in-time' },
        { id: 'drift', x: 10, y: 230, l: 'Drift monitors', s: 'Prometheus', k: 'tag' },
        { id: 'ct', x: 196, y: 230, l: 'Contamination', s: 'train/eval overlap', k: 'tag' },
        { id: 'ev', x: 382, y: 230, l: 'Eval workers', s: 'judge, latency, cost', k: 'key' },
        { id: 'gate', x: 568, y: 230, l: 'Regression gates', s: 'promote or block', k: 'key' },
      ],
      edges: [['src', 'raw'], ['raw', 'pp'], ['pp', 'reg'], ['reg', 'snap'], ['snap', 'ev'], ['ct', 'ev'], ['ev', 'gate']],
    },
  },
  {
    id: 'sqlagent', cat: 'side', status: 'pend', org: 'Side project, public data', yrs: '2026', vis: 'sql',
    title: 'LLM SQL agent',
    sum: 'Natural-language analytics over a governed warehouse: a text-to-SQL agent grounded in a semantic layer of metric definitions and schema metadata.',
    chips: ['Python', 'LangGraph', 'PostgreSQL', 'TPC-H'],
    bullets: [
      'Grounded in a semantic layer of metric definitions and schema metadata rather than raw tables.',
      'Generated SQL is parsed and validated before execution, runs under read-only credentials with row limits, and self-corrects on errors.',
      'Evaluated on a gold question set against a schema-only baseline: execution accuracy, p95 latency and cost per query.',
    ],
    mhead: 'Eval',
    mets: [
      { v: 'Running', k: 'execution accuracy on a gold set', p: true },
      { v: 'Running', k: 'schema-only baseline', p: true },
      { v: 'Running', k: 'p95 latency', p: true },
      { v: 'Running', k: 'cost per query', p: true },
    ],
    note: 'Built on public TPC-H data and separate from my Microsoft work. Eval results go up here once the run finishes.',
    dia: {
      h: 290,
      nodes: [
        { id: 'q', x: 10, y: 20, l: 'Question', s: 'plain English' },
        { id: 'sem', x: 196, y: 20, l: 'Semantic layer', s: 'metrics + schema', k: 'key' },
        { id: 'gen', x: 382, y: 20, l: 'SQL generation', s: 'LangGraph agent', k: 'key' },
        { id: 'val', x: 568, y: 20, l: 'Validator', s: 'parse + allowlist', k: 'key' },
        { id: 'fix', x: 382, y: 125, l: 'Self-correct', s: 'on SQL errors' },
        { id: 'db', x: 568, y: 125, l: 'PostgreSQL', s: 'TPC-H, read-only' },
        { id: 'gold', x: 196, y: 230, l: 'Gold-set eval', s: 'vs baseline', k: 'tag' },
        { id: 'log', x: 382, y: 230, l: 'Query log', s: 'feeds the eval set', k: 'tag' },
        { id: 'ans', x: 568, y: 230, l: 'Answer + SQL', s: 'shown to the user' },
      ],
      edges: [['q', 'sem'], ['sem', 'gen'], ['gen', 'val'], ['val', 'db'], ['db', 'fix'], ['fix', 'gen'], ['db', 'ans']],
    },
  },
  {
    id: 'heart', cat: 'side', org: 'Side project', yrs: 'GitHub', vis: 'shap',
    repo: 'https://github.com/RevanthPosina/Heart-Attack-Risk-Prediction',
    title: 'Heart attack risk scoring',
    sum: 'Explainable risk scoring on about 430K CDC BRFSS 2023 survey responses, deployed as a low-latency SageMaker endpoint.',
    chips: ['XGBoost', 'Optuna', 'SHAP', 'SageMaker', 'CloudWatch', 'MLflow', 'Airflow', 'Streamlit'],
    bullets: [
      "Mapped 350+ survey fields through the BRFSS codebook down to 33 curated features, with log and z-score transforms on skewed fields and statistical ranking using Cohen's d, t-tests and chi-squared.",
      'Compared XGBoost against LightGBM and logistic regression, tuned it with 150+ Optuna trials, and used SHAP for global and per-person explanations.',
      'Checked robustness by retraining without the dominant prior-diagnosis feature.',
      'Deployed on a SageMaker endpoint at under 150 ms p95, with CloudWatch latency alarms, MLflow tracking and an Airflow DAG from data prep through deploy.',
      'A Streamlit app for CSV upload, live scoring and SHAP views.',
    ],
    mets: [
      { v: '~430K', k: 'survey responses' },
      { v: '33', k: 'curated features' },
      { v: 'under 150 ms', k: 'p95 inference latency' },
      { v: '150+', k: 'Optuna trials' },
    ],
    dia: {
      h: 186,
      nodes: [
        { id: 'd', x: 10, y: 20, l: 'CDC BRFSS 2023', s: '~430K responses' },
        { id: 'f', x: 196, y: 20, l: 'Feature pipeline', s: '33 features' },
        { id: 'x', x: 382, y: 20, l: 'XGBoost', s: 'Optuna tuned', k: 'key' },
        { id: 'sm', x: 568, y: 20, l: 'SageMaker', s: 'under 150 ms p95', k: 'key' },
        { id: 'af', x: 10, y: 125, l: 'Airflow', s: 'prep to deploy', k: 'tag' },
        { id: 'ml', x: 196, y: 125, l: 'MLflow', s: 'tracking', k: 'tag' },
        { id: 'sh', x: 382, y: 125, l: 'SHAP', s: 'explanations' },
        { id: 'st', x: 568, y: 125, l: 'Streamlit app', s: 'CSV scoring' },
      ],
      edges: [['d', 'f'], ['f', 'x'], ['x', 'sm'], ['x', 'sh'], ['sm', 'st']],
    },
  },
  {
    id: 'spoti', cat: 'side', org: 'Side project', yrs: 'GitHub', vis: 'eq',
    repo: 'https://github.com/RevanthPosina/SpotiFlow-Data-Stream',
    title: 'SpotiFlow, a serverless music pipeline',
    sum: 'A serverless AWS pipeline that pulls Spotify track, artist and album data every day and makes it queryable in Athena.',
    chips: ['Python', 'AWS Lambda', 'S3', 'Glue', 'Athena', 'CloudWatch'],
    bullets: [
      'A Lambda function pulls from the Spotify API on a daily CloudWatch Events schedule and lands raw data in S3.',
      'S3 events trigger a transform Lambda that cleans the data, checks the schema and writes to a transformed zone.',
      'Glue Data Catalog for schemas and Athena for SQL. Snowflake via Snowpipe is the planned next step.',
    ],
    mets: [
      { v: 'Daily', k: 'scheduled extract' },
      { v: '2', k: 'Lambda stages' },
      { v: 'Serverless', k: 'nothing to keep running' },
    ],
    dia: {
      h: 186,
      nodes: [
        { id: 'api', x: 10, y: 20, l: 'Spotify API' },
        { id: 'lx', x: 196, y: 20, l: 'Lambda extract', s: 'daily schedule', k: 'key' },
        { id: 'raw', x: 382, y: 20, l: 'S3 raw zone' },
        { id: 'lt', x: 568, y: 20, l: 'Lambda transform', s: 'schema checks', k: 'key' },
        { id: 'ath', x: 196, y: 125, l: 'Athena', s: 'SQL', k: 'key' },
        { id: 'glue', x: 382, y: 125, l: 'Glue catalog' },
        { id: 'tr', x: 568, y: 125, l: 'S3 transformed' },
      ],
      edges: [['api', 'lx'], ['lx', 'raw'], ['raw', 'lt'], ['lt', 'tr'], ['tr', 'glue'], ['glue', 'ath']],
    },
  },
  {
    id: 'trail', cat: 'side', org: 'Side project', yrs: 'GitHub', vis: 'trail',
    repo: 'https://github.com/RevanthPosina/trailrun-advisor-agent',
    title: 'TrailRun advisor agent',
    sum: 'An n8n agent that checks my calendar, the weather and air quality, then emails me the best trail for the day, or a reason to skip it.',
    chips: ['n8n', 'OpenAI', 'Google Calendar', 'Google Sheets', 'Gmail', 'AirNow'],
    bullets: [
      'Five tools: checkCalendar, getWeather, getAirQuality (AirNow PM2.5), getHikeList from a trail sheet, and sendEmail.',
      'Recommends a trail only when the weather and air quality are good, and picks one that fits my time, elevation and shade preferences.',
      'Otherwise it sends a heads-up with the reason, so every decision is explainable.',
    ],
    mets: [
      { v: '5', k: 'agent tools' },
      { v: 'PM2.5', k: 'air quality gate' },
    ],
    dia: {
      h: 290,
      nodes: [
        { id: 'cal', x: 10, y: 20, l: 'Calendar', s: 'run planned?' },
        { id: 'sheet', x: 382, y: 20, l: 'Trail sheet', s: 'elevation, shade' },
        { id: 'wx', x: 10, y: 125, l: 'Weather API' },
        { id: 'ag', x: 382, y: 125, l: 'n8n agent', s: 'OpenAI', k: 'key' },
        { id: 'mail', x: 568, y: 125, l: 'Gmail', s: 'pick or skip' },
        { id: 'aq', x: 10, y: 230, l: 'AirNow AQI', s: 'PM2.5' },
      ],
      edges: [['cal', 'ag'], ['sheet', 'ag'], ['wx', 'ag'], ['aq', 'ag'], ['ag', 'mail']],
    },
  },
  {
    id: 'rex', cat: 'side', org: 'Game project', yrs: 'GitHub', vis: 'rex',
    repo: 'https://github.com/RevanthPosina/Rex_Runner',
    title: 'Rex_Runner, a game in Unity',
    sum: 'Run Rex, a ninja, through an open 3D world, collecting coins, grabbing speed boosts and fighting giant monsters. Built in Unity and C#.',
    chips: ['Unity', 'C#', 'Animator', 'TextMeshPro'],
    bullets: [
      'Steer Rex around an open world and jump with Space. Spinning coins add to a live score while a follow camera eases in behind him.',
      'Speed boosts double his speed for three seconds and leave a trail. A mutant giant chases him, and getting caught knocks Rex down and costs 5 points.',
      'Sound and particle effects on every pickup and hit, a fade-in welcome screen, and a TextMeshPro score display. A gameplay video is in the repo README.',
    ],
  },
];

export const experience = [
  {
    k: 'msft', co: 'Microsoft', m: 'MS', meta: 'Data Engineer (AI/ML), Seattle area', when: 'Jan 2025 – Present', yr: '2025', current: true,
    sum: 'Building the data foundation, forecasting and LLM agents behind finance analytics.',
  },
  {
    k: 'p990', co: 'Project990', m: 'P9', meta: 'ML Data Engineer', when: '2025', yr: '2025',
    sum: 'Turned IRS Form 990 filings into clean datasets and a search service for analysts.',
  },
  {
    k: 'bloom', co: 'Bloom Insurance', m: 'BI', meta: 'Healthcare insurance', when: 'May 2023 – Dec 2024', yr: '2023',
    sum: 'Worked on improving Partner Provider plans and claims data in legacy SSIS to AWS migrations.',
  },
  {
    k: 'entain', co: 'Ivy Comptech (Entain)', short: 'Ivy Comptech', m: 'EN', meta: 'Gaming', when: 'Jun 2020 – Jul 2022', yr: '2020',
    sum: 'Built real-time and batch data pipelines for gaming analytics and set data contracts across producer teams.',
  },
];

export const education = [
  { logo: 'IU', title: 'MS, Data Science', where: 'Indiana University Bloomington', when: '2022 – 2024' },
  { logo: 'KL', title: 'BTech, Electronics and Communication', where: 'KL University', when: '2016 – 2020' },
  { icon: 'i-cloud', title: 'Databricks Data Engineer Professional', where: 'AWS Solutions Architect Associate', when: 'certifications' },
  {
    icon: 'i-book', title: 'Fusion of visible and infrared images', where: 'Springer', when: 'publication',
    href: 'https://www.springerprofessional.de/en/fusion-of-visible-and-infrared-images-via-saliency-detection-usi/18540690',
  },
];

export const stack = [
  { t: 'Languages', i: 'i-code', d: 'What I write every day, plus what I use for systems and game work.', tools: ['Python', 'SQL', 'PySpark', 'T-SQL', 'Rust', 'C#', 'Java'] },
  { t: 'Processing and streaming', i: 'i-activity', d: 'Batch and streaming engines.', tools: ['Spark', 'Databricks', 'Kafka', 'Kinesis', 'Spark Structured Streaming'] },
  { t: 'Lakehouse and storage', i: 'i-layers', d: 'Open table formats, columnar files and object storage.', tools: ['Microsoft Fabric', 'Delta Lake', 'Iceberg', 'S3', 'Parquet', 'Arrow'] },
  { t: 'Warehousing and modeling', i: 'i-db', d: 'Where curated data lives, and how it is shaped.', tools: ['Snowflake', 'Redshift', 'dbt', 'Kimball + SCD2', 'Glue Catalog', 'PostgreSQL', 'Athena'] },
  { t: 'Orchestration and quality', i: 'i-flow', d: 'Scheduling, data contracts, tests and CI/CD.', tools: ['Airflow', 'Great Expectations', 'Avro + Schema Registry', 'Azure DevOps CI/CD', 'Step Functions', 'n8n'] },
  { t: 'ML and MLOps', i: 'i-flask', d: 'Models from features to monitored endpoints.', tools: ['Forecasting', 'Anomaly detection', 'XGBoost', 'scikit-learn', 'SHAP', 'Optuna', 'MLflow', 'SageMaker'] },
  { t: 'GenAI and agents', i: 'i-spark', d: 'Retrieval and agents, with guardrails and evals.', tools: ['MCP', 'LangChain', 'LangGraph', 'RAG', 'FAISS', 'FastAPI', 'OpenAI API', 'LLM evals'] },
  { t: 'Infra and observability', i: 'i-gauge', d: 'Running it, and knowing when it breaks.', tools: ['Terraform', 'Docker', 'Kubernetes', 'AWS Lambda', 'CloudWatch', 'Prometheus', 'Grafana'] },
];

export const legend = [
  ['src', 'Event streams', '#3F3F46'],
  ['bronze', 'Bronze', '#C98B5A'],
  ['silver', 'Silver', '#C6CBD4'],
  ['gold', 'Gold', '#E2B84E'],
  ['layer', 'Semantic layer', '#8F91F8'],
  ['chart', 'Forecast', '#5B5BD6'],
  ['anom', 'Anomaly', '#E5484D'],
  ['bot', 'KPI agent', '#A1A1AA'],
];

// Essays shown on the Writes rack, newest first. Posted to Medium (@revp and Towards Data Engineering).
// bg and ink are the silk colors of each hand scroll, art is a key into writeArt.
export const writes = [
  {
    n: 'W06', title: 'Thinking About Thinking: What Karpathy × Dwarkesh Made Me Realize About AI and Learning', short: 'Thinking About Thinking', pub: 'Medium', date: 'Oct 2025', yr: '2025',
    sum: 'Notes from the Karpathy and Dwarkesh Patel conversation, and why cognition, human or machine, is about more than feeding in data.',
    tags: ['ai', 'llms', 'learning'], url: 'https://medium.com/@revp/thinking-about-thinking-what-karpathyxdwarkesh-made-me-realize-about-ai-and-learning-d11e95400877', bg: '#2E2C6E', ink: '#EDEBFF', art: 'loops',
  },
  {
    n: 'W05', title: 'Ground Control to Major Pipelines: ETL Pipelines Take Flight', short: 'Ground Control to Major Pipelines', pub: 'Towards Data Engineering', date: 'May 2025', yr: '2025',
    sum: 'ETL orchestration as the step after warehouse design: Airflow, data quality checks, CI/CD and security.',
    tags: ['orchestration', 'airflow', 'etl'], url: 'https://medium.com/towards-data-engineering/ground-control-to-major-pipelines-etl-pipelines-take-flight-7da764983af3', bg: '#CFE3F2', ink: '#0B2540', art: 'flight',
  },
  {
    n: 'W04', title: 'From Data Chaos to Business Clarity: The Evolution of Modern Data Warehousing', short: 'From Data Chaos to Business Clarity', pub: 'Towards Data Engineering', date: 'Mar 2025', yr: '2025',
    sum: 'From messy spreadsheet reports to the data warehouse, and how OLTP and OLAP systems split the work.',
    tags: ['data warehousing', 'oltp vs olap'], url: 'https://medium.com/towards-data-engineering/from-data-chaos-to-business-clarity-the-evolution-of-modern-data-warehousing-361b0ba0126d', bg: '#E9DFC9', ink: '#2A2116', art: 'stack',
  },
  {
    n: 'W03', title: 'From Blueprints to Business Intelligence: Mastering Kimball Data Model Design', short: 'From Blueprints to BI', pub: 'Towards Data Engineering', date: 'Feb 2025', yr: '2025',
    sum: 'Kimball dimensional modeling for warehouses that scale: facts, dimensions and the star schema.',
    tags: ['kimball', 'data modeling', 'star schema'], url: 'https://medium.com/towards-data-engineering/from-blueprints-to-business-intelligence-mastering-kimball-data-model-design-3e318d645051', bg: '#1F3D33', ink: '#E6F2EA', art: 'star',
  },
  {
    n: 'W02', title: 'Modeling, But This Time Not on Runways', short: 'Modeling, Not on Runways', pub: 'Towards Data Engineering', date: 'Dec 2024', yr: '2024',
    sum: 'A beginner guide and interview refresher on relational, dimensional and graph data models.',
    tags: ['data modeling', 'interviews'], url: 'https://medium.com/towards-data-engineering/modeling-but-this-time-not-on-runways-51a881bb17d7', bg: '#F2C4C0', ink: '#3A1010', art: 'runway',
  },
  {
    n: 'W01', title: 'Unlocking the Power of Statistics in Data Analysis', short: 'The Power of Statistics', pub: 'Medium', date: 'Nov 2024', yr: '2024',
    sum: 'Descriptive and inferential statistics, hypothesis tests, confidence intervals and the normal distribution, worked in Python.',
    tags: ['statistics', 'python'], url: 'https://medium.com/@revp/unlocking-the-power-of-statistics-in-data-analysis-e25e50f5b3e2', bg: '#1E1E22', ink: '#F2C94C', art: 'curve',
  },
];

// Line art printed on each open scroll. Drawn with currentColor, so the scroll's paper ink colors it.
export const writeArt = {
  loops: '<svg viewBox="0 0 100 80" aria-hidden="true"><circle cx="50" cy="40" r="30"/><circle cx="50" cy="40" r="20"/><circle cx="58" cy="36" r="9"/><circle cx="58" cy="36" r="2" fill="currentColor"/></svg>',
  flight: '<svg viewBox="0 0 100 80" aria-hidden="true"><path d="M10 66 C 30 66, 40 20, 88 16" stroke-dasharray="3 4"/><circle cx="10" cy="66" r="4"/><circle cx="36" cy="50" r="3"/><circle cx="56" cy="28" r="3"/><path d="M84 10l8 6-9 4z" fill="currentColor"/><path d="M4 74h40"/></svg>',
  stack: '<svg viewBox="0 0 100 80" aria-hidden="true"><rect x="22" y="12" width="56" height="12" rx="2"/><rect x="16" y="30" width="68" height="12" rx="2"/><rect x="10" y="48" width="80" height="12" rx="2"/><path d="M10 70h80"/><path d="M30 18h8M30 36h16M30 54h24"/></svg>',
  star: '<svg viewBox="0 0 100 80" aria-hidden="true"><rect x="38" y="30" width="24" height="20" rx="2" fill="currentColor" fill-opacity=".18"/><rect x="8" y="6" width="22" height="14" rx="2"/><rect x="70" y="6" width="22" height="14" rx="2"/><rect x="8" y="60" width="22" height="14" rx="2"/><rect x="70" y="60" width="22" height="14" rx="2"/><path d="M30 18l8 12M70 18l-8 12M30 62l8-12M70 62l-8-12"/></svg>',
  runway: '<svg viewBox="0 0 100 80" aria-hidden="true"><path d="M38 6L22 76M62 6l16 70"/><path d="M50 12v6M50 26v8M50 42v10M50 60v12" stroke-width="2.4"/><rect x="6" y="20" width="18" height="12" rx="2"/><rect x="76" y="40" width="18" height="12" rx="2"/><path d="M24 26h8M68 46h8"/></svg>',
  curve: '<svg viewBox="0 0 100 80" aria-hidden="true"><path d="M6 70h88"/><path d="M8 68 C 30 68, 36 12, 50 12 S 70 68, 92 68"/><path d="M50 12v58" stroke-dasharray="2 3"/><path d="M34 70v-24M66 70v-24" stroke-dasharray="2 3"/></svg>',
};
