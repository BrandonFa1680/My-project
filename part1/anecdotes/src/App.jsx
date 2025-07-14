import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState({})

  const handleSelected = () =>{
    let num = Math.floor(Math.random()*anecdotes.length)
    setSelected(num)
  }

  const handleVoted = () =>{
    setVoted( prev => ({
      ...prev,
      [selected]: (prev[selected] ||0) +1
    }))
  }

  const getMostAnecdote = () => {
    let maxVoted = 0
    let maxIndex = null

    for (const index in voted) {
      if(voted[index] > maxVoted){
        maxVoted = voted[index]
        maxIndex = NUmber(index)
      }
    }
    return maxIndex != null 
      ? {anecdote: anecdotes[maxIndex], voted:maxVoted}
      : null
  }

  const mostVoted = getMostAnecdote()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {voted[selected] || 0} votes</p>
      <br />
      <button onClick={handleVoted}>vote</button>
      <button onClick={handleSelected}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {mostVoted ? (
        <>
          <p>{mostVoted.anecdote}</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  )
}

export default App