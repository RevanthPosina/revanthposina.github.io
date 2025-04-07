import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const darkThemeStyles = {
    background: 'rgba(255, 255, 255, 0.03)',
    color: '#fff',
    border: '1px solid rgba(171, 71, 188, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
  };

  const darkThemeArrow = { borderRight: '7px solid rgba(171, 71, 188, 0.1)' };
  const iconStyle = { background: '#ab47bc', color: '#fff' };

  return (
    <section id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline lineColor="rgba(171, 71, 188, 0.2)">
          {/* Data Engineer 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="Jul 2024 - Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Engineer I</h3>
            <h4>Bloom Insurance • Bloomington, Indiana</h4>
          </VerticalTimelineElement>

          {/* Data Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="May 2023 - Dec 2023"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Engineer Intern</h3>
            <h4>Bloom Insurance • Bloomington, Indiana</h4>
          </VerticalTimelineElement>

          {/* Master of Science */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="Aug 2022 - May 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Master of Science in Data Science</h3>
            <h4>Indiana University • Bloomington, Indiana</h4>
            <p>
              • <strong>Specialized in Computational and Analytical tracks</strong><br />
              • <strong>Relevant Courses:</strong> Advanced Database, Data Mining, Data Visualization, Applied Algorithms, Statistics,
                 Social Media Mining, Search, Advanced Database Technologies, VR
            </p>
          </VerticalTimelineElement>

          {/* Data Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="Feb 2021 - Jul 2022"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Engineer - Ops</h3>
            <h4>Ivy Comptech, Entain • Hyderabad, India</h4>
          </VerticalTimelineElement>

          {/* Trainee Software Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="June 2020 - Feb 2021"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Trainee Software Engineer - Data Ops</h3>
            <h4>Ivy Comptech, Entain • Hyderabad, India</h4>
          </VerticalTimelineElement>

          {/* Bachelor of Technology */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={darkThemeStyles}
            contentArrowStyle={darkThemeArrow}
            date="June 2016 - May 2020"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Bachelor of Technology in Electronics and Communication Engineering</h3>
            <h4>K L University • Guntur, India</h4>
            <p>
              • <strong>Specialized in Signal and Image Processing</strong><br />
              • <strong>Relevant Courses:</strong> Database Systems, Machine Learning, Artificial Neural Networks, Pattern Recognition, SQL, Python, Java, Data Structures, C
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
