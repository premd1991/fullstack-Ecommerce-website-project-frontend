import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(userData) {
    let response = await axios.post("http://localhost:3000/api/v1/user/login",
    userData, { withCredentials: true});
    console.log(response);

    if (response.status === 200 && response.data.accesstoken){
      navigate("/");
    };
  } ;

  function handleSubmit(e){
    e.preventDefault();
   
    let userData = {
      email: email,
      password: password
    }
  
    loginUser(userData);

    console.log(userData);
  }

  return (
    <>
    <div className="flex ">
    < div className=" w-2/3 hidden md:block bg-cover bg-center"
     style={{ backgroundImage:"url('https://www.loginradius.com/assets/blog/identity/social-ecommerce-login-benefits/digital-shopping-icons.webp')"}}>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-3"> <br /><br /> 
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white/90 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl animate-fadeIn">
      <h1 className="text-2xl font-bold text-center mb-6 dark:text-white text-orange-600">
        Welcome Back</h1> <br />
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1 dark: text-gray-400">Email</label> 
          <input type="email" id='email' value={email} name='' onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div><br />
        <div>
          <label htmlFor="password" className="block font-semibold mb-1 dark: text-gray-400">Password</label>
          <input type="password" id='password' value={password} name='' onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div> <br /><br />
          <button type="submit" className="w-full py-2 my-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1" onClick={handleSubmit}>Sign In</button>
        
    
      <p className="text-center mt-4 dark:text-gray-300">
        Don’t have an account?{" "} <br/>
        <a href="/register" className=" text-orange-500 font-semibold hover:underline">Create an account</a>
      </p>
      </form>
      </div>
 </div>
    </>
  );
};

export default Login;
