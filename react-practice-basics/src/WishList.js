import { useState } from "react"

const WishList = () => {

    const [wishList , setWishList] = useState(0)

    function clickHandler(){
        console.log("hello")
    }
    return (
        <main>
         <h2>Wish list </h2>
         <input
         placeholder = "Enter the wish"
         />
         <button onClick = {clickHandler}> Add to list </button>
        </main>
    )
}

export default WishList
