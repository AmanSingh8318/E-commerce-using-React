import React from 'react';
import { useParams } from 'react-router-dom';
import All_data from '../Assets/all_product';
import "../Home.css";


function SingleProduct({Addcart}) {
  
console.log("Addcart name",Addcart);

  const { id } = useParams();
  const img_Data = All_data;
  const product = img_Data.find((item) => item.id === parseInt(id));


  if (!product) {
    return <h3>Invalid</h3>;
  }

  return (
    <>
      <div className='product-main'>
        <div className='produnct-infos'>
          <img src={product.image} alt="product" />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className='price'>New Price: {product.new_price}</p>
          <p className='old-price'>Old Price: {product.old_price}</p>
          <p className='categories'>Categories: {product.category}</p>
        </div>
        <div className='product-btn'>
          <button onClick={Addcart}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
