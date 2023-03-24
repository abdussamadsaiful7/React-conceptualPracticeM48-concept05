import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';


const Phones = () => {

    const removeHandler = () =>{
        setPhones([]);
    }

    const [phones, setPhones] = useState([]);
   

    useEffect(()=>{
        fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res=>res.json())
        .then(data => setPhones(data.data)
        )
    },[])
    return (
        <div>
            <h3>Welcome To Phone Bazar</h3>
            <h5>Total iphone list: {phones.length}</h5>

            {
            phones.map(phone =><Phone phone={phone}key={phone.slug}></Phone>)
            }

            <button onClick={removeHandler}>Remove all</button>
           
        </div>
    );
};



export default Phones;