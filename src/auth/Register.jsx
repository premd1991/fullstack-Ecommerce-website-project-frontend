import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const userData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [user, setUser] = useState(userData);

  function setValues(e) {
    let value = e.target.value;
    let key = e.target.name;

    setUser((previous) => ({ ...previous, [key]: value }));
  }

  async function CreateUser() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        user
      );

      console.log(response);

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Registertion failed:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(user);

    CreateUser();
  }

  return (
    <>
      <div className="flex min-h-screen">
        <div
          className=" w-2/3 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/register-now-document-filling-form-concept_53876-125596.jpg?semt=ais_hybrid&w=740&q=80')",
          }}
        ></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16">
          {" "}
          <br />
          <br />
          <form className="w-full max-w-sm bg-white/88 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl animate-fadeIn">
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">
              Sign Up
            </h1>
            <div>
              <label
                htmlFor="firstName"
                className="block font-semibold mb-1 dark: text-gray-400"
              >
                FirstName
              </label>
              <input
                type="text"
                id="firstname"
                value={user.firstName}
                name="firstName"
                onChange={setValues}
                className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark:border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block font-semibold mb-1 dark: text-gray-400"
              >
                LastName
              </label>
              <input
                type="text"
                id="lastname"
                value={user.lastName}
                name="lastName"
                onChange={setValues}
                className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark:border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold mb-1 dark: text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={user.email}
                name="email"
                onChange={setValues}
                className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark:border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-semibold mb-1 dark: text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={user.password}
                name="password"
                onChange={setValues}
                className="w-full px-4 py-2 rounded-lg border broder-gray-300 dark:border-gray-600 dark:bg-gray-700 text-black focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 my-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
