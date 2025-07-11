//part1 y part2
/*const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
const Part = ({part,exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}
const Content = ({part1,exercises1,part2,exercises2,part3,exercises3}) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1}
                part2={part2} exercises2={exercises2}
                part3={part3} exercises3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}*/

//part3, part4, part5
/*const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
const Part = ({name,exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}
const Content = ({part1,part2,part3}) => {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}*/


/*const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
const Part = ({name,exercises}) => {
  //console.log(name,exercises)
  return (
    <p>{name} {exercises}</p>
  )
}
const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}*/


const Header = ({course}) => {
  console.log(course)
  return (
    <h1>{course.name}</h1>
  )
}
const Part = ({name,exercises}) => {
  //console.log(name,exercises)
  return (
    <p>{name} {exercises}</p>
  )
}
const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
