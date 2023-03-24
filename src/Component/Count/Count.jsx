import React, { useState } from 'react';

const Count = () => {
    const [value, setValue] = useState(0)

    const addHandler = () =>{
        setValue(value+1);
    }
    const removeHandler = () =>{
        if(value> 0){
            setValue(value - 1);
        }
    }
  
    return (
        <div>
           <button onClick={addHandler}>Plus</button>
           <h3>{value}</h3> 
           <button onClick={removeHandler}>Minus</button> 
        </div>
    );
};

export default Count;