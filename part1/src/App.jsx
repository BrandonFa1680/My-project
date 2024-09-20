const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const age = 10
  const name = "Brandon"
  return (
    <>
      <p>Grettings</p>
      <Hello name={name} age={age} />
    </>
  )
}
export default App
