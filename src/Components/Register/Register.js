import Image from 'next/image';
import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">

                <div className="py-5 px-5 mx-10 mt-4 text-left    rounded-lg">
                    <div className="flex flex-col items-center justify-center">

                        <h3 className="block text-2xl font-bold text-center">Welcome To </h3>
                        <br />
                        <Image className='block' src="https://i.ibb.co/hKfBmFG/logo-1.png" height="100" width="300" alt="logo"></Image>
                        <br />
                        <h3 className="block text-base font-bold text-center text-green-800">An initiative by winning devs</h3>
                    </div>


                </div>
                <div className="px-8 mx-10 py-6 mt-4 text-left bg-white shadow-lg  rounded-lg">
                    <h3 className="text-2xl font-bold text-center">Create new account</h3>
                    <form action="">
                        <div className="mt-4">
                            <div>
                                <label className="block" name="Email" > Email </label>
                                <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
                            </div>

                            <div className="mt-4">
                                <label className="block" name="Password" > Password </label>

                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block" name="Password" > Confirm Password </label>

                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900">Sign up</button>
                                {/* <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a> */}
                            </div>
                            <div className="mt-4">
                                <p className="text-sm">Do not have an account? please </p> <a href="#" className="text-sm hover:text-sm text-green-600 hover:text-green-800 hover:underline">Log in</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;