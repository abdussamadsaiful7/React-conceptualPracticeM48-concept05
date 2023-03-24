import React, { useState } from 'react';

const Count = () => {
    const [value, setValue] = useState(0)

    // নিয়ম-১
    // const addHandler = () =>{
    //     setValue(value+1);
    // }

    // নিয়ম-২
    // onClick={()=>{setValue(value + 1)}}

    const removeHandler = () =>{
        if(value> 0){
            setValue(value - 1);
        }
    }
  
    return (
        <div className='flex mx-auto place-content-center gap-3 my-4'>
           <button class="rounded-md w-14 bg-blue-500 text-white hover:text-blue-500 hover:bg-white" 
           onClick={()=>{setValue(value + 1)}}>Plus</button>
           <h3>{value}</h3> 
           <button class="rounded-md w-14 bg-blue-500 text-white hover:text-blue-500 hover:bg-white"  
           onClick={removeHandler}>Minus</button> 
        </div>
    );
};

export default Count;