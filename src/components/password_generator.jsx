import React from 'react'
import { useState , useEffect , useCallback , useRef } from 'react'


function PasswordGenerator() {
    let [length , setLength] = useState(8);
    let [allowNumber , setAllowNumber] = useState(false);
    let [allowSpecialCharactors , setallowSpecialCharactors] = useState(false);
    let [password , setPassword] = useState("");
    let refrence = useRef(null);
    let copyPasswordToClipboard = () =>{
      refrence.current.select()
      window.navigator.clipboard.writeText(password);
    }

    let GeneratePassword = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(allowNumber) str += "1234567890"
      if(allowSpecialCharactors) str += "@#$%&"
      for (let i = 1 ; i < length ; i++){
        let random = Math.floor(Math.random() * str.length);
        pass += str.charAt(random);
      }
      setPassword(pass);

    },[length , allowNumber , allowSpecialCharactors])
    
    useEffect(()=>{
      GeneratePassword();
    },[length, allowNumber , allowSpecialCharactors])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={refrence}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={allowNumber}
          id="numberInput"
          onChange={() => {
              setAllowNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={allowSpecialCharactors}
              id="characterInput"
              onChange={() => {
                  setallowSpecialCharactors((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default PasswordGenerator