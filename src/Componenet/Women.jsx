import React from 'react';
import { NavLink } from 'react-router-dom';
import all_product from '../Componenet/Assets/all_product';
import MenImg from '../Componenet/Assets/banner_women.png';
function Kids() {
  
  let imgData=all_product;

  return (
    <>
      <div className='banner-w'>
        <img src={MenImg} alt="" />
      </div>
      <section>
                <div className="pop-women-img">
            <div className="pop-women2-img">
              
                 {imgData.map((img) => (
                  img.category === "women" && (
                    <div key={img.id} className="product-img">
                      <img src={img.image} alt="" />
                      <div className="details">
                        <p>{img.name}</p>
                        <div className="price">
                          <span className="new">$ {img.new_price}</span>
                          <span className="old">${img.old_price}</span>
                        </div>
                        <NavLink to={`/product/${img.id}`}>
                    View Product
                  </NavLink>
                      </div>
                    </div>
                  )
                ))}
              


                          </div>
                         
                    </div>
                  </section>
    </>
  );
}

export default Kids
