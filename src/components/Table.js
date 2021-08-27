import React, { useState, useEffect } from "react";

const Table = ({ rows, columns, format, perPage=25 }) => {
  const [page, setPage] = useState(12);
  
    
  const headerValues = columns.map(c => <th key={c.name}>{c.name}</th>);
  
  const firstRowOnPage = () => {
    return page * perPage;
  };
  
  let start = firstRowOnPage();
  let end = start + perPage;
  
  const currentRowsOnPage = () => {
    return rows.slice(start, end);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{headerValues}</tr>
        </thead>
        <tbody>
          {currentRowsOnPage()}
        </tbody>
      </table>
      <p>Showing {start+1}-{end+1} routes of {rows.length}</p>
    </div>
  );
};

export default Table;