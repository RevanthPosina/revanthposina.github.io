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
          <p>Hi, I'm Rev, an ML Data engineer with a Master's in Data Science from Indiana University. I'm passionate about building scalable, maintainable data and machine learning pipelines that help teams turn raw data into real-world impact.</p>
<p>My experience spans on working with cloud-native architectures, implementing ETL solutions, and optimizing Spark and ML/AI workflows for analytics and production. I enjoy solving data challenges—whether it's modernizing legacy systems, automating data quality/BI reports, or making ML-ready data accessible for teams across the business.</p>
<p>I believe the best data platforms are those that empower both technical and non-technical users to make better decisions. My work focuses on bridging that gap, enabling analysts, data scientists, and business leaders to move faster and with more confidence.</p>
<p>Outside of work, I'm curious about emerging tech, mythology, anime, F1, and cricket—interests that keep me engaged. If you're interested in building smarter data or ML/AI solutions, let's connect!</p>
        </div>
      </div>
    </div>
  );
}

export default About;