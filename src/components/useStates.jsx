import React, { useState } from 'react'

function UseStates() {
    let [state,setState] = useState(0)
    let increase = () => setState(state + 1);
  return (
    <>
    <h1>{state}</h1>
    <button onClick={increase}>increase</button>
    <br />
    <br />
    <p>The value increases in the console because the function is executed and the variable is updated in memory, but the User Interface is not updated because React does not re-render the component when a regular variable changes.</p>
    </>
  )
}

export default UseStates
