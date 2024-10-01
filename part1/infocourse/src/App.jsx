import { useState } from 'react'
//1.1
/* const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
      <Header props={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
} */
//1.2
/* const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <Part part={props.part} exercises={props.exercises} />
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
} */
//1.3
/* const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
      <Content part1={part1} part2={part2} part3={part2} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
} */
//1.4
/* const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
} */
//1.5
/* const Header = (props) => <h1>{props.course.name}</h1>
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
} */
//1.6 Unicafe part1
/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const aumento = good + 1;
    setGood(aumento)
  }
  const handleClickNeutral = () => {
    const aumento = neutral + 1;
    setNeutral(aumento)
  }
  const handleClickBad = () => {
    const aumento = bad + 1;
    setBad(aumento)
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
} */

//1.7 unicafe part2

/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const aumentog = good + 1;
    setGood(aumentog)
    setTotal(aumentog + neutral + bad)
  }
  const handleClickNeutral = () => {
    const aumenton = neutral + 1;
    setNeutral(aumenton)
    setTotal(good + aumenton + bad)
  }
  const handleClickBad = () => {
    const aumentob = bad + 1;
    setBad(aumentob)
    setTotal(good + neutral + aumentob)
  }
  const promedio = () => {
    const average = (good - bad) / total
    return average.toFixed(2)
  }
  const positive = () => {
    const porcent = (good / total) * 100
    return porcent.toFixed(3)
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {promedio()}</p>
      <p>positive {positive()}%</p>
    </div>
  )
} */

//1.8 unicafe part3
/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const aumentog = good + 1;
    setGood(aumentog)
    setTotal(aumentog + neutral + bad)
  }
  const handleClickNeutral = () => {
    const aumenton = neutral + 1;
    setNeutral(aumenton)
    setTotal(good + aumenton + bad)
  }
  const handleClickBad = () => {
    const aumentob = bad + 1;
    setBad(aumentob)
    setTotal(good + neutral + aumentob)
  }
  const promedio = () => {
    const average = (good - bad) / total
    return average.toFixed(2)
  }
  const positive = () => {
    const porcent = (good / total) * 100
    return porcent.toFixed(3)
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={promedio()} positive={positive()} />
    </div>
  )
} */

//1.9 unicafe part4

/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const aumentog = good + 1;
    setGood(aumentog)
    setTotal(aumentog + neutral + bad)
  }
  const handleClickNeutral = () => {
    const aumenton = neutral + 1;
    setNeutral(aumenton)
    setTotal(good + aumenton + bad)
  }
  const handleClickBad = () => {
    const aumentob = bad + 1;
    setBad(aumentob)
    setTotal(good + neutral + aumentob)
  }
  const promedio = () => {
    const average = (good - bad) / total
    return average.toFixed(2)
  }
  const positive = () => {
    const porcent = (good / total) * 100
    return porcent.toFixed(3)
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={promedio()} positive={positive()} />
    </div>
  )
} */

//1.10 unicafe part5

/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const StatisticsLine = ({ value, text }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="total" value={total} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const aumentog = good + 1;
    setGood(aumentog)
    setTotal(aumentog + neutral + bad)
  }
  const handleClickNeutral = () => {
    const aumenton = neutral + 1;
    setNeutral(aumenton)
    setTotal(good + aumenton + bad)
  }
  const handleClickBad = () => {
    const aumentob = bad + 1;
    setBad(aumentob)
    setTotal(good + neutral + aumentob)
  }
  const promedio = () => {
    const average = (good - bad) / total
    return average.toFixed(2)
  }
  const positive = () => {
    const porcent = (good / total) * 100
    return porcent.toFixed(3) + "%"
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={promedio()} positive={positive()} />
    </div>
  )
} */

//1.11 unicafe part6

/* const Buttons = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const StatisticsLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="total" value={total} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const aumentog = good + 1;
    setGood(aumentog)
    setTotal(aumentog + neutral + bad)
  }
  const handleClickNeutral = () => {
    const aumenton = neutral + 1;
    setNeutral(aumenton)
    setTotal(good + aumenton + bad)
  }
  const handleClickBad = () => {
    const aumentob = bad + 1;
    setBad(aumentob)
    setTotal(good + neutral + aumentob)
  }
  const promedio = () => {
    const average = (good - bad) / total
    return average.toFixed(2)
  }
  const positive = () => {
    const porcent = (good / total) * 100
    return porcent.toFixed(3) + "%"
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Buttons handleClick={handleClickGood} text="good" />
      <Buttons handleClick={handleClickNeutral} text="neutral" />
      <Buttons handleClick={handleClickBad} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={promedio()} positive={positive()} />
    </div>
  )
} */


export default App
