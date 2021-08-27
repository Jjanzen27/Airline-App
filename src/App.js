import React from 'react';
import './App.css';
import data from "./data.js";
import Table from "./components/Table.js"

const App = () => {
  
  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];
  
  const formatRow = (row) => {
    return (
    <tr key={`${row.src}${row.dest}${row.airline}`}>
      <td>{data.getAirlineById(row.airline)}</td>
      <td>{data.getAirportByCode(row.src)}</td>
      <td>{data.getAirportByCode(row.dest)}</td>
    </tr>
    );
  }
  
  const rows = data.routes.map(route => {
    return formatRow(route);
  });
  
  const formatValue = (property, value) => {
    
  }
  
  return (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table className="routes-table" columns={columns} rows={rows} format=""/>
  </section>
</div>
)};

export default App;