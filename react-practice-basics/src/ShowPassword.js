import React, { useState } from 'react';
const ShowPassword = () => {
    const [showPass , setShowPass] = useState(false)
    const [showBtn , setShowBtn] = useState(false)


    function toggleVisibility(){
            setShowPass(showPass ? false : true)
            setShowBtn(showBtn ? false : true )
    } 
       
    return (
        <main>
            <h2> Show Password functionality </h2>
            <input
            type = {showBtn  ? "text" : "password"}

            placeholder = "Enter the password"
            onChange = {(e) => console.log(e.target.value)}
            />
            <button onClick = {toggleVisibility}
         
            > {showBtn ? "Hide button" : "show button"} </button>
        </main>
    )
}

export default ShowPassword
