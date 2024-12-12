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
           {/* Data Engineer */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2021 - Jul 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer - Ops</h3>
            <h4 className="vertical-timeline-element-subtitle">Ivy Comptech, Entain • Hyderabad, India</h4>
            <p>
              • Spearheaded 3 Data Migration projects, transferring over 7 million user records within US regulatory markets.<br />
              • Designed and implemented scalable data pipelines using SQL and Oracle SQL, automating workflows to enhance performance and reduce manual intervention.<br />
              • Conducted node-level deployments using SSH for efficient system updates, ensuring secure and reliable implementation across production environments.<br />
              • Built dashboards and reports with Tableau and Power BI to deliver actionable insights, enabling data-driven decision-making.<br />
              • Collaborated with cross-functional teams to enhance RESTful APIs and resolve data-related production issues, ensuring high system reliability and operational continuity.
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
            <h3 className="vertical-timeline-element-title">Trainee Software Engineer - Data Ops</h3>
            <h4 className="vertical-timeline-element-subtitle">Ivy Comptech, Entain • Hyderabad, India</h4>
            <p>
              • Contributed to 15+ White Label Building projects, focusing on regulatory compliance and user registration data flows for brands like Bwin, BetMGM, and Ladbrokes.<br/>
              • Automated repetitive tasks using VBA macros, improving efficiency in data analysis and reporting workflows.<br/>
              • Gained hands-on experience with SSH nodes for secure deployments and optimized data communication between systems.
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
              • <strong>Relavent Courses:</strong> Database Systems, Machine Learning, Artificial Neural Networks, Pattern Recognition.<br />
              • SQL, Python, Java, Data Structures, C<br />
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
