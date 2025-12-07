import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    < div className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
     style={{ backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDkrr3oGKdTZlGOE_VI91VzZQd-oETt6ueNsjrdf8G9KoWcgOW2lr8Ls0JPBmBKNLaik&usqp=CAU')"}}/>
    <div className="absolute bg-black/40 backdrop-blur-sm"></div>
      
      <div className="absolute z-10 flex-top-left items-start h-full pl-10  md:pl-20 w-full pt-[-200px]">
      <form className="w-full max-w-sm bg-white/90 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl animate-fadeIn">
      <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">
        Welcome Back</h1> 

        
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1 dark: text-gray-400">Email</label>
          <input type="email" id='email' value={email} name='' onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold mb-1 dark: text-gray-400">Password</label>
          <input type="password" id='password' value={password} name='' onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
          <button type="submit" className="w-full py-2 my-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1">Sign In</button>
        
    
      <p className="text-center mt-4 dark:text-gray-300">
        Don’t have an account?{" "} <br/>
        <a href="/register" className=" text-orange-500 font-semibold hover:underline">Create an account</a>
      </p>
      </form>
      </div>
    </>
  );
};

export default Login;
