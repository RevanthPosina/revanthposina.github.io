import React, { useState } from 'react';
import '../assets/styles/About.scss';


function About() {
  const [activeView, setActiveView] = useState('story');

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">ABOUT</h2>
          
          {/* Toggle buttons like reference */}
          <div className="view-toggle">
            <button 
              className={activeView === 'story' ? 'active' : ''}
              onClick={() => setActiveView('story')}
            >
              Myself
            </button>
            <button 
              className={activeView === 'tldr' ? 'active' : ''}
              onClick={() => setActiveView('tldr')}
            >
              TL;DR
            </button>
          </div>

          {/* Myself View */}
          {activeView === 'story' && (
            <div className="story-view">
              <p>I'm a Data Engineer focused on ML and AI, currently building production-grade forecasting and finance analytics pipelines at Microsoft.</p>
              <p>My work sits at the intersection of large-scale data systems and applied machine learning, turning messy operational data into reliable datasets, metrics, and decision-ready models.</p>
              <p>I've shipped end-to-end systems across finance, healthcare, and gaming telemetry, using Spark-based ETL, lakehouse modeling, orchestration, and LLM-powered retrieval workflows.</p>
              <p>I care deeply about performance, reliability, and observability, especially in environments where business decisions depend on data quality.</p>
              <p>I enjoy working closely with stakeholders to translate requirements into scalable architectures and build systems that finance and analytics teams trust in production.</p>
              <p><strong>Core strengths:</strong> Python, Spark, SQL, lakehouse modeling, forecasting, predictive analytics, anomaly detection, MLOps, CI/CD, and GenAI systems (RAG, embeddings, vector search, and LLM tool orchestration).</p>
            </div>
          )}

          {/* TL;DR View */}
          {activeView === 'tldr' && (
            <div className="tldr-view">
              <p><span className="strikethrough">I'm a Data Engineer focused on ML and AI, currently building production-grade forecasting and finance analytics pipelines at Microsoft.</span></p>
              <p>My work sits at the intersection of large-scale data systems and applied machine learning, turning messy operational data into reliable datasets, metrics, and decision-ready models.</p>
              <p><span className="strikethrough">I've shipped end-to-end systems across finance, healthcare, and gaming telemetry, using Spark-based ETL, lakehouse modeling, orchestration, and LLM-powered retrieval workflows.</span></p>
              <p>I care deeply about performance, reliability, and observability, especially in environments where business decisions depend on data quality.</p>
              <p><span className="strikethrough">I enjoy working closely with stakeholders to translate requirements into scalable architectures and build systems that finance and analytics teams trust in production.</span></p>
              <p><strong>Core strengths:</strong> Python, Spark, SQL, lakehouse modeling, forecasting, predictive analytics, anomaly detection, MLOps, CI/CD, and GenAI systems (RAG, embeddings, vector search, and LLM tool orchestration).</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;