import React, { useEffect, useState } from 'react'
import CountryList from './CountryList'
import Detail from './Detail'
import Filter from './Filter'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ detail, setDetail ] = useState('')
  const [ weather, setWeather ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const getWeather = (city) => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: city
    }
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => setWeather(response.data))
  }

  const handleClick = (country) => {
    setWeather('')
    setDetail(country)
    getWeather(country.capital)
  }

  const listOfCountries = () => {
    return countries.filter(
      ({name}) =>
      name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    )
  }

  const showList = () => {
    if (listOfCountries().length > 10) {
      return <div>Too many</div>
    } else if (listOfCountries().length > 1) {
      return <CountryList countries={listOfCountries()} handleClick={handleClick} />
    } else if (listOfCountries().length === 1) {
      const country = listOfCountries()[0]
      setDetail(country)
      return <Detail country={country} />
    } else {
      return <div>No matches</div>
    }
  }

  return (
    <div>
      <Filter handleChange={(e) => setFilter(e.target.value)} value={filter} />
      {showList()}
      {detail ? <Detail country={detail} weather={weather} /> : null}
    </div>
  )
}

export default App
