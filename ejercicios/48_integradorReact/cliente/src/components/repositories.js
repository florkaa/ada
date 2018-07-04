import React, { Component } from "react";
import "../css/skills.css";
import "../css/repositories.css";

class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/florkaa/repos")
      .then(function(res) {
        return res.json();
      })
      /*}
      .then(function(repos) {
        console.log(repos);
        return repos.map(function(repo) {
          return {
            name: repo.name,
            id: repo.id,
            url: repo.url,
            description: repo.description
          };
        });
      })
      */
      .then(repos => this.setState({ repos }));
  }

  render() {
    var styleDiv = {
      position: "relative",
      top: "290px",
      width: "50%",
      margin: "auto",
      textAlign: "center"
    };
    var styleSkills = {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#FFF"
    };
    var styleInside = {
      width: "48%",
      textAlign: "justify",
      padding: "15px"
    };
    return (
      <div className="containerSkills" style={styleDiv}>
        <h1>Repositorios</h1>
        <div className="skills" style={styleSkills}>
          <div className="">
            <p>
              Aca podemos encontrar algunos de mis trabajos realizados en este
              ultimo tiempo:
            </p>
            <ul>
              {console.log(this.state.repos)}
              {this.state.repos.map(repo => (
                <li className="repos-list" key={repo.id}>
                  <a className="repos-link" href={repo.url}>
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Repositories;
