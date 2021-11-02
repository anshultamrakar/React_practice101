import React, { useState } from 'react';

const AddToCart = () => {

    const [product , setProduct] = useState([
        {
            id : 1, 
            name : "Cake"
        },
        {
            id : 2,
            name  : "Cookies"
        },
        {
            id :3, 
            name : "PanCake"
        }
    ])
    const [cart , setCart] = useState([])
    const [count , setCount] = useState(1)

    const handlerClick = (item) => {
       setCart([...cart, item])
    }


    return (
        <main>
            <h2> Add to cart </h2>
             <ul>
                 {product.map((item) => (
                     <li key = {item.id}>
                         <label>{item.name}</label>
                         <button onClick = {() => handlerClick(item)}> Add to cart </button>
                     </li>
                 ))}
             </ul> 

             <h3> Cart </h3>
             <ul>
                 {cart.map((item) => (
                     <li key = {item.id}>
                         <label>{item.name}</label>
                        
                     </li>
                 ))}
             </ul> 
        </main>
    )
}

export default AddToCart
