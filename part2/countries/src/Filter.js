import React from 'react'

const Filter = ({handleChange, value}) => {
  return (
    <div>
      <label>find countries:  </label>
      <input onChange={handleChange} value={value} />
    </div>
  )
}

export default Filter
