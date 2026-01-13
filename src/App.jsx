
import { useState } from 'react'

function App() {
  let [state , setState] = useState(0);

  let increase = () => {
    console.log(state);
    setState(state => state+1);
    setState(state => state+1);
    setState(state => state+1);
    console.log(state);
  }

  let decrease = () => {
    console.log(state);
    setState(state-1);
    console.log(state);
  }


  return (
    <>
    <h1 className='text-5xl m-5'>{state}</h1>
    <button className='border cursor-pointer border-amber-950 block m-4 p-4 rounded-2xl' onClick={increase}>increase</button>
    <button className='border cursor-pointer border-amber-950 block m-4 p-4 rounded-2xl' onClick={decrease}>decrease</button>
    </>
  )
}

export default App

