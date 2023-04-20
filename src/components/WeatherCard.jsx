function WeatherCard(weatherProps) {
    const {location, temperature, humidity, precipitation, windspeed} = weatherProps.weatherForecast;
    return (
        <article>
            <h3>Weather Forecast for {location}</h3>
            <h4>Temperature (celsius): {temperature + "\u2103"}</h4>
            <h4>Humidity: {humidity}%</h4>
            <h4>Precipitation: {precipitation}%</h4>
            <h4>Wind Speed: {windspeed}km/h</h4>
        </article>
    );
}

export default WeatherCard;