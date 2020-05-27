import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const initVotes = Array
    .apply(null, new Array(props.anecdotes.length))
    .map(Number.prototype.valueOf,0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVotes)

  const randomiser = () => {
    return Math.floor(Math.random() * Math.floor(props.anecdotes.length))
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    return newVotes
  }

  const mostVotesIndex = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <button onClick={() => setVotes(vote())}>Vote</button>
      <button onClick={() => setSelected(randomiser())}>Rando</button>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[mostVotesIndex()]}</p>
      <p>has {votes[mostVotesIndex()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
