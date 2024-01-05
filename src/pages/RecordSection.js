//RecordSection.js
import React from 'react';

const RecordSection = ({ name, phone, location, type }) => {
  return (
    <div>
      <h3 ALIGN="CENTER" className="h">{name}</h3>
      <p className="TEXT">{phone}</p>
      <p className="TEXT">{location}</p>
      <p className="TEXT">{type}</p>
    </div>
  );
}

export default RecordSection;
