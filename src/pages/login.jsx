import "../App.css";

import { useNavigate } from "react-router-dom";
import { emailIcon, passwordIcon, logo } from "../assets/index";
// import Header from "../components/Header";
import { login } from "../api/auth";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);

      // Store token
      localStorage.setItem("access-token", res.data.accessToken);
      localStorage.setItem("refresh-token", res.data.refreshToken);

      navigate("/admin-page");
    } catch (error) {
      // Invalid credential
      console.error(error);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="login min-h-screen grid place-items-center grid-rows-[max-content_1fr]">
        <div className="justify-self-start">
          <img className="w-[13rem]" src={logo} alt="" />
        </div>
        <div>
          <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
            <h1 className="mb-8 text-4xl font-bold text-center">
              Welcome Back
            </h1>
            <form onSubmit={onLogin}>
              <div className="grid gap-4 grid-cols-[max-content_1fr] items-center">
                <img
                  className="justify-self-center w-[2.5rem]"
                  src={emailIcon}
                  alt=""
                />
                <input
                  type="email"
                  id="email"
                  onChange={handleEmailChange}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter Your Email..."
                />
                <img
                  className="justify-self-center w-[2rem]"
                  src={passwordIcon}
                  alt=""
                />
                <input
                  type="password"
                  id="password"
                  onChange={handlePasswordChange}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter Your Password..."
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <p className="mt-4 text-center">
            Copyright @unisza2022 | Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}
