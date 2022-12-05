import React from 'react';
import './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
