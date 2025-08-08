const Header = ({name}) => {
  console.log(name)
  return (
    <h2>{name}</h2>
  )
}

const Total = ({parts}) => {
    const total = parts.reduce((acc,curr)=> acc+curr.exercises,0)
    return (
        <div>
            <p><b> total of {total} exercises</b></p>
        </div>
    )
}

const Part = ({name,exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  //console.log(parts)
  return (
    <div>
      {parts.map((p)=>{
        return(
        <div key={p.id}>
          {console.log(p)}
          <Part name={p.name} exercises={p.exercises}/>
        </div>
      )})}
    </div>
  )
}




const Course = ({course}) => {
    return (
        <>
            {course.map(c=> (
                <div key={c.id}>
                    <Header name={c.name}/>
                    <Content parts={c.parts}/> 
                    <Total parts={c.parts}/>   
                </div>
            ))}            
        </>
    )
}

export default Course