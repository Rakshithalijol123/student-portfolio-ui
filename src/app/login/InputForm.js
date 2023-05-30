"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { fetchJwt } from "../JWT";
import { baseurl } from "../configuration";
import bcrypt from "bcryptjs";
import { data } from "autoprefixer";

const InputForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitData = async () => {
    try {
      const url = baseurl + "/credentials/login";
      const token = await fetchJwt();
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      setUsername("");
      setPassword("");
      const data = await response.json();
      console.log(data);
      console.log(data.state);
      if (data.state) {
        router.push("/");
      }
    } catch (e) {
      console.log("error =", e);
    }
  };

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <div>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-white flex rounded-2xl shadow-2xl p-5">
          {/* mycode */}
          <div className="md:block hidden w-1/2 bg-violet-500 text-white rounded-2xl py-4 px-4 shadow-gray-600 shadow-lg ">
            <div className="text-center font-bold mb-12">
              <span className="text-lg text-white">Performance</span>
              <span className="text-lg text-black">Xcel</span>
              <p className="text-xs font-medium mb-7">
                The Performance Enhancement System
              </p>
            </div>
            <h2 className="text-center text-3xl font-bold mb-2 ">
              Hello, Student
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center border-2 w-10 border-white inline-block mb-2 "></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              {/* <p className="text-sm mb-10 mt-4">
                Fill up personal information and start journey with us.
              </p> */}
              <p className="text-sm font-bold mt-6">
                "Join our vibrant community,
              </p>
              <p className="text-sm font-bold">
                And start your journey with a simple login today!"
              </p>
              <p className="text-sm mb-6 mt-6">
                Fill up personal information and start journey with us.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={goToRegister}
                className="border-2 border-white rounded-xl px-8 py-2 inline-block font-semibold hover:bg-white hover:text-violet-500 mt-2 "
              >
                SignIn
              </button>
            </div>
          </div>
          {/* end */}
          {/* left section : form */}
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-violet-500">Login Here</h2>
            <p className="lg:hidden text-sm mt-4 text-violet-500">
              If You Don't have Account?{" "}
              <Link className="font-bold" href="/register">
                SignIn
              </Link>
            </p>
            <div className="flex flex-col gap-3 mt-5 ">
              <div className="bg-gray-100 w-80 p-2 flex items-center mb-3 mt-3 rounded-lg ">
                <AiOutlineUser className="text-gray-400 mr-2" />
                <input
                  className="bg-gray-100 outline-none text-sm flex-1"
                  type="text"
                  name="name"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  value={username}
                  required
                />
              </div>
              <div className="bg-gray-100 w-80 p-2 flex items-center mb-3 rounded-lg">
                <MdLockOutline className="text-gray-400 mr-2" />
                <input
                  className="bg-gray-100 outline-none text-sm flex-1"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  required
                />
              </div>

              <button
                onClick={submitData}
                className="border-2 border-violet-500 text-violet-500 hover:bg-violet-500 rounded-xl py-2 hover:text-white"
              >
                Login
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Login with Google
            </button>
          </div>

          {/* right section: image */}
          {/* <div className="md:block hidden w-1/2">
              <Image
                className="rounded-2xl  "
                src="/signin1.avif"
                alt="SignUp Image"
                height={400}
                width={400}
              />
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default InputForm;
