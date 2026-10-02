// All site copy lives here. Components only render it.

export const profile = {
  name: 'Revanth Posina',
  title: 'Data Engineer (AI/ML)',
  employer: 'Microsoft',
  email: 'posinarevanth@gmail.com',
  url: 'https://revanthposina.github.io',
  description:
    'Data Engineer (AI/ML) at Microsoft. I build the pipelines, forecasts and LLM agents that power finance analytics.',
  links: {
    github: 'https://github.com/RevanthPosina',
    linkedin: 'https://www.linkedin.com/in/revanth-p/',
    medium: 'https://medium.com/@revp',
    kaggle: 'https://www.kaggle.com/revzkaggle',
  },
  roles: [
    'Data Engineer (AI/ML) at Microsoft',
    'Forecasting and anomaly detection',
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
    id: 'p990', cat: 'work', org: 'Project990, contract', yrs: '2025', vis: 'vectors',
    title: 'Form 990 document intelligence',
    sum: 'Turned IRS Form 990 filings into validated datasets and a search service analysts can query in plain English.',
  },
  {
    id: 'bloom', cat: 'work', org: 'Bloom Insurance', yrs: '2023 to 2024', vis: 'stream',
    title: 'Claims migration and near-real-time ingestion',
    sum: 'Moved claims, member and provider analytics onto a streaming cloud platform, then kept it reliable.',
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
    title: 'Rex_Runner, a Unity platformer',
    sum: 'A 3D open-world platformer scene inspired by the classics, built in Unity and C#.',
    chips: ['Unity', 'C#', 'TextMeshPro', 'Animation'],
    bullets: [
      'A 3D scene that takes the classic platformer idea to an open-world scale.',
      'Player interactions and character animations, with TextMeshPro for in-game text.',
      'A gameplay video lives in the repo README. The goal is a fully interactive open world with multiple levels.',
    ],
  },
];

export const experience = [
  {
    k: 'msft', co: 'Microsoft', m: 'MS', meta: 'Data Engineer (AI/ML), full-time, Seattle area', when: 'Jan 2025 – Present', yr: '2025', current: true,
    sum: 'Building the data foundation, forecasting and LLM agents behind finance analytics.',
  },
  {
    k: 'p990', co: 'Project990', m: 'P9', meta: 'ML Data Engineer, contract', when: '2025', yr: '2025',
    sum: 'Turned IRS Form 990 filings into clean datasets and a search service for analysts.',
  },
  {
    k: 'bloom', co: 'Bloom Insurance', m: 'BI', meta: 'Full-time, healthcare insurance', when: 'May 2023 – Dec 2024', yr: '2023',
    ladder: [['Data Engineer I', 'Jul 2024 – Dec 2024'], ['Data Engineer Intern', 'May 2023 – Dec 2023']],
    sum: 'Migrated claims analytics to a streaming cloud platform and kept its data trustworthy.',
  },
  {
    k: 'entain', co: 'Ivy Comptech (Entain)', short: 'Ivy Comptech', m: 'EN', meta: 'Full-time, gaming', when: 'Jun 2020 – Jul 2022', yr: '2020',
    ladder: [['Data Engineer, Ops', 'Feb 2021 – Jul 2022'], ['Trainee Software Engineer, Data Ops', 'Jun 2020 – Feb 2021']],
    sum: 'Built real-time and batch data pipelines for gaming analytics and set data contracts across producer teams.',
  },
];

export const education = [
  { logo: 'IU', title: 'MS, Data Science', where: 'Indiana University Bloomington', when: '2022 – 2024' },
  { logo: 'KL', title: 'BTech, Electronics and Communication', where: 'KL University', when: '2016 – 2020' },
  { icon: 'i-cloud', title: 'AWS Certified Solutions Architect', where: 'Associate', when: 'certification' },
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
