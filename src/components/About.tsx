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
          <p>
            Hello! I'm Rev (Revanth Posina), a data professional with a Master's in Data Science from Indiana University Bloomington. I have a passion for transforming complex data into actionable insights that drive business growth and inform strategic decision-making. With expertise spanning data analytics, business intelligence, and data engineering, I excel at turning raw data into meaningful narratives that make an impact.
          </p>
          <p>
            Throughout my career, I've designed scalable ETL pipelines, processed large datasets, and optimized data infrastructures to enhance accessibility and performance. Proficient in Python and SQL, I've developed efficient workflows, crafted algorithms, and written optimized queries for seamless data integration. I've also automated repetitive data tasks, saving time and improving efficiency. Using tools like SSIS, SSRS, Tableau, Excel and Power BI, I create visualizations, reports and dashboards that empower organizations to make data-driven decisions.
          </p>
          <p>
            This portfolio reflects my journey and showcases the work that fuels my passion for data. Outside of work, I enjoy delving into topics like space, technology, comics, and anime—always curious to explore and learn something new!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;