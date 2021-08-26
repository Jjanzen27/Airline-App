import React, { Component } from 'react';
import './App.css';
import data from "./data.js";
import Table from "./components/Table.js"

const App = () => {
  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];
  
  const formatValue = (property, value) => {
    
  }
  
  return (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table routes={ data.routes } className="routes-table" columns={columns} rows="" format=""/>
  </section>
</div>
)};

export default App;