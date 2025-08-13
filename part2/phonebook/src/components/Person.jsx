const Person = ({persons,onClick}) => {
    return (
        <ul>
        {persons.map(person => 
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={()=>onClick(person.id,person)}>delete</button>
          </li>
        )}
      </ul>
    )
}

export default Person