import React, {useState, useEffect} from 'react'
import clearLogo from "../assets/clear-day.svg";
import partlyCloudLogo from '../assets/partly-cloudy-day.svg'
import cloudyLogo from '../assets/cloudy.svg'
import scatteredRainLogo from '../assets/drizzle.svg'
import rainLogo from '../assets/rain.svg'
import thunderLogo from '../assets/thunderstorms-rain.svg'
import snowLogo from '../assets/snow.svg'
import mistLogo from '../assets/mist.svg'


function WeatherLogo(props) {
    const [weatherIcon, setWeatherIcon] = useState();

	useEffect(() => {
		if (props.icon === '01d' || props.icon === '01n') {
				//Sunny weather
					setWeatherIcon(clearLogo);
			}
		else if (props.icon === '02d' || props.icon === '02n') {
			//Partly Sunny weather
				setWeatherIcon(partlyCloudLogo);
			}
		else if (props.icon === '03d' || props.icon === '03n') {
			//Cloudy weather
				setWeatherIcon(cloudyLogo);
			}
		else if (props.icon === '04d' || props.icon === '04n') {
			//Cloudy weather
				setWeatherIcon(partlyCloudLogo);
			}
		else if (props.icon === '09d' || props.icon === '09n') {
			//Scattered showers weather
				setWeatherIcon(scatteredRainLogo);
			}
		else if (props.icon === '10d' || props.icon === '10n') {
			//Rain weather
				setWeatherIcon(rainLogo);
			}
		else if (props.icon === '11d' || props.icon === '11n') {
			//Thunderstorm weather
				setWeatherIcon(thunderLogo);
			}
		else if (props.icon === '13d' || props.icon === '13n') {
			//Snow weather
				setWeatherIcon(snowLogo);
			}
		else {
			//mist
				setWeatherIcon(mistLogo);
			}
		
		
    }, [props.icon]);

    return (
        <div>
            <img className="weatherIcon" src={weatherIcon} alt="" />
        </div>
    );
}

export default WeatherLogo;