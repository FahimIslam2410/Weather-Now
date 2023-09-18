import './WeatherSecondaryDetails.css'
import windIcon from '../assets/wind.svg'
import humidityIcon from '../assets/humidity.svg'

function WeatherSecondaryDetails(props) {
  return (
		<div className="WeatherSecondayDetailsContainer">
			
      <div className="windContainer" >
        <img className="windImage" src={windIcon} alt="" />
        <div className="wind">{props.wind}MPH</div>
      </div>
  
      <div className="humidityContainer">
        <img className="humidityImage" src={humidityIcon} alt="" />
        <div className="wind">{props.humidity}%</div>
      </div>
			
    </div>
  )
}

export default WeatherSecondaryDetails