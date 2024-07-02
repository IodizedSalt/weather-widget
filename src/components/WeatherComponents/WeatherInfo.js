import React from 'react';
import WindDirectionWidget from './WeatherWindDirection';

const WeatherInfo = ({ weather, selectedUnits }) => {
  const renderWindDirection = () => {
    if (weather && weather.windDirection) {
      return <WindDirectionWidget direction={weather.windDirection} />;
    }
    return null;
  };

  return (
    <>
      <li className="list-group-item">Temperature: <b>{weather.temperature} {selectedUnits === 'metric' ? '°C' : '°F'}</b></li>
      <li className="list-group-item">Humidity: <b>{weather.humidity}%</b></li>
      <li className="list-group-item">Wind: <b>{weather.windSpeed} {selectedUnits === 'metric' ? 'm/s' : 'ft/s'} {renderWindDirection()}</b></li>
    </>
  );
};

export default WeatherInfo;
