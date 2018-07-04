import React, { Component } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Education from "./components/education";
import Repositories from "./components/repositories";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Profile />
        <Skills />
        <Education />
        <Repositories />
      </div>
    );
  }
}

export default App;
