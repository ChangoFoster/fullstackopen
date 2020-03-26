import React from 'react'

const Filter = ({label, handleChange, filter}) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} value={filter}/>
    </div>
  )
}

export default Filter
