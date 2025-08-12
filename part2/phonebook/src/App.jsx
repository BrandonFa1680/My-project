import { useState } from 'react'
import Filter from './components/Filter' 
import Form from './components/Form'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

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
