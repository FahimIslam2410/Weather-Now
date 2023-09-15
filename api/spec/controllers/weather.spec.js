const fetchMock = require("jest-fetch-mock");
fetchMock.enableMocks();
const request = require('supertest');
const app = require('../../app'); 
const weatherMockResponse = require('../mock/weatherMockResponse');

describe('getWeather', () => {
  
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe('getWeather, returns 200', () => {
    it('valid city, return status 200', async () => {
      fetchMock.mockResponses(
        JSON.stringify(weatherMockResponse)
      )
      let response = await request(app)
        .get("/weather/London")
      expect(response.status).toEqual(200);
    });

    it('valid city, return valid json response', async () => {
      fetchMock.mockResponses(
        JSON.stringify(weatherMockResponse)
      )
      let response = await request(app)
        .get("/weather/London")
      expect(response.body).toEqual(
        {
          name: "London",
          main: "Clouds",
          description: 'scattered clouds',
          temp: 23.74,
          feels_like: 23.37,
          wind: 2.57,
          humidity: 46,
          icon: '03d'
        }
      );
    });
  });

  describe('getWeather, returns 400', () => {
    it('invalid city, return 400', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ cod: '404', message: 'city not found' }));
      
      const response = await request(app).get('/weather/invalidcity');
      expect(response.status).toBe(400);
    });

    it('should return "city not found" message for an invalid city', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ cod: '404', message: 'city not found' }));
      
      const response = await request(app).get('/weather/invalidcity');
      expect(response.body.error).toEqual("City not Found");
    });
  });
});
