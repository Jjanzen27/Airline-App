import React from 'react';
import './App.css';
import data from "./data.js";
import Table from "./components/Table.js";

const Select = ({options, allTitle}) => {
  
  const getOptions = () => {
    return options.map(o => <option key={o}>{o}</option>);
  };
  
  return (
    <select>
      <option defaultValue>{allTitle}</option>
      {getOptions()};
    </select>  
  );
};

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
  
  return (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <p>Show routes on
    <Select  options={filteredAirlines()} allTitle="All airlines"/>
    flying in or out of
    <Select options={filteredAirports()} allTitle="All airports"/>
    <button>Show All Routes</button>
  </p>
  <section>
    <Table className="routes-table" columns={columns} rows={rows} format=""/>
  </section>
</div>
)};

export default App;