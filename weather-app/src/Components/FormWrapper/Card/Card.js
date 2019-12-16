import React from 'react';

const Card = (props) =>{
   const weather = props.weatherObj;
   console.log(weather);
    if(weather.cod ==="404" || weather.cod === "400"){
        return( <div>
            <h2>Unfortunetly we don't have information on your location</h2>
        </div>) 
    } 
    const location = weather.name;
    const temperature = Math.floor(weather.main.temp - 273.15);
    const tempFeelsLike = Math.floor(weather.main.feels_like - 273.15);
    const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    console.log()
    return(
            <div>
                <h2>{location}</h2>
                <img alt="weather" src={icon}></img>
                <p>Current temperature:{temperature}&#176;C</p>
                <p>Feels Like:{tempFeelsLike}&#176;C</p>
            </div>
        );;
}
export default Card;