import React, { useState } from 'react';
import './App.css';
import data from "./data.js";
import Table from "./components/Table.js";
import Select from "./components/Select.js";

const App = () => {
  const [airline, setAirline] = useState("all");
  const [airport, setAirport] = useState("all");
  
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
  };
  
  const filteredRows = data.routes.filter(route => {
    const currentAirline = data.getIdByAirlineName(airline);
    const currentAirport = data.getCodeByAirportName(airport);
    
    return (route.airline === currentAirline || airline === "all") &&
    (route.src === currentAirport || route.dest === currentAirport || airport === "all");
  });
  
  const rows = filteredRows.map(route => {
    return formatRow(route);
  });
  
  const filteredAirlines = () => {
    let airlines = data.routes.map(o => data.getAirlineById(o.airline));
    
    airlines = new Set(airlines);
    
    return [...airlines];
  };
  
  const filteredAirports = () => {
    let airports = data.routes.map(airport => data.getAirportByCode(airport.src));
    
    airports = new Set(airports);
    
    return [...airports];
  };
  
  const selectAirline = (value) => {
    value === "All airlines" ? setAirline("all") : setAirline(value);
  }
  
  const selectAirport = (value) => {
    value === "All airports" ? setAirport("all") : setAirport(value);
  }
  
  return (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <p>Show routes on
    <Select  options={filteredAirlines()} allTitle="All airlines" onSelect={selectAirline}/>
    flying in or out of
    <Select options={filteredAirports()} allTitle="All airports" onSelect={selectAirport}/>
    <button>Show All Routes</button>
  </p>
  <section>
    <Table className="routes-table" columns={columns} rows={rows} format=""/>
  </section>
</div>
)};

export default App;