import { currentWeather } from "../datasource/weather_data";
import WeatherCard from "./WeatherCard";


function ToggleCardSection() {

    return (
        <section>
            <h2>Toggle Card Section</h2>
            <WeatherCard weatherForecast={currentWeather}></WeatherCard>
        </section>
    );
}

export default ToggleCardSection;