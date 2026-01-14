import { useState } from "react";
import Button from "./button";

function Bg_changer() {
    let [color , setColor] = useState("")
  return (
    <>
      <div style={{backgroundColor : color}} className=" w-screen h-screen text-white box-border">
        <div className="bar bg-white flex justify-center gap-3 rounded-xl p-4 fixed bottom-4 w-200 text-black ml-62">

          <div className="flex justify-center items-center w-full gap-2">
            <Button content="blue" setColor={setColor}/>
            <Button content="red" setColor={setColor}/>
            <Button content="yellow" setColor={setColor}/>
            <Button content="green" setColor={setColor}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bg_changer;
