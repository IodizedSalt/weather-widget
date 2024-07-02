import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import WeatherInfo from '../components/WeatherComponents/WeatherInfo';
import WeatherCityNotFound from '../components/WeatherComponents/WeatherCityNotFound';
import WeatherForm from '../components/WeatherComponents/WeatherForm';
import WeatherUnitsDropdown from '../components/WeatherComponents/WeatherUnitsDropdown';
import LoadingIndicator from '../components/WeatherComponents/LoadingIndicator';
import { fetchWeather } from '../services/weatherService';

const WeatherWidget = () => {
  const router = useRouter();
  const { city } = router.query;
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(city || 'Copenhagen');
  const [selectedUnits, setSelectedUnits] = useState('metric');
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const weatherData = await fetchWeather(selectedCity, selectedUnits);
        setWeather(weatherData);
        setCityNotFound(false);
      } catch (error) {
        if (error.message === 'CITY_NOT_FOUND') {
          setWeather(null);
          setCityNotFound(true);
          console.error('City not found:', selectedCity);
        } else {
          console.error('Error fetching weather data:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCity, selectedUnits]);

  const handleCityChange = (newCity) => {
    router.push(`/?city=${newCity}`, undefined, { shallow: true });
    setSelectedCity(newCity);
  };

  const handleUnitsChange = (e) => {
    setSelectedUnits(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Weather Widget</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="widget" style={{ margin: '10px', width: '300px' }}>
        <div className="panel panel-info">
          <div className="panel-heading">Weather in <b>{selectedCity}</b></div>
          <ul className="list-group">
            {cityNotFound ? (
              <WeatherCityNotFound />
            ) : weather ? (
              <WeatherInfo weather={weather} selectedUnits={selectedUnits} />
            ) : (
              <LoadingIndicator />
            )}
            <li className="list-group-item">
              <WeatherForm selectedCity={selectedCity} onSubmit={handleCityChange} />
            </li>
            <WeatherUnitsDropdown selectedUnits={selectedUnits} onChange={handleUnitsChange} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;
