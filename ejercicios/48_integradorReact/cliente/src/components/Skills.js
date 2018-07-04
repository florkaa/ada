import React, { Component } from 'react';
import { Line } from 'rc-progress';
import '../css/skills.css';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      html: 100,
      css: 100,
      javascript: 90,
      node: 70,
      react: 50,
      color: '#10997b',
    }
  }
  render(){
    const containerStyle = {
      width: '100%',
      marginBottom: '20px'
    };
    return(
      <div className="containerSkills">
        <h1>Skills</h1>
        <div className="skills">
          <div className="skillsLeft">
            <p>People need a broad range of skills to contribute to a modern economy. A joint ASTD and U.S. Department of Labor study showed that through technology, the workplace is changing, and identified 16 basic skills that employees must have to be able to change with it.</p>
            <p>Skilled workers have long had historical import (see Division of labor) as electricians, masons, carpenters, blacksmiths, bakers, brewers, coopers, printers and other occupations that are economically productive. Skilled workers were often politically active through their craft guilds.</p>
          </div>
          <div className="skillsRight">
            <span>HTML {this.state.html}%</span>
            <div style={containerStyle}>
              <Line percent={this.state.html} strokeWidth="2" strokeColor={this.state.color} />
            </div>
            <span>CSS {this.state.css}%</span>
            <div style={containerStyle}>
              <Line percent={this.state.css} strokeWidth="2" strokeColor={this.state.color} />
            </div>
            <span>JavaScript {this.state.javascript}%</span>
            <div style={containerStyle}>
              <Line percent={this.state.javascript} strokeWidth="2" strokeColor={this.state.color} />
            </div>
            <span>Node.js {this.state.node}%</span>
            <div style={containerStyle}>
              <Line percent={this.state.node} strokeWidth="2" strokeColor={this.state.color} />
            </div>
            <span>React {this.state.react}%</span>
            <div style={containerStyle}>
              <Line percent={this.state.react} strokeWidth="2" strokeColor={this.state.color} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;