import {useState} from 'react'


const Address = () => {
    const [address , setAddress ] = useState([
        {
            id :1 , 
            description :"1264, Garha choti bajariya near durga mandir , Jabalpur , MP"
        } ,
        {
            id :2, 
            description :"1264, Garha choti bajariya near durga mandir , Jabalpur , MP"
        } ,

    ])
  return (
 <div>
<input
type = "text"
placeholder="What is your address"
/>
<button>Add </button>
</div>
  ) 

 
};

export default Address;
