import React from 'react'

const WeatherDetail = ({city, weather}) => {
  const current = weather.current
  const { temperature, weather_descriptions,
    weather_icons, wind_dir, wind_speed } = current
  return (
    <div>
      <h3>Weather in {city}</h3>
      <p><strong>Tempurature: </strong> {temperature} Celcius</p>
      <img alt={weather_descriptions[0]} src={weather_icons[0]} />
      <p><strong>Wind:</strong>{wind_speed} mph going {wind_dir}</p>
    </div>
  )
}

const Detail = ({ country, weather }) => {
  const {capital, flag, languages, name, population} = country

  return (
    <div>
      <h2>{name}</h2>
      <div>Capital: {capital}</div>
      <div>Population: {population}</div>
      <h3>Languages</h3>
      <ul>
        {languages.map(({iso639_2, name}) => <li key={iso639_2}>{name}</li>)}
      </ul>
      <img alt="flag" src={flag} style={{width: '120px'}}/>
      {weather && <WeatherDetail city={capital} weather={weather} />}
    </div>
  )
}

export default Detail
