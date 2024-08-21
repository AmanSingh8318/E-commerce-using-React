// import './Header.css'
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Arrow from "../Componenet/Assets/arrow.png"
import exclusiveImg from '../Componenet/Assets/exclusive_image.png'
import HelloIcon from '../Componenet/Assets/hand_icon.png'
import HeroImg from '../Componenet/Assets/hero_image.png'
import data_product from "./Assets/data_product"
import new_collections from "./Assets/new_collections"
import "./Home.css"
function Shop() {
  const [email,setemail]=useState("");

    const imgRes=data_product;
    const newCollection_data=new_collections;
    const navigate=useNavigate();
    
    function handleCheck(){
      navigate('/Women')
    }

    function subscribe(){
      if (email==="") {
        alert("Please enter the email to subscribe")
      }else {
        setTimeout(()=>{
          alert("Thank you for subscribing")
          setemail("")
            navigate('/')
        },1000)
      }
      
      console.log(email)
    }
  return (
   <>
   <div className="main">
        <div className="text">
            <p>New arrivals only</p>
            <h3>  new     <img src={HelloIcon} alt="" /> <br />collections <br /> for everyone</h3>
            <button className="btn-m">Latest collection   <img src={Arrow} alt="" /></button>
        </div>
        <div className="img">
           <img src={HeroImg} alt="" />
        </div>
   </div>
                  <section>
                    <div className="pop-women">
                          <h2>POPULAR IN WOMEN</h2>
                          <div className="pop-women2">
                          {imgRes.map((img)=>(
                            <div key={img.id} className="product">
                              <img src={img.image} alt="" />
                                <div className="details">
                                    <p >{img.name}</p>
                                    
                                            <div className="price">
                                            <span className="new">$ {img.new_price}</span>
                                            <span className="old">${img.old_price}</span>
                                            </div> 
                                            <NavLink to={`/product/${img.id}`}>
                                            <p className="view">View Product</p>
                                                               </NavLink>
                                              
                                </div>
                            </div>


                          ))}
                          </div>
                         
                    </div>
                  </section>

                  <section>
                    <div className="exclusive-offer">
                      <div className="ex-text">
                            <h2>Exclusive</h2>
                            <h3>Offers For You</h3>
                            <p> ONLY ON BEST SELLERS PRODUCTS</p>
                            <button className="ex-btn" onClick={handleCheck}>Check now</button>
                      </div>
                      <div className="ex-img">
                        <img src={exclusiveImg} alt="" />
                      </div>
                    </div>
                  </section>

          <section>
            <div className="new-collection">
             <h2> NEW COLLECTIONS</h2>
                <div className="new-collection-2">
                  {newCollection_data.map((img)=>(
                    <div key={img.id} className="new-product">
                      <img src={img.image} alt="" />
                      <div className="new-details">
                        
                          <p>{img.name}</p>
                          <div className="new-price">
                            <span className="new-new">$ {img.new_price}</span>
                            <span className="new-old">$ {img.old_price}</span>
                          </div>
                      </div>
                      <NavLink to={`/product/${img.id}`}>
                    View Product
                  </NavLink>
                    </div>
                  ))}
                </div>
            </div>
          </section>

          <section>
            <div className="offer-email">
              <h2>Get Exclusive Offers On Your Email</h2>
              <p>Subscribe to our newsletter and stay update</p>

              <div className="form-rel">
              <form >
                <input type="email"
                placeholder="Your email id" 
                required="true"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                />
              </form>
                  <button className="btn-sub" onClick={subscribe}>Subscribe</button>
              </div>
              
            </div>
          </section>
   </>
  )
}

export default Shop
