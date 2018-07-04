import React, { Component } from 'react';
import '../css/App.css';

class Header extends Component {
  render() {
    var style = {
      backgroundColor: '#99102e',
      height: '300px',
      width: '100%',
      position: 'absolute',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 5px, rgba(0, 0, 0, 0.22) 0px 3px 30px'
    }
    return (
      <header style={style}>
      </header>
    ) 
  }
}


export default Header;