import React, { useState } from "react";

const Table = ({ rows, columns, format, perPage=25 }) => {
  const [page, setPage] = useState(0);
  
    
  const headerValues = columns.map(c => <th key={c.name}>{c.name}</th>);
  
  const firstRowOnPage = () => {
    return page * perPage;
  };
  
  let start = firstRowOnPage();
  let end = start + perPage;
  
  const currentRowsOnPage = () => {
    return rows.slice(start, end);
  };
  
  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  }

  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  }

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
      <p>Showing {start+1}-{end} routes of {rows.length}</p>
      <button disabled={page === 0} onClick={previousPage}>Previous Page</button>
      <button disabled={end >= rows.length}onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Table;