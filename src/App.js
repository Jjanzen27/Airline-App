import React, { Component } from 'react';
import './App.css';
import data from "./data.js";

const Table = ({ routes }) => {
  console.log(routes);
  return (
    <div>
      <table>
        <tbody>
          {routes.map(route => <TableRow key={`${route.src}${route.dest}${route.airline}`} route={route}/>)}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ route }) => {
  return (
    <tr>
      <td>{data.getAirlineById(route.airline)}</td>
      <td>{data.getAirportByCode(route.src)}</td>
      <td>{data.getAirportByCode(route.dest)}</td>
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