import React, {useState} from "react";
import "./App.css";

const WeatherApp = () => {
    const [town, setTown] = useState("");
    const [weatherData1, setWeatherData1] = useState(null);
    const [weatherData2, setWeatherData2] = useState(null);
    const [error, setError] = useState(null);

    const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const weatherApiKey = process.env.REACT_APP_WEATHERAPI_API_KEY;

    const fetchWeather = async () => {
        setError(null);
        let lat = "";
        let lon = "";

        console.log(openWeatherApiKey, weatherApiKey)

        try {
            const geoCodingResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${town},,FI&limit=1&appid=${openWeatherApiKey}`);
            const geoData = await geoCodingResponse.json();
            lat = geoData[0].lat
            lon = geoData[0].lon;

        } catch (error) {
            console.error("Error fetching GeoCoding data", error);
            handleError();
        }

        try {
            const response1 = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`);
            const response2 = fetch(`https://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=${weatherApiKey}`);
            const [data1, data2] = await Promise.all([response1, response2]);

            if (data1.status !== 200 || data2.status !== 200) {
                handleError();
                return;
            }

            setWeatherData1(await data1.json());
            setWeatherData2(await data2.json());
        } catch (error) {
            console.error("Error fetching weather data", error);
            handleError();
        }
    };

    const calcTempDifference = (temp1, temp2) => {
        return Math.abs(temp1 - temp2).toFixed(2);
    }

    const calcAverageTemp = (temp1, temp2) => {
        return ((temp1 + temp2) / 2).toFixed(2);
    }

    const handleError = () => {
        setError("Unable to fetch weather data.");
        setWeatherData1(null);
        setWeatherData2(null);
    }

    return (
        <div className="weather-container">
            <h1>Weather app</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Enter town"
                />
                <button className="search-button" onClick={fetchWeather}>Search</button>
            </div>

            <div className="results">
                {error && (
                    <div className="error">
                        <h2>{error}</h2>
                    </div>
                )}
            </div>

            <div className="results">
                {weatherData1 && (
                    <div className="card">
                        <h2>Open weather</h2>
                        <p>{weatherData1.weather[0].description}</p>
                        <p>Temperature: {weatherData1.main.temp} °C </p>
                        <p>Feels like: {weatherData1.main.feels_like} °C</p>
                        <p>Wind: {weatherData1.wind.speed} m/s</p>
                    </div>
                )}
                {weatherData1 && weatherData2 && (
                    <div className="card comparison">
                        <h2>Comparison for {weatherData2.location.name}, {weatherData2.location.country} </h2>
                        <p>Temp difference: {calcTempDifference(weatherData1.main.temp, weatherData2.current.temp_c)} °C</p>
                        <p>Temp average: {calcAverageTemp(weatherData1.main.temp, weatherData2.current.temp_c)} °C</p>
                    </div>
                )}
                {weatherData2 && (
                    <div className="card">
                        <h2>WeatherApi</h2>
                        <p>{weatherData2.current.condition.text}</p>
                        <p>Temperature: {weatherData2.current.temp_c} °C</p>
                        <p>Feels like: {weatherData2.current.feelslike_c} °C</p>
                        <p>Wind: {weatherData2.current.wind_kph} km/h</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherApp;