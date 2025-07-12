import { useState } from 'react'

//part6, part7, part8, part9 y part10
const Button = ({onClick, text}) => {
  return (
      <button onClick={onClick}>
        {text}
      </button>
  )
}

const StatisticLine = ({text, value}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad,all,average,positive}) => {
  if(all === 0){
    return (
      <table>
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
      </table>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }
  const average = ((good-bad)/(good+neutral+bad)).toFixed(1)
  const positive = (((good)/(good+neutral+bad))*100).toFixed(1)+" %"

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={"good"}/>
      <Button onClick={handleNeutral} text={"neutral"}/>
      <Button onClick={handleBad} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good+bad+neutral} average={average} positive={positive}/>
    </div>
  )
}

export default App
