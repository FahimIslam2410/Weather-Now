const express = require("express");
const router = express.Router();
const WeatherController = require("../controllers/weather");

router.get("/:city", WeatherController.GetWeather);


module.exports = router;
