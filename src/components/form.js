import React from 'react';
import Input from './input';
import Button from './Button';
import './components.css';

const form = ({ inputList, formType, updated, submitted }) => {
  const inputs = inputList.map((item) => {
    const { key } = item;
    return <Input data={item} updated={updated} key={key} />;
  });

  return (
    <div className="Form">
      <h3>{formType}</h3>
      <form onSubmit={submitted}>
        {inputs}
        <Button>{formType}</Button>
      </form>
    </div>
  );
};

export default form;
