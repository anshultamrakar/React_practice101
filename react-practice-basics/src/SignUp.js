import React, { useState } from 'react';
const SignUp = () => {
const [userAge, setUserAge] = useState(0)
const [result , setResult] = useState(0)

function handleClick(){
    if (userAge <= 18){
        setResult("Error the age should not be less than 18")
    }else {
        setResult("Yay! you are good to go ")
    }
}

    return (
        <main>
          <h2> User Age </h2>
          <input
          type = "number"
          placeholder = " Enter the user age "
          onChange = {e => setUserAge(e.target.value)}
          />
          <br/>
          <button onClick = {handleClick}> Check age </button>
          <p>{result}</p>
        </main>
    )
}

export default SignUp
