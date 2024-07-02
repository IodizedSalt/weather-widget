import { fetchWeather } from '../weatherService';

global.fetch = jest.fn();

const mockApiResponse = {
  main: { temp: 20, humidity: 60 },
  wind: { speed: 10, deg: 100 }
};

describe('fetchWeather', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch weather data successfully', async () => {
    fetch.mockResolvedValue({
      status: 200,
      json: async () => mockApiResponse,
    });

    const weather = await fetchWeather('Copenhagen', 'metric');
    expect(weather).toEqual({
      temperature: 20,
      humidity: 60,
      windSpeed: 10,
      windDirection: 100,
    });
  });

  it('should throw CITY_NOT_FOUND when the city is not found', async () => {
    fetch.mockResolvedValue({
      status: 404,
      json: async () => ({ cod: '404', message: 'city not found' }),
    });

    await expect(fetchWeather('InvalidCity', 'metric')).rejects.toThrow('CITY_NOT_FOUND');
  });
});
