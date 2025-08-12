import { useEffect, useState } from 'react'
import Filter from './components/Filter' 
import Form from './components/Form'
import Person from './components/Person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(()=>{
    axios
      .get("http://localhost:3001/persons")
      .then(response=>{
        setPersons(response.data)
      })
  }, [])

  const filteredPerson = persons.filter(person => person.name.toLocaleLowerCase().includes(filterName))

  const addPerson = (e) => {
    e.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if(nameExists){
      alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterName = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={handleFilterName}/>
      <h3>Add a new</h3>
      <Form onSubmit={addPerson} newName={newName} handleNewName={handleNewName} 
            newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h3>Numbers</h3>
      <Person persons={filteredPerson}/>
    </div>
  )
}

export default App
