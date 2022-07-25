import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/CodeAbsolute";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/Profile.png"
              alt="Founder"
            />
            <Typography>Mahesh Gajakosh</Typography>
            <Button onClick={visitGitHub} color="primary">
              Visit GitHub
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <a href="https://github.com/CodeAbsolute" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-gajakosh-8701a8206/"
              target="blank"
            >
              <LinkedinIcon className="linkedsvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
