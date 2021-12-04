import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        console.log("hello")
    })

    function handleClick(){
    
       const newCounter = counter + 1;
       setCounter(newCounter)
       console.log(newCounter)
    }
    return (
        <main>
            <h2> Simple Counter : {counter} </h2>
            <button onClick = {handleClick}> + </button>

        </main>
    )
}

export default Counter
