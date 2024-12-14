import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Database Engineer 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Database Engineer I</h3>
            <h4 className="vertical-timeline-element-subtitle">Bloom Insurance • Bloomington, Indiana</h4>
            <p>
              • Structured health plan data from multiple client sources<br />
              • Optimized large-scale data processing with Python, Spark, and AWS S3, boosting retrieval speed and efficiency.<br />
              • Resolved critical production issues within SLAs, minimizing downtime and ensuring continuous data flow.<br />
              • Analyzed, preprocessed, and transformed client data from different sources for seamless integration into internal
              databases, ensuring accuracy and meeting 100% operational and business requirements.
            </p>
          </VerticalTimelineElement>

          {/* Data Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2023 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bloom Insurance • Bloomington, Indiana</h4>
            <p>
              • Maintained ETL pipelines, worked on 100+ SSIS packages<br />
              • Engineered T-SQL driven ETL processes<br />
              • Produced 20+ client-facing SSRS, Power BI reports<br />
              • Identified and resolved data discrepancies
            </p>
          </VerticalTimelineElement>
          {/* Master of Science in Data Science */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2022 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science in Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Indiana University • Bloomington, Indiana</h4>
            <p>
              • <strong>Specialized in Computational and Analytical tracks</strong><br />
              • <strong>Relavent Courses:</strong> Advanced Database, Data Mining, Data Visualization, Applied Algorithms, Statistics.<br />
              • Social Media Mining, Search, Advanced Database Technologies, VR<br />
            </p>
          </VerticalTimelineElement>
           {/* Software Engineer */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2021 - Jul 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ivy Comptech, Entain • Hyderabad, India</h4>
            <p>
              • Spearheaded 3 Data Migration projects, transferring over 7 million user records within US regulatory markets.<br />
              • Extracted and transformed user data, reducing redundancies and ensuring alignment with product specifications.<br />
              • Conducted comprehensive pre-period data analysis to build migration workflows, while also enhancing gameplay
              and user engagement through A/B testing, risk analysis, and validations on Big Data.
            </p>
          </VerticalTimelineElement>
         
           {/* Trainee Software Engineer */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="June 2020 - Feb 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Trainee Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ivy Comptech, Entain • Hyderabad, India</h4>
            <p>
              • Worked on Back End Development with the tech stack like SQL, Oracle SQL, Mongo DB, Java, SOAP API, SSH nodes and frameworks like Spring MVC, Spring Data JPA to make code optimizations.<br />
              • Developed “Compliance" features like KYC Verification, User Workflow, Responsible Gaming Functionalities and Geolocation services for the product as per the regulatory requirements of the respective countries in business and was an active part of successfully delivering 15+ labels/projects (for Gaming Platforms like BWIN, Eurobet, BetMGM and Ladbrokes).
            </p>
          </VerticalTimelineElement>
           {/* Bachelor of Technology in Electronics and Communication Engineering */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="June 2016 - May 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology in Electronics and Communication Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">K L University • Guntur, India</h4>
            <p>
              • <strong>Specialized in Signal and Image Processing</strong><br />
              • <strong>Relavent Courses:</strong> Machine Learning, Artificial Neural Networks, Pattern Recognition.<br />
              • Java, Data Structures, SQL, Python, C<br />
              • DSD, AECD, Computer Netwoks, Signals and Systems
            </p>
          </VerticalTimelineElement>

          {/* Continue with other positions following the same pattern... */}
          {/* Add the rest of your work history following the same format */}
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;