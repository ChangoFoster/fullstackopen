import React from 'react'

const PersonForm = ({
  handleNameChange,
  nameValue,
  handleNumberChange,
  numberValue,
  submit
}) => {

  return (
    <form>
      <div>
        <label>name: </label>
        <input onChange={handleNameChange} value={nameValue}/>
        <br />
        <label>number:</label>
        <input onChange={handleNumberChange} value={numberValue}/>
      </div>
      <div>
        <button onClick={submit} type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
