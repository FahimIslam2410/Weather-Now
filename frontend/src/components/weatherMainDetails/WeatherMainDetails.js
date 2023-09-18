import './WeatherMainDetails.css'

function WeatherMainDetails(props) {


  return (
    <div className='weatherMainDetailsContainer'>
      <div className='temp'>{Math.floor(props.temp)}°C</div>
      <div className='name'>{props.name}</div>
      <div className='feelsLikeContainer'>
        <div className='feelsLikeTag'>Feels Like:</div>
        <div className='feelsLike'>{Math.floor(props.feels_like)}°C</div>
      </div>

    </div>
  )
}

export default WeatherMainDetails


