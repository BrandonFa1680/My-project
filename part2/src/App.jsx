import Course from "./Components/Course"
import Filter from "./Components/Filter"
import { useState } from "react"
import PersonForm from "./Components/PersonForm"
import Persons from "./Components/Persons"
// 2.1 infocourse paso 6
/* const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
} */

//2.2 infocourse paso 7
//You could see all of file about the old components
/* const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
} */

//2.3 infocourse paso 8: ya esta resuelta en la 2.2
//2.4 infocourse paso9
/* const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {course.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
} */

//2.5 I applicate this form in the start of the exercises, all of my components are in the components field

// according to the exercise guide, from now on I'll send my complete exercises


//2.6 - 2.10
/* const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewPerson] = useState({})
  const [filter, setFilter] = useState("")

  const filterPerson = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handleChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value
    });
  }

  const addPersons = (event) => {
    event.preventDefault()

    const personToAdd = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase())

    if (personToAdd) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      const numberExists = persons.find(person =>
        person.number === newPerson.number
      );
      if (numberExists) {
        alert(`The number ${newPerson.number} is already in use`)
      } else {
        setPersons(persons.concat(newPerson))
        setNewPerson({ name: "", number: "" });
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={(e) => setFilter(e.target.value)} value={filter} />
      <h2>Add new</h2>
      <PersonForm onSubmit={addPersons} onChange={handleChange} value={persons} />
      <h2>Numbers</h2>
      <Persons persons={filterPerson} />
    </div>
  )
} */


export default App