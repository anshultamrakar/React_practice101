import React, { useState } from 'react';

const CharacterCounter = () => {

    const [words , setWords] = useState(280)
    const [result , setResult] = useState(280)


    function changeHandler(e){
        const newValue = e.target.value.length
        setResult( words - newValue)
    }
    return (
        <main>
            <h2>Character Counter </h2>
            <input
            type = "text"
            placeholder = " Whats your today's post "
            onChange = {changeHandler}
            />
            <p> Character limits : {result} </p>
        </main>
    )
}

export default CharacterCounter
