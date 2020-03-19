import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, name}) => {
  return <button onClick={handleClick}>{name}</button>
}

const Statistics = ({name, good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good + (bad * -1)) / all
  const positive = parseFloat((good / all) * 100)

  if (all === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <h2>{name}</h2>
        <table>
          <tbody>
            <Statistic text={"good"} value={good} />
            <Statistic text={"neutral"} value={neutral} />
            <Statistic text={"bad"} value={bad} />
            <Statistic text={"all"} value={all} />
            <Statistic text={"average"} value={average} />
            <Statistic text={"positive"} value={`${positive} %`} />
          </tbody>
        </table>
      </div>
    )
  }
}

const Statistic = ({text, value}) => <tr><td>{`${text} ${value}`}</td></tr>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} name={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} name={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} name={"bad"} />
      <Statistics name="statistics" good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
