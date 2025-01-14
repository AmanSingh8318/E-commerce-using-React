import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import { StoreContext } from '../Store/store';
function ALogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const {login,logout,userData}=useContext(StoreContext);

  // Load user data from localStorage on component mount
  
  console.log(userData);
  
  return (

<>
          {userData?
        <div className='card'>
        <div className='card-header'>
        <i className="user-icon"></i>       
           <h2 style={{textAlign:"center"}}>Welcome  {userData.name}</h2>
        </div>
        <div className='card-body'>
          <p>Email: {userData.email}</p>
        </div>
        <div className='card-footer'>
    <button onClick={logout}>Logout</button>
  </div>


          </div>
          :

          <div className='formsub'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(login)}>
            <input type="name" placeholder='Enter your name' {...register('name', { required: true })} />
            {errors.name && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="email" placeholder='Enter your email' {...register('email', { required: true })} />
            {errors.email && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="password" placeholder='Enter your password' {...register('password', { required: true })} />
            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
  
            <input type="submit" value="Login" />
          </form>
        </div>
          }
    </>
  );
}

export default ALogin;
