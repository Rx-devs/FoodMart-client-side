import React from "react";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import DashVendorMenu from "../DashMenu/DashVendorMenu";

const Address = () => {
    return (


        <>
            <style jsx>
                {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
            </style>
            <div id="dashboard-container" className="h-screen bg-gray-100">
                {/* top bar */}
                <DashUserMenu />



                {/* main content */}
                <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">

                    <div className="py-16 mx-5 md:mx-20">
                        <h2 className="text-black font-bold text-3xl pb-2">My Address</h2>
                        {/* breadcrumb */}
                        <div>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            <svg
                                                className="mr-2 w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <a
                                                href="#"
                                                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                Dashboard
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <a
                                                href="#"
                                                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                User
                                            </a>
                                        </div>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                                address
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        {/* Address content */}
                        <div className="grid grid-cols md:grid-cols-2 gap-5 py-10 px-8 md:px-16 mt-10 md:flex md:justify-center shadow rounded">
                            <div className="border border-gray-300 w-full md:w-1/4 text p-4">
                                <h2 className="text-2xl font-semibold pb-4">
                                    Billing Address
                                </h2>
                                <p className="text-gray-500">117 - kingstar</p>
                                <p className="text-gray-500">Green Road</p>
                                <p className="text-gray-500">Dhaka-1200</p>
                                <p className="text-gray-500">Bangladesh</p>
                            </div>
                            <div className="border border-gray-300 w-full md:w-1/4 p-4">
                                <h2 className="text-2xl font-semibold pb-4">
                                    Shipping Address
                                </h2>
                                <p className="text-gray-500">117 - kingstar</p>
                                <p className="text-gray-500">Green Road</p>
                                <p className="text-gray-500">Dhaka-1200</p>
                                <p className="text-gray-500">Bangladesh</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>





    );
};

export default Address;
