import React, { useState } from 'react';

const DisableSubmit = () => {
const [disable, setDisable]  = useState(false)
   
    
    function handleSubmit(){
        setDisable(true)
      
    }


    return (
        <main>
            <h2> Disable Submit </h2>
            <input
            type = "text"
            placeholder = "Enter the password "
            />
            <br/>
            <button disabled = {disable} onClick = {handleSubmit}> Submit </button>
        </main>
    )
}

export default DisableSubmit
