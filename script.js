//http://api.weatherapi.com/v1/current.json?key=424c2767cffd4fa781360407241410&q=Mumbai&aqi=yes

const city = document.querySelector("#city");
const results = document.querySelector(".results");

const apiKey = "424c2767cffd4fa781360407241410";

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Indore",
  "Bhopal",
  "Visakhapatnam",
  "Thiruvananthapuram",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Noida",
  "Bangalore",
  "Chandigarh",
];

city.innerHTML = indianCities.map(
  (city, index) => ` <option value="${city}">${city}</option>`
);

async function getWeather() {
  let city = document.querySelector("#city").value;

  console.log(city);

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
  );

  try {
    const weatherData = await response.json();
    const currentWeather = await weatherData.current;
    const currentWeatherCondition = await weatherData.current.condition;
    const currentWeatherLocation = await weatherData.location;

    console.log("weatherData", weatherData);
    //   console.log("currentWeather", currentWeather);
    //   console.log("currentWeatherCondition", currentWeatherCondition);
    //   console.log("currentWeatherLocation", currentWeatherLocation);

    results.innerHTML = `

    <div class="weather-results">
            <div class="weather-img">
              <img src="${currentWeatherCondition.icon}" width="150" alt="" />
            </div>
            <div class="weather-content">
            <h3>${currentWeatherCondition.text}</h3>
            <h3>${currentWeather.temp_c}°C</h3>
              <h3>${currentWeather.temp_f}°F</h3>
            <h3>Time Zone :${currentWeatherLocation.tz_id}</h1>
              
              <h3>City:${currentWeatherLocation.name}</h3>
              <h3>Region:${currentWeatherLocation.region}</h3>
              <h3>Country:${currentWeatherLocation.country}</h3>
        

               
        <div class="boxes">
          <div class="box"><p>Humidity:${currentWeather.humidity}%</p></div>
          <div class="box"><p>Pressure:${currentWeather.pressure_in}"Hg</p></div>
         
          <div class="box"><p>Wind:${currentWeather.wind_kph}km/h</p></div>
        </div>
        
               
              
               
             
            </div>
          </div>

    `;
  } catch (error) {
    results.innerHTML = "<h1>Data not found</h1>";
  }
}

(async function defaultData() {
  const defaultCity = "Mumbai";
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${defaultCity}&aqi=yes`
  );

  try {
    const weatherData = await response.json();
    const currentWeather = await weatherData.current;
    const currentWeatherCondition = await weatherData.current.condition;
    const currentWeatherLocation = await weatherData.location;

    console.log("weatherData", weatherData);
    //   console.log("currentWeather", currentWeather);
    //   console.log("currentWeatherCondition", currentWeatherCondition);
    //   console.log("currentWeatherLocation", currentWeatherLocation);

    results.innerHTML = `
  
      <div class="weather-results">
              <div class="weather-img">
                <img src="${currentWeatherCondition.icon}" width="150" alt="" />
              </div>
              <div class="weather-content">
           <h3>${currentWeatherCondition.text}</h3>
            <h3>${currentWeather.temp_c}°C</h3>
              <h3>${currentWeather.temp_f}°F</h3>
            <h3>Time Zone :${currentWeatherLocation.tz_id}</h1>
              
              <h3>City:${currentWeatherLocation.name}</h3>
              <h3>Region:${currentWeatherLocation.region}</h3>
              <h3>Country:${currentWeatherLocation.country}</h3>
  
                 
          <div class="boxes">
            <div class="box"><p>Humidity:${currentWeather.humidity}%</p></div>
            <div class="box"><p>Pressure:${currentWeather.pressure_in}"Hg</p></div>
           
            <div class="box"><p>Wind:${currentWeather.wind_kph}km/h</p></div>
          </div>
          
                 
                
                 
               
              </div>
            </div>
  
      `;
  } catch (error) {
    results.innerHTML = "<h1>Data not found</h1>";
  }
})();
