import { useState } from "react";

const AddItems = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      item: "Mango",
      price: 899,
      discount :255, 
      quantity: 1,
    },
    {
      id: 2,
      item: "Banana",
      price: 2499,
      discount :255, 
      quantity: 1,
    },
    {
      id: 3,
      item: "Kiwi",
      price: 100,
      discount :25, 
      quantity: 1,
    },
    {
      id: 4,
      item: "Watermelon",
      price: 500,
     
      quantity: 1,
    },
  ]);




    const addItems = (id) => {
    const  qtyValue = products.map((item) => item.id === id ?{ ...item, quantity: item.quantity+1 }:item);
    setProducts(qtyValue);
     };

    const subItems = (id) => {
        const qtyValueDec = products.map((item) => item.id === id ?{ ...item, quantity: item.quantity-1 }:item);
        setProducts(qtyValueDec);
         };

     const handleRemove = (id) => {
         const removeItems = products.filter((item) => item.id !== id )
         setProducts(removeItems)
     }
    
   const newItems = products.map((item) => item.price)
   const summation = newItems.reduce((acc , value) => acc + value)
   console.log(summation)

  return (
    <main>
      <h2>Basket App</h2>
      <ul>
        {products.map((item) => (
       <div key={item.id}>
              <li
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
              width: "400px",
            }}
            key={item.id}
          >
            <h3>{item.item}</h3>
            <p> Rs . {item.price}</p>
            <p> QTY : {item.quantity}</p>
            <button onClick={() => addItems(item.id)}> + </button>
            <button onClick={() => subItems(item.id)}> - </button>
            <button onClick={() => handleRemove(item.id)}> Remove </button>
          </li>
       </div>
        ))}
        <div style = {{border : "1px solid black"}}>
          <h2>Cart Details</h2>
          <p> Price :  </p>
         
        </div>
      </ul>
    </main>
  );
};

export default AddItems;