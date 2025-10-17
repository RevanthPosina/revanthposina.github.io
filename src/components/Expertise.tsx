import React from 'react';
import '../assets/styles/Expertise.scss';
import { 
  Storage as StorageIcon,
  CloudQueue as CloudIcon,
  QueryStats as AnalyticsIcon,
  DataObject as DataIcon,
  Architecture as ArchitectureIcon,
  AutoGraph as AutomationIcon
} from '@mui/icons-material';

const expertiseData = [
  {
    icon: <StorageIcon />,
    title: "Real-Time Data Engineering",
    description: "Designing and operating low-latency ingestion and ETL pipelines with strong SLAs and observability.",
    techStack: [
      "Kafka", "Kinesis", "PySpark", "SparkSQL", "Databricks", "Snowflake", "AWS Glue"
    ]
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Architecture",
    description: "Building scalable, secure, and cost-efficient data platforms on AWS and Azure.",
    techStack: [
      "S3", "Redshift", "Lambda", "SageMaker", "CloudWatch", "Azure Data Factory", "Synapse", "Terraform"
    ]
  },
  {
    icon: <AnalyticsIcon />,
    title: "Machine Learning & LLMs",
    description: "Developing predictive and generative models using classical ML and modern transformer-based methods.",
    techStack: [
      "Python", "Scikit-learn", "XGBoost", "MLflow", "Hugging Face", "LangChain", "Prompt Engineering", "SHAP"
    ]
  },
  {
    icon: <DataIcon />,
    title: "Big Data & Lakehouse",
    description: "Processing and analyzing petabyte-scale datasets with open table formats and distributed compute.",
    techStack: [
      "Spark", "Hive", "Delta Lake", "Apache Iceberg", "EMR", "Data Lakes"
    ]
  },
  {
    icon: <ArchitectureIcon />,
    title: "Data Architecture",
    description: "Designing robust data models, warehouses, and governance frameworks for reliability and evolution.",
    techStack: [
      "Data Modeling", "Dimensional Modeling", "Data Warehousing", "Data Quality", "Data Governance"
    ]
  },
  {
    icon: <AutomationIcon />,
    title: "MLOps & Automation",
    description: "Operationalizing models and data workflows with CI/CD, lineage tracking, and automated retraining.",
    techStack: [
      "Airflow", "Jenkins", "Git", "CI/CD", "MLflow", "FastAPI", "DataOps"
    ]
  }
];

function Expertise() {
  return (
    <section className="expertise-container" id="expertise">
      <div className="expertise-content">
        <h2 className="section-title">
          Expertise
          <div className="title-underline"></div>
        </h2>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div className="expertise-card" key={index}>
              <div className="card-icon">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="tech-stack">
                <span>Tech Stack:</span>
                <div className="tech-tags">
                  {item.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-tag">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;