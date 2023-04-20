import { useState } from "react";
import { currentWeather } from "../datasource/weather_data";
import WeatherCard from "./WeatherCard";


function ToggleCardSection() {
    const [isToggled, setIsToggled] = useState(false);

    function toggleCard() {
        if (isToggled === false) {
            setIsToggled(true);
        } else {
            setIsToggled(false);
        }
    }

    return (
        <section>
            <h2>Toggle Card Section</h2>
            <button type="button" onClick={toggleCard}>Show/Hide Weather Forecast</button>
            {
                (isToggled) ? (
                    <div>
                        <WeatherCard weatherForecast={currentWeather}></WeatherCard>
                    </div>
                ) : (
                    <div>
                        <h3>Weather forcast hidden</h3>
                    </div>
                ) 
            }
        </section>
    );
}

export default ToggleCardSection;