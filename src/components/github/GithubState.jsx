import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubStats.css";

const GithubState = () => {
  return (
    <div id="git">
      <h1 className="GithubH1">Github Stats</h1>
      <div  className="GithubContainer">
        <GitHubCalendar
         style={{display:"flex",
         flexDirection:"column", 
        //  justifyContent:"space-between",
           margin: "auto",
          padding: "1rem",
           gap:'1.5rem',
          }}
          username="sumitkprasad123"
          year={new Date().getFullYear()}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
        />
      </div>
      <div className="statsDiv">
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=sumitkprasad123&show_icons=true"
          alt="sumitkprasad123"
        />
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=sumitkprasad123&"
          alt="sumitkprasad123"
        />
      </div>
    </div>
  );
};

export default GithubState;