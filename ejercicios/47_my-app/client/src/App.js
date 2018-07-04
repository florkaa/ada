import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {users: []} 

  componentDidMount() {
    fetch('/users') //pedimos el contenido de esa ruta
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;




// TRABAJO DEL DIARIO PASADO A REACT
// import React, { Component } from 'react';
// import edificio1 from './edificio1.png';
// import edificio2 from './edificio2.png';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav/>
//         <Title/>
//         <Content/>
//       </div>
//     );
//   }
// }

// class Nav extends Component {
//   render() {
//     return (         
//       <div id="nav"> 
//         <a href="https://lanacion.com">la nación</a> | <a href="https://lanacion.com">tecnología</a>
//       </div> ); 
//   }
// }

// class Title extends Component{
//   render(){
//     let title = "Japón planea tener el rascacielos de madera más alto del mundo en Tokio.";
//     return(
//       <div id="title"> <h1>{title}</h1> </div>
//     )
//   }
// }

// class Content extends Component {
//   render() {
//     let piedefoto = "Tendrá 250 metros de altura y será la más alta de su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero.";
//     let piedefoto2 = "El proyecto deberá superar las estrictas normas japonesas que restringen el uso de la madera para evitar incendios.";
//     let currentDate = new Date();
//     let day = currentDate.getDate();
//     let month = currentDate.getMonth() + 1;
//     let year = currentDate.getFullYear();
//     let fecha = day + "/" + month + "/" + year;
//     return (  
//       <div>     
//         <div class="imagen">
//           <img src={edificio1}></img>
//           <p class="piefoto"> {piedefoto} </p>
//         </div>
//         <div id="contenido"> 
//           { <p class="fecha">16 de febrero de 2018 - <b>00:16</b></p> }
//           <p class="fecha"> {fecha} </p>
//           <p id="capital">El constructor y desarrollador inmobiliario <a href="">Sumitomo Forestry</a>, especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar un torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires será el Alvear Tower, una construcción tradicional de 235 metros, mientras que el edificio más alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en la Universidad de Columbia Británica en Vancouver, Canadá.</p>
//           <p>El proyecto, diseñado por Nikken Sekkei, buscará combinar una proporción de 9 a 1 de madera y acero para la particular estructura solicitada por Sumitomo para celebrar el 350 aniversario de la compañía en 2041 con una estructura que transforme a Tokio en un bosque.</p>
//           <p>La estructura de la torre de madera más alta del mundo cumplirá con los reglamentos antisismicos para este tipo de edificios y se destinará para un hotel, oficinas, residencias y tiendas. Su costo estimado será de unos 5,9 mil millones de dólares.</p>
//           <p>Cuando finalice, la torre de Sumitomo Forestry no sólo será la más alta del mundo, sino que también superará a los rascacielos tradicionales de todo Japón.</p>
//           <img src={edificio2}></img>
//           <p class="piefoto" id="piefoto2"> {piedefoto2}</p>
//         </div>
//       </div> ); 
//   }
// }

// export default App;

