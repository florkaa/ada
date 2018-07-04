import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../js/fontawesome-all.js';
import '../css/profile.css';

class Profile extends Component {
  render(){
    return(
      <div className="profile">
        <div className="imagen">
          <img src={logo} width="100%"></img>
        </div>
        <div className="data">
          <p>Florencia Caputti</p>
          <p><span>Fecha de Nacimiento:</span> 15/05/1991</p>
          <p><span>Email:</span> florencia.ayc@gmail.com</p>
          <p><span>Teléfono:</span> 1130579701</p>
          <div className="social">
            <a href='http://github.com/florkaa'><i class="fab fa-github"></i></a>
            <a href='https://www.linkedin.com/in/florencia-caputti/'><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    )
  }
}


export default Profile;