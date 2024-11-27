import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorageIcon from '@mui/icons-material/Storage';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/RevanthPosina" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/revanth-p/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.kaggle.com/revzkaggle" target="_blank" rel="noopener noreferrer"><StorageIcon /></a>
      </div>
      {/*<p>A portfolio designed & built by <a href="https://github.com/RevanthPosina" target="_blank" rel="noreferrer">Rev</a></p> */}
    </footer>
  );
}

export default Footer;