import React from 'react';

function Keypad() {
    function pass(){
        console.log("Entering password...")
    }
  return (
    <div>
    <input type="password" name="password" placeholder="Enter your password" onChange={pass}/>
    </div>
  )
}

export default Keypad;