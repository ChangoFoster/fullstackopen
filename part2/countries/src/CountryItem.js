import React from 'react'

const CountryItem = ({ country, handleClick }) => {

  return (
    <div>
        {country.name} <button onClick={handleClick}>Show</button>
    </div>
  )
}

export default CountryItem
