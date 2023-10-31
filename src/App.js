
import './App.css';
import React, {Component,useState} from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper } from '@mui/material';

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.productos.map((row) => (
              <TableRow key={row.codigo}>
                <TableCell>{row.codigo}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
function MaterialUITable() {
  const rows = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
  ];


  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
export default MaterialUITable;


