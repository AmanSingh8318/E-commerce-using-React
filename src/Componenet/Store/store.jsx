
//   new code      

import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import all_product from "../Assets/all_product";

// Create Context
const StoreContext = createContext({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
  getDefaultCart: () => {},
  notify: () => {},
  totalAmount: () => {},
  login: () => {},
  logout: () => {},
});

                                                        // Notification Functions
                                                        const notify = () => {
                                                          toast("Product Added to the Cart");
                                                        };
                                                        const deleteNotify = () => {
                                                          toast("Product Removed from the Cart");
                                                        };
                                                        const loginNotify = () => {
                                                          toast("Login Successful");
                                                        };
                                                        const logoutNotify = () => {
                                                          toast("Logout Successful");
                                                        };

                                                        const subscribeus=()=>{
                                                          toast("Thank you for subscribing us!")
                                                        };

                                                        const empty_email=()=>{
                                                          toast("Please Enter the valid email !")
                                                        }
                                                        const plsLogin=()=>{
                                                          toast("Please login !");
                                                        }


// Store Provider Component
const StoreProvider = ({ children }) => {


                                        // User State
                                        const [userData, setUserData] = useState(null);

                                        useEffect(() => {
                                          const user = localStorage.getItem('user');
                                          if (user) {
                                            setUserData(JSON.parse(user));
                                          }
                                        }, []);

                                        // Login & Logout Functions
                                        const login = (data) => {
                                          localStorage.setItem('user', JSON.stringify(data));
                                          setUserData(data);
                                          loginNotify();
                                        };

                                        const logout = () => {
                                          localStorage.removeItem('user');
                                          setUserData(null);
                                          logoutNotify();
                                          removeCart();
                                        };

  // Create the default cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
  // Cart State
  const [cartitems, setcartitem] = useState(getDefaultCart());

     const addCart=(id)=>{
        setcartitem((prev)=>{
           let newcart={...prev}

            if (newcart[id]) {
                // product exist in the cart simply increment 
              newcart[id]=newcart[id]+1;
            }else {

              // if the product does not exist add with the qunatity one 
              newcart[id]=1;
            }
            notify();
            return newcart;
        })
     }
    

  // Remove Item from Cart
  const removeCart = (id) => {
    setcartitem((prev) => {
      // store if product exits
      let new_del = { ...prev };

      if (new_del[id] && new_del[id] > 0) {
      //  .. if product exits simply remove one product from tthe products
        new_del[id] = new_del[id] - 1; 
      } else {
        delete new_del[id];  // if single product de;ete it using delte 
      }
      return new_del; 
    });
    deleteNotify(); // Show notification when item is removed
  };
  

  // Calculate Total Amount
  const totalAmount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        total += iteminfo.new_price * cartitems[item];
      }
    }
    return total;
  };

  // Order Success Handler
  const orderSucess = () => {
    if (Object.values(cartitems).some((quantity) => quantity > 0)) {
      setTimeout(() => {
        toast("Order Placed Successfully");
      }, 2000);

      setTimeout(() => {
// Reset cart to default after order
        setcartitem(getDefaultCart());
       window.location.href="/"
            }, 7000);
    } else {
      toast("Your cart is empty! Please buy something.");
    }
  };

  // Return the StoreContext.Provider with values
  return (
    <StoreContext.Provider value={{
      addCart,
      removeCart,
      getDefaultCart,
      cartitems,
      orderSucess,
      totalAmount,
      login,
      logout,
      userData,
      setUserData,
      subscribeus,
      empty_email,
      plsLogin
    }}>
      {children}
      <ToastContainer />   // Notification
    </StoreContext.Provider>
  );
};

// Custom Hook to use Store
 const useStoreData = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider, useStoreData };








