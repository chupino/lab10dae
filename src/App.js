import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      productos: []
    }
    
}
componentWillMount() {
  fetch('http://localhost:8000/api/producto/')
    .then((response) => {
      return response.json()
    })
    .then((prod) => {
      this.setState({ productos: prod })
    })    
} 
render() {
  return (
    <div>
      <table border="1">
      <thead>
        <tr>
          <th>Código</th>
          <th>Descripción</th>
          <th>Precio</th>                    
        </tr>
      </thead>
      <tbody>  
        {this.state.productos.map(producto => {
          return (
            <tr key={producto.codigo}>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
}

}
/* function App(){
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
} */

export default App;
