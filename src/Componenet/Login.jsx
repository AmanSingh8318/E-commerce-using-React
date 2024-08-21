import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Componenet/Header/Header";
import './Home.css';

export default function Login() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLogged(true);
      setUserData(JSON.parse(userInfo));
    } else {
      setIsLogged(false);
      setUserData({});
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setIsLogged(true);
    setUserData(data);
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setIsLogged(false);
    setUserData({});
    reset();
    console.log("logout is called");
  };



  return (
    <div className="login-main">
      <Header isLogged={isLogged} logout={logout} />
      {isLogged ? (
        <div >
          <i class="fa-solid fa-circle-user"></i>
          <p>{userData.name}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="main-log">
          <input type="name" placeholder="Enter Your Name" {...register("name", { required: true })} />
          <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <input type="password" placeholder="Enter Your Password" {...register("password", { required: true, minLength: 6 })} />
          {errors.password && errors.password.type === "minLength" && <span>Password must be Atleast 6 character</span>}
          <input type="submit" />
        </form>
      )}
    </div>
  );
}