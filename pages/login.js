import Image from "next/image";
import React, { useState } from "react";
import initializeFirebase from "../src/Authenticaion/Firebase/firebase.init";
import useAuth from '../src/hooks/useAuth';


initializeFirebase();

const Login = () => {
  const [Data, setData] = useState({});
  const {user, signInWithGoogle,loginUser,logOut,newsignIn} = useAuth();
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = {...Data};
    newData[field] = value;
    setData(newData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(Data.email, Data.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    // signInWithGoogle();
    newsignIn();
    console.log("From Login", user);
  };

  const handleLogout = () =>{
    logOut();
    alert("logout succesfully")
  }



  return (
    <div className=" h-screen w-screen  ">
      <div className="  flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="px-5 mx-10  mt-4 text-left  rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h3 className="block text-2xl font-bold text-center">
                Welcome To{" "}
              </h3>
              <br />
              <Image
                className="block"
                src="https://i.ibb.co/hKfBmFG/logo-1.png"
                height="100"
                width="300"
                alt="logo"
                priority
              ></Image>
              <br />
              <h3 className="block text-base font-bold text-center text-green-800">
                An initiative by winning devs
              </h3>
            </div>
          </div>

          <div className="px-8 py-6 mx-10 mt-4 text-left bg-white shadow-lg rounded-lg">
            <div className="p-5">
              {user?.displayName && (
                <h1 className="text-black">{user?.displayName}</h1>
              )}
            </div>
            <h3 className="text-2xl font-bold text-center">
              Sign in to your account
            </h3>
            <form action="">
              <div className="mt-4">
                <div>
                  <label htmlFor="email" className="block" name="Email">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    name="email"
                    onBlur={handleOnBlur}
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="block" name="Password">
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    name="password"
                    onBlur={handleOnBlur}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <button
                    onClick={handleLoginSubmit}
                    className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={newsignIn}
                    className="px-6 ml-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
                  >
                    newSign
                  </button>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-sm">Do not have an account? please </p>{" "}
                  <a className="text-sm hover:text-sm text-green-600 hover:text-green-800 hover:underline">
                    Sign up
                  </a>
                </div>

                <div className="p-5 text-center">
                  <h1 className="font-bold text-black">Or</h1>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="py-2 px-3 bg-orange-400 rounded-lg border hover:bg-sky-700 text-white font-bold hover:border-black "
                  >
                    {" "}
                    Sign in with Google{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
