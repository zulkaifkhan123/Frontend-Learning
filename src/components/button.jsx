import React from 'react'

function Button(props) {
  return (
    <>
    <button onClick={()=> props.setColor(props.content)} style={{backgroundColor : props.content}} className="outline-none rounded px-3 py-1 text-white">{props.content}</button>
    </>
  )
}

export default Button

