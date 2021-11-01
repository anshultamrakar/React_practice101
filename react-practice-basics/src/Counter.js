import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)


    function handleClick(){
       const newCounter = counter + 1;
       setCounter(newCounter)
    }
    return (
        <main>
            <h2> Simple Counter : {counter} </h2>
            <button onClick = {handleClick}> + </button>

        </main>
    )
}

export default Counter
