import React, { useState } from 'react';

const PasswordMatcher = () => {


    const [passwordOne , setPasswordOne] = useState(0)
    const [passwordTwo , setPasswordTwo] = useState(0)
    const [result , setResult] = useState(0)

function clickHandler(){
   if (passwordOne === passwordTwo){
      setResult("Yay! you are good to go")
   }else {
      setResult("Error the password does not match ")
   }
}

    return (
        <main>
            <h2> Lets match the password </h2>
            <input
            type = "text"
            placeholder = "Enter the password1"
            onChange = {(e) => setPasswordOne(e.target.value , "One")}
            />
            <br/>
            <input
            type = "text"
            placeholder = "Enter the password2"
            onChange = {(event) => setPasswordTwo(event.target.value, "Two")}
            />
               <br/>
            <button onClick = {clickHandler}> Match the password </button>
            <p>{result}</p>
        </main>
    )
}

export default PasswordMatcher
