

const apiKey = process.env.WEATHER_API_KEY;

if (!apiKey) {
  throw new Error('Weather API key not provided. Please set WEATHER_API_KEY environment variable.');
}

export const fetchWeather = async (city, units) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  try {
    const response = await fetch(apiUrl);
    console.log(response)
    if (response.status === 404) {
      throw new Error('CITY_NOT_FOUND');
    }

    const data = await response.json();

    if (!data || data.cod === '404') {
      throw new Error('CITY_NOT_FOUND');
    }

    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDirection: data.wind.deg
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
