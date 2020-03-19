import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => <h1>{course.name}</h1>
const Content = ({course}) => {

  return (
    <div>
      {course.parts.map(i => <Part part={i.name} exercises={i.exercises} />)}
    </div>
  )
}
const Part = ({part, exercises}) => <p>{part} {exercises}</p>
const Total = ({course}) => {

  const total = course.parts
    .map(i => i.exercises)
    .reduce((previous, next) => previous + next)

  return <p>Number of exercises {total}</p>
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
