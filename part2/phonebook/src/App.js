import React, { useEffect, useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterTerm, setFilterTerm ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const create = (name, number) => {
    const personObject = { name, number }
    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setError(false)
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {setMessage(null)}, 3000)
      })
      .catch(error => {
        const message = error.response.data.error
        console.log(message)
        setError(true)
        setMessage(message)
      })
  }

  const remove = id => {
    const removePerson = persons.find(p => p.id === id)
    const result = window.confirm(`Delete ${removePerson.name}`)
    const updatedPersons = persons.filter(p => p !== removePerson)
    if (result) {
      personService.remove(id)
        .then(response => {
          setPersons(updatedPersons)
        })
        .catch(error => {
          setError(true)
          setMessage(`${removePerson.name} has already been removed`)
          setTimeout(() => { setMessage(null) }, 3000)
          setPersons(updatedPersons)
        })
    }
  }

  const update = (person, number) => {
    const result = window.confirm(`${person.name} already exist, replace number?`)
    if(result) {
      const personObject = { ...person, number: number }
      personService.update(person.id, personObject)
        .then(updatePerson => {
          setPersons(persons.map(p => updatePerson.name === p.name
            ? updatePerson : p)
          )
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const submitForm = (event) => {
    event.preventDefault()
    const currentPerson = persons.find(person => person.name === newName)
    currentPerson
      ? update(currentPerson, newNumber) : create(newName, newNumber)
  }

  const success = { borderColor: 'green' }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        label="filter show with"
        handleChange={(event) => setFilterTerm(event.target.value)}
        filter={filterTerm}/>
      <Notification message={message} style={error ? undefined : success} />
      <h3>add a new</h3>
      <PersonForm
        handleNameChange={(event) => setNewName(event.target.value)}
        nameValue={newName}
        handleNumberChange={(event) => setNewNumber(event.target.value)}
        numberValue={newNumber}
        submit={(event) => submitForm(event)}/>
      <h3>Numbers</h3>
      <Persons filterTerm={filterTerm} persons={persons} remove={remove}/>
    </div>
  )
}

export default App
