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
    title: "Data Engineering",
    description: "Building robust data pipelines and ETL processes using modern tools and technologies.",
    techStack: [
      "MySQL", "MS SQL Server", "Oracle", "PostgreSQL", "MongoDB",
      "SSIS", "SSMS", "SSRS", "PySpark", "SparkSQL", "Snowflake", "Kafka"
    ]
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Architecture",
    description: "Designing and implementing scalable cloud-native solutions on AWS and Azure.",
    techStack: [
      "AWS S3", "AWS IAM", "AWS Redshift", "AWS Glue", "Azure Data Factory",
      "Azure Synapse", "Docker", "Kubernetes", "Terraform"
    ]
  },
  {
    icon: <AnalyticsIcon />,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights using advanced analytics techniques.",
    techStack: [
      "Python", "R", "SQL", "Tableau", "PowerBI", "Looker",
      "Excel", "Statistical Analysis", "Data Visualization"
    ]
  },
  {
    icon: <DataIcon />,
    title: "Big Data",
    description: "Processing and analyzing large-scale datasets using distributed computing frameworks.",
    techStack: [
      "Hadoop", "Spark", "Hive", "PySpark", "Databricks",
      "Delta Lake", "Data Lakes", "EMR"
    ]
  },
  {
    icon: <ArchitectureIcon />,
    title: "Data Architecture",
    description: "Designing efficient data models and warehouses for optimal performance.",
    techStack: [
      "Data Modeling", "ETL Design", "Data Warehousing", "Schema Design",
      "Dimensional Modeling", "Data Lakes", "Data Governance"
    ]
  },
  {
    icon: <AutomationIcon />,
    title: "Automation",
    description: "Creating automated workflows and processes for data operations and ML pipelines.",
    techStack: [
      "Airflow", "Jenkins", "Git", "CI/CD", "Python Scripting",
      "Shell Scripting", "MLOps", "DataOps"
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