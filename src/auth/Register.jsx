import React, { useState } from "react";

const Register = () => {
  const userData = {
    firstName: "",
    lastName:"",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userData);

    function setValues(e){
      let value = e.target.value
      let key = e.target.name

    setUser(previous => ({...previous, [key]: value}))
    }

  return (
    <>
    < div className="min-h-screen  bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDkrr3oGKdTZlGOE_VI91VzZQd-oETt6ueNsjrdf8G9KoWcgOW2lr8Ls0JPBmBKNLaik&usqp=CAU')"}}/>

    <div className="relative z-10 flex items-center justify-center m-9 h-full pl-10 md:pl-20">
      <form className="w-full max-w-sm bg-white/88 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl animate-fadeIn">
       <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">
        Sign Up</h1>
        <div>
          <label htmlFor="firstname" className="block font-semibold mb-1 dark: text-gray-400">FirstName</label>
          <input type="text" id='firstname' value={user.firstName} name='firstName' onChange={setValues} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
         <div>
          <label htmlFor="lasttname" className="block font-semibold mb-1 dark: text-gray-400">LastName</label>
          <input type="text" id='lastname' value={user.lastName} name='lastName' onChange={setValues} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1 dark: text-gray-400">Email</label>
          <input type="email" id='email' value={user.email} name='email' onChange={setValues} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold mb-1 dark: text-gray-400">Password</label>
          <input type="password" id='password' value={user.password} name='password' onChange={setValues} className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark: border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"/>
        </div>
        <div>
          
        <button type="submit" className="w-full py-2 my-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1">Sign Up</button>

        </div>
      </form>
      </div>
    </>
  );
};

export default Register;
