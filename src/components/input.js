import React from 'react';

import Aux from '../hoc/Aux';
import './components.css';

const input = ({ data, updated }) => {
  const { placeholder, name, type } = data;
  return (
    <Aux>
      <input
        required
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={updated}
        name={name}
      />
      <br />
    </Aux>
  );
};
//TODO: add OnFocus
export default input;
