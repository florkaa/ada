import React, { Component } from "react";
import "../css/education.css";
import "../css/skills.css";

class Education extends Component {
  render() {
    return (
      <div className="containerSkills">
        <h1>Educación</h1>
        <div className="skills">
          <div className="skillsLeft">
            <b>Ada || Coding Bootcamp</b>
            <p>Desarrollo Frontend 2018</p>
            <p>HTML, CSS, JavaScript, Node.js, y React.</p>
          </div>
          <div className="skillsRight">
            <b>IT Master</b>
            <p>- Maquetado web</p>
            <p>- HTML 5 & CSS3 </p>
            <p>- LESS & SASS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
