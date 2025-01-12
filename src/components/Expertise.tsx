import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGears, faBrain } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

const dataEngineering = [
    "MySQL",
    "MS SQL Server",
    "Oracle",
    "PostgreSQL",
    "MongoDB",
    "SSIS",
    "SSMS",
    "SSRS",
    "PySpark",
    "SparkSQL",
    "Snowflake",
    "Kafka"
];

const devOpsAndTools = [
    "Git",
    "Bitbucket",
    "SourceTree",
    "Jira",
    "Airflow",
    "Jenkins",
    "JSON",
    "AWS S3",
    "AWS IAM",
    "AWS Redshift",
    "AWS Glue"
];

const analyticsAndAI = [
    "Python",
    "SQL",
    "R",
    "Tableau",
    "PowerBI",
    "Looker",
    "Excel",
    "ML"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <h1>Expertise</h1>
        <div className="skills-grid">
            <div className="skill">
                <FontAwesomeIcon icon={faDatabase} />
                <h3>Data Engineering & ETL</h3>
                <p>Experienced in building and optimizing data pipelines, implementing ETL processes, 
                   and managing complex database systems. Proficient in both relational and NoSQL databases 
                   with strong SQL expertise.</p>
                <div className="tech-stack">
                    <span>Tech stack:</span>
                    {dataEngineering.map((tech, index) => (
                        <div key={index} className="tech-tag">{tech}</div>
                    ))}
                </div>
            </div>

            <div className="skill">
                <FontAwesomeIcon icon={faGears} />
                <h3>DevOps & Cloud Infrastructure</h3>
                <p>Skilled in implementing CI/CD pipelines, version control systems, and cloud infrastructure 
                   management. Strong experience with AWS services and development tools.</p>
                <div className="tech-stack">
                    <span>Tech stack:</span>
                    {devOpsAndTools.map((tech, index) => (
                        <div key={index} className="tech-tag">{tech}</div>
                    ))}
                </div>
            </div>

            <div className="skill">
                <FontAwesomeIcon icon={faBrain} />
                <h3>Analytics & Business Intelligence</h3>
                <p>Proficient in data visualization, business intelligence tools, and analytics platforms. 
                   Experience in transforming raw data into actionable insights using modern BI tools.</p>
                <div className="tech-stack">
                    <span>Tech stack:</span>
                    {analyticsAndAI.map((tech, index) => (
                        <div key={index} className="tech-tag">{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;