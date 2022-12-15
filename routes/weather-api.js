const express = require('express');

const {getCurrentWeather,getCurrentWeatherForMultipleDays} = require("../controllers/controls");


const router = express.Router();


router.route("/weather/:city").post(getCurrentWeather);
router.route("/weather/:city/:dayscount").post(getCurrentWeatherForMultipleDays);



module.exports = router;