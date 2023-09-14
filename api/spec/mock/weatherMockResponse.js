const weatherMockResponse = {
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 23.74,
        "feels_like": 23.37,
        "temp_min": 21.69,
        "temp_max": 24.82,
        "pressure": 1018,
        "humidity": 46
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 180
    },
    "clouds": {
        "all": 46
    },
    "dt": 1694705612,
    "sys": {
        "type": 2,
        "id": 268730,
        "country": "GB",
        "sunrise": 1694669592,
        "sunset": 1694715572
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}


module.exports = weatherMockResponse