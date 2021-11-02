import React, { useState } from 'react';

const DarkMode = () => {

    const [darkMode ,setDarkMode] = useState(false)
    return (
        <main style = {{backgroundColor: "black"}}>
            <h3> Dark mode Functionality </h3>
            <button> Toggle </button>
        </main>
    )
}

export default DarkMode
