import axios from "axios";

export function getWeather(city: string) {
  console.log(`Getting weather for ${city}...`);
  axios
    .request({
      method: "GET",
      url: `https://goweather.herokuapp.com/weather/${city}`,
    })
    .then((response) => {
      const responseData = response.data;

      console.log("Actual weather for " + city + ":");
      console.log("Temperature: " + responseData.temperature);
      console.log("Wind: " + responseData.wind);
      console.log("Description: " + responseData.description);
      console.log("\nForecast for 3 days:");
      for (let i = 0; i < responseData.forecast.length; i++) {
        console.log("Day " + (i + 1) + ":");
        console.log("- Temperature: " + responseData.forecast[i].temperature);
        if (i < responseData.forecast.length - 1) {
          console.log("- Wind: " + responseData.forecast[i].wind);
        }
      }
    })
    .catch(() => console.log("City not found."));
}
