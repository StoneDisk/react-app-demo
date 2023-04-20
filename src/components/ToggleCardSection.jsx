import WeatherCard from "./WeatherCard";
import { currentWeather } from "../datasource/weather_data";


function ToggleCardSection() {

    return (
        <section>
            <h2>Toggle Card Section</h2>
            <WeatherCard weatherProps={currentWeather}></WeatherCard>
        </section>
    );
}

export default ToggleCardSection;