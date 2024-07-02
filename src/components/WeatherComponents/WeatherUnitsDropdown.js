import React from 'react';

const WeatherUnitsDropdown = ({ selectedUnits, onChange }) => (
  <li className="list-group-item">
    <label htmlFor="units">Units:</label>
    <select id="units" className="form-control" value={selectedUnits} onChange={onChange}>
      <option value="metric">Metric</option>
      <option value="imperial">Imperial</option>
    </select>
  </li>
);

export default WeatherUnitsDropdown;
