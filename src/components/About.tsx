import React from 'react';
import '../assets/styles/About.scss';
import profileImage from '../assets/images/Portfolio_Pic.jpg';


function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-image">
          <img
            src={profileImage}
            alt="About Me"
            className="about-photo"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">
            ABOUT
            <span className="underline"></span>
          </h2>
          <p>I'm a Data Engineer focused on ML and AI, currently building forecasting and finance analytics pipelines at Microsoft. My work sits at the intersection of large-scale data systems and applied machine learning, turning messy operational data into reliable datasets, metrics, and decision-ready models.</p>
<p>I've shipped end-to-end systems across finance, healthcare, and gaming telemetry, using Spark-based ETL, lakehouse modeling, orchestration, and LLM-powered retrieval workflows. I care deeply about performance, reliability, and observability, especially in environments where business decisions depend on data quality.</p>
<p>I enjoy working closely with stakeholders to translate requirements into scalable architectures and build systems that finance and analytics teams trust in production.</p>
<p><strong>Core strengths:</strong> Python, Spark, SQL, lakehouse modeling, forecasting, predictive analytics, anomaly detection, MLOps, CI/CD, and GenAI systems (RAG, embeddings, vector search, and LLM tool orchestration).</p>
        </div>
      </div>
    </div>
  );
}

export default About;