import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorageIcon from '@mui/icons-material/Storage';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../assets/styles/Main.scss';
import DevIllustration from '../assets/images/dev.svg';
import Type from "./Type";

const MainPage = () => {
  return (
    <div className="mainContainer">
      <header className="header">
      </header>
      <main className="mainContent">
        <div className="introSection">
          <div className="introText">
            <h3>Hey There! <span className="wave">👋</span></h3>
            <h1>I'm <span className="highlight">Revanth Posina</span></h1>
            <div className="typewriter-wrapper">
          <span className="inline-text"><h2>I work on</h2></span>
          <div className="typewriter-component">
           <Type />
          </div>
            </div>
            <p>Basically, I help turning data into insights to drive impactful decisions.</p>
            <div className="socialIcons">
              <a href="https://github.com/RevanthPosina" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/revanth-p/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://public.tableau.com/app/profile/rev.pos/vizzes" target="_blank" rel="noopener noreferrer"><InsightsIcon /></a>
              <a href="https://medium.com/@revp" target="_blank" rel="noopener noreferrer"><AutoStoriesIcon /></a>
              <a href="https://www.kaggle.com/revzkaggle" target="_blank" rel="noopener noreferrer"><StorageIcon /></a>
            </div>
          </div>
          <div className="illustrationWrapper">
            <img src={DevIllustration} alt="Developer illustration" className="devIllustration" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;