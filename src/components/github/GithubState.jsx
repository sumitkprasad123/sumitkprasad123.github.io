import React from 'react'
import GitHubCalendar from "react-github-calendar";

export const GithubState = () => {
  return (
    <section id="githubStats">
    <div className="github-calender">
      <h5>Presenting</h5>
      <h2>Github Stats</h2>
      <GitHubCalendar
        username="sumitkprasad123"
        style={{ margin: "auto", padding: "1rem", gap:'1.2rem'}}
        // transformData={selectLastHalfYear}
        blockSize={12}
        fontSize={9}
      ></GitHubCalendar>
    </div>
    <div className="github-stats-image">
      <img
         src="https://github-readme-stats.vercel.app/api?username=sumitkprasad123&show_icons=true"
         alt="gh"
         />
    </div>
  </section>

  )
}
