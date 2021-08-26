import React, { Component } from 'react';
import './App.css';
import data from "./data.js";

const Table = (props) => {
  console.log(props.routes);
  return (
    <div>
      <table>
        <tbody>
          {props.routes.map(route => <TableRow key={`${route.src}${route.dest}${route.airline}`} route={route}/>)}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ route }) => {
  return (
    <tr>
      <td>{route.airline}</td>
      <td>{route.src}</td>
      <td>{route.dest}</td>
    </tr>
  );
};

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table routes={ data.routes }/>
  </section>
</div>
);

export default App;