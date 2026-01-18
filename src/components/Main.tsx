import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../assets/styles/Main.scss';
import ProfilePhoto from '../assets/images/Portfolio_Pic.jpg';
import Type from "./Type";

const MainPage = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:posinarevanth@gmail.com?subject=Hello Revanth&body=I came across your portfolio and would like to connect...';
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mainContainer">
      <header className="header">
      </header>
      <main className="mainContent">
        <div className="introSection">
          <div className="contentWrapper">
            <div className="introText">
              <h3>Hey There!</h3>
              <h1>I'm <span className="highlight">Revanth Posina</span></h1>
              <div className="typewriter-wrapper">
                <span className="inline-text"><h2>I work on</h2></span>
                <div className="typewriter-component">
                  <Type />
                </div>
              </div>
              <p>I like building ML, Data pipelines that turn complex data sources into insights that support better business decisions.</p>
              
              <div className="button-group">
                <a 
                  href="#about" 
                  className="primary-button"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('about'); }}
                >
                  About Me
                </a>
                <a 
                  href="#projects" 
                  className="secondary-button"
                  onClick={e => { e.preventDefault(); handleSmoothScroll('projects'); }}
                >
                  View My Work
                </a>
                <button 
                  onClick={handleContactClick}
                  className="secondary-button"
                >
                  Contact Me
                </button>
              </div>

              <div className="socialIcons">
                <a href="https://github.com/RevanthPosina" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/revanth-p/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://medium.com/@revp" target="_blank" rel="noopener noreferrer"><AutoStoriesIcon /></a>
                <a href="https://public.tableau.com/app/profile/rev.pos/vizzes" target="_blank" rel="noopener noreferrer"><InsightsIcon /></a>
              </div>
            </div>
            
            {/* Polaroid-style photo with sticky note */}
            <div className="photoWrapper">
              <div className="stickyNote">
                <span>Data Engineer<br/>(AI/ML)</span>
              </div>
              <div className="polaroid">
                <img src={ProfilePhoto} alt="Revanth Posina" />
                <div className="polaroidCaption">me.jpeg</div>
              </div>
              <div className="purpleArrow">→</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;