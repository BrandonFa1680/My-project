import { useEffect, useState } from 'react'
import Filter from './components/Filter' 
import Form from './components/Form'
import Person from './components/Person'
import personservice from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(()=>{
    personservice
      .getAll()
      .then(person=>{
        setPersons(person)
      })
  }, [])

  const filteredPerson = persons.filter(person => person.name.toLocaleLowerCase().includes(filterName))

  const updatePerson = (id,person) => {
    if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`))
    {
      const currentPerson = persons.find(p => p.id ===id)
      const changePerson = {...currentPerson, number: person.number}

      personservice
        .update(id,changePerson)
        .then(returnedPerson =>
          setPersons(persons.map( p => p.id !== id ? p : returnedPerson))
        )
    }
    setNewName('')
    setNewNumber('')
  }
  
  const addPerson = (e) => {
    e.preventDefault()

    const nameExists = persons.find(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())

    const personObject = {
      name: newName,
      number: newNumber
    }

    if(nameExists){
      updatePerson(nameExists.id,personObject)
    } else {
      personservice
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id,person) =>{
    if(window.confirm(`Delete ${person.name}`))
    {
      personservice
        .remove(id)
        .then( ()=> {
          setPersons(persons.filter(p=> p.id !== id))
        })
    }
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
      <Person persons={filteredPerson} onClick={deletePerson}/>
    </div>
  )
}

export default App
