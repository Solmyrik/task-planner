import React from 'react';

const Sort = ({ handleSelectChange, selectedValue }) => {
  return (
    <div className="select">
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="none">По умолчанию</option>
        <option value="date+">Дата создания по возрастанию</option>
        <option value="date-">Дата создания по убыванию</option>
      </select>
    </div>
  );
};

export default Sort;
