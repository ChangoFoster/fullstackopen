import React from 'react'
import CountryItem from './CountryItem'

const CountryList = ({ countries, handleClick }) => {
  return countries.map(country =>
    <CountryItem
      key={country.alpha3Code}
      country={country}
      handleClick={() => handleClick(country)} />)
}

export default CountryList
