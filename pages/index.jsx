import React from "react";
import { useState } from "react";
import Img from "next/image";
import Banner from "../images/img-banner.jpg";
import { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from 'cookies-next';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setEmail("");
    setPassword("");
    await axios({
      url: "https://altaproject.online/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        setCookie("Cookie Token",response.data.data)
        router.push("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="p-20 bg-[#FAFAFA]">
        <div className="bg-white rounded-lg">
          <div className="sm:flex">
            <div className="flex flex-col w-full p-4 sm:w-1/2 md:ml-5 lg:ml-16 sm:pt-44 lg:pr-44">
              <div className="text-center">
                <h2 className="text-4xl font-semibold xs:text-left text-[#1B1B1B] mb-5 ">
                  Hello Again!
                </h2>
                <p className="text-lg font-normal text-[#1B345F] mb-16">
                  Welcome back! Login to your account
                </p>
              </div>

              <form className="flex flex-col w-full">
                <label className="text-lg font-medium mb-3">Your email</label>
                <input
                  className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-6"
                  placeholder="Email adress"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="text-lg font-medium mb-3">Password</label>
                <input
                  className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-4"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="text-base text-[#266663] text-right mb-10">
                  Reset Password
                </p>
              </form>

              <button
                className="text-lg font-medium text-white w-full bg-[#266663] h-14 rounded-md mt-5"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
            <Img
              className="w-[0vw] invisible sm:visible sm:w-1/2 rounded-r-lg"
              src={Banner}
              alt="Image Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
