import React, { useState } from 'react';

const AlphanumPassword = () => {
const [password, setPassword] = useState("")
const [result , setResult ] = useState('')

function handleClick(){
             if(password.match(/[^0-9a-z]/i))
           setResult("Only letters and digits allowed!");
        else if(!password.match(/\d/))
           setResult("At least one digit required!");
        else if(!password.match(/[a-z]/i))
           setResult("At least one letter required!");
        else{
           setResult("process the password")
        }
        }

    return (
        <main>
            <h2>Is Alphanumeric password</h2>
            <input
            type = "text"
            placeholder = "Enter the password"
            onChange = {(e) => setPassword(e.target.value)}
            />
            <br/>
            <button onClick = {handleClick}> Check password </button>
       <p>{result}</p>
        </main>
    )
}

export default AlphanumPassword
