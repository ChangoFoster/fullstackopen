import React from 'react'

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
    .map(part => part.exercises)
    .reduce((previous, next) => previous + next)

  return <p><strong>Number of exercises {total}</strong></p>
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
