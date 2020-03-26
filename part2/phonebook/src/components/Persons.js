import React from 'react'

const Persons = ({ filterTerm, persons, remove }) => {

  const filterList = () => {
    const filter = filterTerm.toLowerCase()
    return persons
        .filter(({name}) => name.toLowerCase().indexOf(filter) >= 0)
        .map(({id, name, number}) => {
          return (
            <li key={id}>
              {name} {number}
              <button onClick={() => remove(id)}>Delete</button>
            </li>
          )
        })
  }

  return <ul>{filterList()}</ul>
}

export default Persons
