import { rest } from 'msw';

const apiKey = process.env.WEATHER_API_KEY || 'test-api-key';

export const handlers = [
  rest.get(`https://api.openweathermap.org/data/2.5/weather`, (req, res, ctx) => {
    const { searchParams } = req.url;
    const city = searchParams.get('q');
    
    if (city === 'InvalidCity') {
      return res(
        ctx.status(404),
        ctx.json({ cod: '404', message: 'city not found' })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        main: { temp: 20, humidity: 60 },
        wind: { speed: 10, deg: 100 }
      })
    );
  }),
];
