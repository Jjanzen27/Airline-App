import React from "react";

const Select = ({options, allTitle, onSelect}) => {
  
  const getOptions = () => {
    return options.map(o => <option key={o}>{o}</option>);
  };
  
  const handleChange = (event) => {
    event.preventDefault();
    onSelect(event.target.value);
  };
  
  return (
    <select onChange={handleChange}>
      <option defaultValue>{allTitle}</option>
      {getOptions()};
    </select>  
  );
};

export default Select;