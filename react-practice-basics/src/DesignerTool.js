import React, { useState } from 'react';
const DesignerTool = () => {
    const  [changeColor , setColorChange ] = useState(false)
    const [decreaseSize , setDecreaseSize] = useState(false)

   function changeHandler(){
    if(changeColor){
        return {
           fontSize : "32px" 
        }
     }
     return {}
   }

   function decreaseHandler(){
    if(decreaseSize){
        return {
           fontSize : "8px" 
        }
     }
     return {}
   }




   function changeColorClick(){
    setColorChange(true)
   }

   function changeDecreaseClick(){
    setDecreaseSize(true)
   }

    return (
        <main>
            <h2>
                Small Figma 
            </h2>
            <p style = {changeHandler(), decreaseHandler()} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        <button onClick = {changeColorClick}> Increase +  </button>
        <button onClick = {changeDecreaseClick}> Decrease -  </button>
      
        </main>
    )
}

export default DesignerTool
