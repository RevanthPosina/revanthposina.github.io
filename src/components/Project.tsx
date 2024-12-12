import React, { useState } from "react";
import tableau from '../assets/images/tableau.png';
import ads from '../assets/images/ads.png';
import clad from '../assets/images/clad.png';
import ibm from '../assets/images/ibm.png';
import ml from '../assets/images/ml.png';
import pega from '../assets/images/pega.png';
import ssa from '../assets/images/ssa.png';
import areteint from '../assets/images/areteint.gif';
import kpmgint from '../assets/images/kpmgint.gif';
import vlsiint from '../assets/images/vlsiint.gif';
import publication from '../assets/images/publication.gif';
import trafficsign from '../assets/images/trafficsign.gif';
import fakeface from '../assets/images/fakeface.gif';
import spacex from '../assets/images/spacex.gif';
import ytanalytics from '../assets/images/ytanalytics.gif';
import sales from '../assets/images/sales.gif';
import Stockpriceanalysis from '../assets/images/Stockpriceanalysis.gif';
import coursedelivery from '../assets/images/coursedelivery.gif';
import houseprice from '../assets/images/houseprice.gif';
import awssa003 from '../assets/images/aws-certified-solutions-architect-associate.png';
import '../assets/styles/Project.scss';

function Project() {
    const [filter, setFilter] = useState('ALL');

    const projects = [
        {
            img: houseprice,
            title: "House Prices Prediction – using advanced Regression Techniques",
            description: "Developed and optimized a house price prediction model using EDA, feature preprocessing, and Random Forest regression as a benchmark, leveraging stacking generalization to enhance accuracy, evaluated via the Kaggle leaderboard.",
            link: "https://github.com/RevanthPosina/HousePricePrediction-Kaggle",
            category: "PROJECTS"
        },
        {
            img: coursedelivery,
            title: "Course Delivery System",
            description: "Led a team of six to develop a Course Management platform using Pega Infinity, and Agile, featuring a recommendation system, automated user flow, feedback analytics, and a tutor-student ERP model for seamless learning and certification.",
            link: "",
            category: "PROJECTS"
        },
        {
            img: Stockpriceanalysis,
            title: "Tesla Stock Price Analytics",
            description: "Created an interactive Tableau dashboard with filters to analyze stock price fluctuations across months and years, enabling data-driven decision-making for business management.",
            link: "https://github.com/RevanthPosina/Tesla_stock_Price_Prediction",
            category: "PROJECTS"
        },
        {
            img: sales,
            title: "Predict Future Sales",
            description: "Developed a sales prediction model for Kaggle competition using LGBMRegressor, refining train-test datasets by aligning dimensions, filtering shops/products, and creating reduced datasets for feature comparison.",
            link: "https://github.com/RevanthPosina/Predict_Future_Sales",
            category: "PROJECTS"
        },
        {
            img: ytanalytics,
            title: "Youtube Analysis using Hadoop",
            description: "Implemented YouTube data analysis with Hadoop MapReduce to determine the top 5 categories by uploads and top 10 rated videos, showcasing results via a web server.",
            link: "https://github.com/RevanthPosina/YouTube_Analysis_with_Java",
            category: "PROJECTS"
        },
        {
            img: spacex,
            title: "SpaceX Falcon9 Success Prediction",
            description: "Completed an IBM Data Science Capstone, predicting SpaceX Falcon 9 first-stage landing success using API-collected data to assess reusability and estimate launch costs.",
            link: "https://github.com/RevanthPosina/Falcon9_success_prediction",
            category: "PROJECTS"
        },
        {
            img: fakeface,
            title: "Fake Face Generator Using DCGAN Model",
            description: "Designed and trained a Generator Network using transpose convolutions and adversarial loss to generate realistic human face images, tracking and optimizing Discriminator and Generator losses per epoch.",
            link: "https://github.com/RevanthPosina/Fake-Face-Generator-Using-DCGAN-Model",
            category: "PROJECTS"
        },
        {
            img: trafficsign,
            title: "Traffic Sign Detection",
            description: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.",
            link: "https://github.com/RevanthPosina/Traffic_Sign_Detection",
            category: "PROJECTS"
        },
        {
            img: publication,
            title: "Research Publication",
            description: "Proposed a fusion method using a weight map procedure to effectively recognize and reconstruct source data from fused Visible and IR images. Conducted comparative analysis using metrics like Entropy, Standard Deviation, SSIM, and PSNR. Leveraged deep learning models such as CNN and machine learning techniques like Laplacian Pyramid, Sparse Representation, and Adaptive Sparse Representation for image processing.",
            link: "https://www.springerprofessional.de/en/fusion-of-visible-and-infrared-images-via-saliency-detection-usi/18540690",
            category: "PUBLICATION"
        },
        {
            img: kpmgint,
            title: "Data Analytics Consulting Internship",
            description: "Virtual Internship at KPMG, Assessed data quality for Sprocket Central Pty Ltd’s Customer Demographics, Segmentation, and Transaction datasets, identifying high-value customers using targeted insights. Delivered a data-driven presentation with dashboards and visualizations to support strategic decision-making.",
            link: "",
            category: "INTERNSHIPS"
        },
        {
            img: areteint,
            title: "Data Science and Computational Analytics Internship",
            description: "At Arete IT,Provided statistical analysis reports to management, enhancing customer loyalty through data-driven insights. Assisted in Data Collection, Data Cleaning, and ETL processes, and worked on individual projects like YouTube Analysis using Hadoop & Traffic Sign Recognition using CNN and Keras.",
            link: "",
            category: "INTERNSHIPS"
        },
        {
            img: vlsiint,
            title: "VLSI Intern",
            description: "At ECIL, Gained expertise in Digital System Design, Computer Organization and Architecture, and CMOS VLSI concepts. Worked with Verilog HDL and Microwind software to implement a prototype project: FPGA Implementation of Traffic Light Control Based on Sensor Data in VLSI.",
            link: "",
            category: "INTERNSHIPS"
        },
        {
            img: awssa003,
            title: "Certified AWS Solution Architect-CSA-003",
            description: "Completed Tableau certification to enhance business analytics skills and master advanced visualizations. Developed an interactive dashboard for the Tesla Stock Price Analysis project, enabling users to filter and visualize fluctuating stock price trends across various months and years for actionable insights.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: tableau,
            title: "Tableau for Data Science",
            description: "Completed Tableau certification to enhance business analytics skills and master advanced visualizations. Developed an interactive dashboard for the Tesla Stock Price Analysis project, enabling users to filter and visualize fluctuating stock price trends across various months and years for actionable insights.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: ibm,
            title: "IBM Professional Data Science",
            description: "Completed 10 professional courses to strengthen foundational knowledge and enhance expertise in Data Science concepts. Worked on a Capstone project predicting SpaceX Falcon-9 mission success using advanced data analysis techniques.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: ads,
            title: "IBM Applied Data Science",
            description: "Earned certifications to enhance proficiency in Applied Data Science, Python, and Data Visualization, strengthening core concepts.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: ml,
            title: "Andrew Ng's Machine Learning",
            description: "In addition to academic coursework in Machine Learning, completed Andrew Ng's renowned course to enhance expertise and hands-on skills. Gained a deeper understanding of techniques for training, tuning, and applying machine learning models effectively.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: ssa,
            title: "Senior System Architect",
            description: "Certified Senior System Architect, recognized among the top 120 students through the University Academic Program. Developed a Course Delivery System, a recommender platform akin to Coursera, integrating data validation, application development, security, and user experience. Designed decisive models and business reports to provide actionable feedback for students and implemented a mini-ERP model to streamline interactions between tutors and students.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: pega,
            title: "System Architect",
            description: "Proficient in PEGA v7.3 and 7.4, with Certified System Architect credentials. Selected among the top 120 students in the University Academic Program. Experienced in Case Management, Data Integration, DevOps, Reporting, and Application Development.",
            link: "",
            category: "CERTIFICATIONS"
        },
        {
            img: clad,
            title: "Certified LabVIEW Associate Developer",
            description: "Shortlisted among the top 100 students through the NI Screening Exam and certified as a LabVIEW Associate Developer. Participated in My-NIthon, a LabVIEW-based hackathon, and developed a Home Theft Detection System using Facial Recognition prototype. Leveraging myDAQ and visual models, the system achieved 93% accuracy in distinguishing the owner's face, earning high recognition for innovation and effectiveness.",
            link: "",
            category: "CERTIFICATIONS"
        }
    ];

    const filteredProjects = projects.filter(project => 
        filter === 'ALL' ? true : project.category === filter
    );

    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            
            <div className="filter-buttons">
                <button 
                    className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`}
                    onClick={() => setFilter('ALL')}
                >
                    ALL
                </button>
                <button 
                    className={`filter-btn ${filter === 'PROJECTS' ? 'active' : ''}`}
                    onClick={() => setFilter('PROJECTS')}
                >
                    PROJECTS
                </button>
                <button 
                    className={`filter-btn ${filter === 'INTERNSHIPS' ? 'active' : ''}`}
                    onClick={() => setFilter('INTERNSHIPS')}
                >
                    INTERNSHIPS
                </button>
                <button 
                    className={`filter-btn ${filter === 'PUBLICATION' ? 'active' : ''}`}
                    onClick={() => setFilter('PUBLICATION')}
                >
                    PUBLICATION
                </button>
                <button 
                    className={`filter-btn ${filter === 'CERTIFICATIONS' ? 'active' : ''}`}
                    onClick={() => setFilter('CERTIFICATIONS')}
                >
                    CERTIFICATIONS
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div className="project" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.img} className="zoom" alt="thumbnail" width="100%"/>
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
