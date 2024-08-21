import React from 'react';
import { useParams } from 'react-router-dom';
import All_data from '../Assets/all_product';
import { SingleProduct } from '../index';

function Cartsec() {
  const all_imgData = All_data;
  console.log("data", all_imgData);
  const { id } = useParams();
  console.log(id);

  function handleAddToCart() {
    console.log("Add to Cart button clicked");
    alert("button is clicked")
  }

  return (
    <>
    <SingleProduct Addcart={handleAddToCart}/>

      <h2>Product</h2>
    </>
  );
}

export default Cartsec;
