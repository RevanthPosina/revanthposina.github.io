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
          <p>Hello! I'm Rev (Revanth Posina), a data professional with a Master's in Data Science from Indiana University Bloomington. My journey in the data world is driven by a singular passion: transforming complex information into compelling stories that drive real business value.</p>
<p>As a data engineer, I specialize in designing cloud-native data architectures and implementing Delta Lake solutions that bring reliability and performance to large-scale data operations. From optimizing Spark workloads to modernizing legacy systems into scalable cloud architectures, I focus on creating solutions that make data insights accessible to everyone. Through workflow optimization and automated quality frameworks, I build ML-ready data platforms that enable both analysts and data scientists to accelerate their insights while empowering business teams to make data-driven decisions.</p>
<p>When I'm not working with data, you'll find me exploring space exploration, emerging technologies, comics, and anime – areas that fuel my imagination and drive for innovation. Let's build something amazing together!</p>
        </div>
      </div>
    </div>
  );
}

export default About;