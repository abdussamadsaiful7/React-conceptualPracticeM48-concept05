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
            <div className='my-8 mx-auto shadow-lg py-5'>
                <h2 className='text-4xl font-bold'>Welcome To Phone Bazar</h2>
                <h5 className='text-2xl'>Total iphone list: {phones.length}</h5>
            </div>
            
           <div className='grid gap-6 grid-cols-3 text-center'>
                {
                 phones.map(phone =><Phone phone={phone}key={phone.slug}></Phone>)
                }

           </div>
                <button className='rounded-lg w-24 py-2 bg-blue-500 text-white hover:text-blue-500 hover:bg-white mt-4' onClick={removeHandler}>Remove all</button>
           
        </div>
    );
};



export default Phones;