import React from 'react'

const Notification = ({message, style}) => 
  message !== null ? <div className="error" style={style}>{message}</div> : null

export default Notification
