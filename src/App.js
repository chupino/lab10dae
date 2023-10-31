import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false
    }
    
}
componentWillMount() {
  fetch('http://localhost:8000/api/producto/')
    .then((response) => {
      return response.json()
    })
    .then((prod) => {
      this.setState({ productos: prod,recuperado: true })
    })    
}
mostrarTabla() {
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
        {this.state.productos.map(prod => {
          return (
            <tr key={ prod.codigo}>
              <td>{ prod.codigo}</td>
              <td>{ prod.descripcion}</td>
              <td>{ prod.precio}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
}

render() {
  if (this.state.recuperado)
    return this.mostrarTabla()
  else
    return (<div>recuperando datos...</div>)
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
