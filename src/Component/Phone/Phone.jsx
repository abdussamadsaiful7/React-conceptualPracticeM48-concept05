import React, { useState } from 'react';
import Count from '../Count/Count';

const Phone = (props) => {
    // const [phone, setPhone] =useState([]);

    // const removeSingleHandler =(slug) =>{
    //     console.log(slug)
    //     const filterPhone = phone.filter((d)=>{
    //         d.slug !== slug;
    //         setPhone(filterPhone);
    //     })
    // }

    const{image, phone_name, brand, slug}=props.phone;
    return (
        <div>
            <div>
                <img src={image} alt='' />
                <h3>Name: {phone_name}</h3>
                <p>Brand: {brand}</p>
                <p>Phone Model:  {slug}</p>
                <Count></Count>
                <button>Remove Card</button>
            </div>
            
        </div>
        
    );
};

export default Phone;