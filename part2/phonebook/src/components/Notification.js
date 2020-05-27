import React from 'react'

const Notification = ({message, style}) => {
  if(!message) {
    return null
  }

  return <div className="error" style={style}>{message}</div>
}

export default Notification
