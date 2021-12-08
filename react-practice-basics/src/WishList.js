import {useState} from 'react'

const WishList = () => {

const [wishText , setWishText] = useState('')
const [items , setItems] = useState(["Anshul", "Shalabh", "Divyansh"])


    function handleClick(){
       const listItems = [...items , wishText]
       console.log(listItems)
    }


    return (
        <main>
        <h2>Wishing well</h2>
        <input
        type = "text"
        placeholder = "I wish for"
        value = {wishText}
        onChange = {(e) => setWishText(e.target.value)}
       
        />

        <button onClick = {handleClick}>Add something </button>
        <ul>
            {items.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        </main>
    )
}

export default WishList



