import { useState } from 'react'
import "../index.css"


function UseStates() {
  const users = [
    { id: 1, name: "Ali", age: 22 },
    { id: 2, name: "Ahmed", age: 25 },
    { id: 3, name: "Sara", age: 21 }
  ];
  let [state,setState] = useState(users)
  console.log(state);

  return (
    <>
    <p>hello world</p>
    {
      state.map((sta)=>{
        return (
        <div id='card' className='bg-red-500' key={sta.id}>
          <h1>{sta.name}</h1>
          <h2>{sta.age}</h2>
        </div>
        )
      })
    }

    <p>WHY WE NOT USE REGULAR VARIABLES FOR CHANGES IN UI : The value increases in the console because the function is executed and the variable is updated in memory, but the User Interface is not updated because React does not re-render the component when a regular variable changes. it uses State variables for making changes in UI and storing data .</p>
    </>
  )
}

export default UseStates
