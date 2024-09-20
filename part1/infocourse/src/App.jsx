const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = () => {
  return (
    <div>
      <p>{course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = () => {

  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  )
}

const Total = () => {

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App
