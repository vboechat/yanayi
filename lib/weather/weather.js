"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
var axios_1 = __importDefault(require("axios"));
function getWeather(city) {
    console.log("Getting weather for ".concat(city, "..."));
    axios_1.default
        .request({
        method: "GET",
        url: "https://goweather.herokuapp.com/weather/".concat(city),
    })
        .then(function (response) {
        var responseData = response.data;
        console.log("Actual weather for " + city + ":");
        console.log("Temperature: " + responseData.temperature);
        console.log("Wind: " + responseData.wind);
        console.log("Description: " + responseData.description);
        console.log("\nForecast for 3 days:");
        for (var i = 0; i < responseData.forecast.length; i++) {
            console.log("Day " + (i + 1) + ":");
            console.log("- Temperature: " + responseData.forecast[i].temperature);
            if (i < responseData.forecast.length - 1) {
                console.log("- Wind: " + responseData.forecast[i].wind);
            }
        }
    })
        .catch(function (error) {
        console.log(error);
    });
}
exports.getWeather = getWeather;
