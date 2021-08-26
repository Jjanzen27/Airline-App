import React from "react";
import data from "./../data.js";

const Table = ({ routes, columns }) => {
    
  const headerValues = columns.map(c => <th key={c.name}>{c.name}</th>)

  return (
    <div>
      <table>
        <thead>
          <tr>{headerValues}</tr>
        </thead>
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

export default Table;