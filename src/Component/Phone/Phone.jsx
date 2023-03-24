
import Count from '../Count/Count';
import SingleData from '../SingleDataRemove/SingleData';

const Phone = (props) => {
      
    const{image, phone_name, brand, slug}=props.phone;
    return (
        
        <div className='text-center shadow-xl mx-full'>
            <img className='text-center mx-auto' src={image} alt='' />
            <h3>Name: {phone_name}</h3>
            <p>Brand: {brand}</p>
            <p>Phone Model:  {slug}</p>
            <Count></Count>
            <SingleData></SingleData>
        </div>
            
       
        
    );
};

export default Phone;