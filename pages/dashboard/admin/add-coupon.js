import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import axios from "axios";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import DotLoader from "react-spinners/DotLoader";
import { SearchIcon, TrashIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import Link from "next/link";
import { css } from "@emotion/react";

const AddCoupon = () => {
    const [addCouponData, setAddCouponData] = useState({});
    // handle input fields onBlur
    const handleInputOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newCouponData = { ...addCouponData };
        newCouponData[field] = value;
        setAddCouponData(newCouponData);
    };
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);


    const handleFromSubmit = async (e) => {
        e.preventDefault();

        axios.post("/api/coupons", addCouponData)
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    swal(
                        "Good job!",
                        "Your add blog request has been received.",
                        "success"
                    );
                    setAddCouponData("");

                    e.target.reset();
                } else {
                    setControl(false);
                }
            });
    };


    const [color, setColor] = useState("green");


    const user = useSelector((state) => state.states.user);

    // const [control, setControl] = useState(false);
    // const [loading, setLoading] = useState(true);

    // users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setLoading(true);
        setControl(true);
        axios.get("/api/users").then(response => {
            setUsers(response.data);
            setLoading(false);
        });
    }, [control]);



    const email = user?.email


    const userNow = users.filter(user => user?.email === email)[0]
    console.log(userNow?.role);
    let role = userNow?.role

    const override = css`
  display: block;
  margin: 0 auto;
  `;

    return (
        <div>
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
            <div>
                {
                    loading && (
                        <DotLoader color={color} loading={loading} css={override} size={60} />
                    )
                }
            </div>
            {!loading && userNow && (

                <div >


                    <div id="dashboard-container" className="">
                        {/* top bar */}
                        {/* {userNow?.role === 'admin' && <DashAdminMenu />}
                        {userNow?.role === 'vendor' && <DashVendorMenu />}
                        {userNow?.role === 'user' && <DashUserMenu />} */}
                        <DashAdminMenu />



                        {/* main content */}
                        <div id="main-content" className="pt-24 pl-8 lg:pl-72">
                            {/* <div> */}

                            <div className=" bg-gray-100 bg-opacity-70">
                                <div className="py-16 mx-5 md:mx-20">
                                    <h1 className=" text-black font-semibold text-4xl pb-2">
                                        Add Coupon
                                    </h1>
                                    {/* breadcrumb */}
                                    <div className="pb-10">
                                        <nav className="flex" aria-label="Breadcrumb">
                                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                                <li className="inline-flex items-center">
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <HomeIcon
                                                            className="h-4 w-4 text-gray-700 mr-2"
                                                            aria-hidden="true"
                                                        />
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <ChevronRightIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
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
                                                        <ChevronRightIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                                        >
                                                            Admin
                                                        </a>
                                                    </div>
                                                </li>
                                                <li aria-current="page">
                                                    <div className="flex items-center">
                                                        <ChevronRightIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                                            Add Coupon
                                                        </span>
                                                    </div>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <h1 className="text-xl font-semibold">Edit Coupon</h1>
                                    <form onSubmit={handleFromSubmit} method="POST">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:gap-4">
                                            <div className="col-span-2">
                                                <div
                                                    id="status"
                                                    className="bg-white p-4 shadow rounded-md mt-4"
                                                >
                                                    <div className="code pb-4">
                                                        <h1 className="text-lg font-semibold text-gray-600 mb-4">
                                                            Code
                                                        </h1>
                                                        <input
                                                            className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                                                            required
                                                            type="text"
                                                            name="code"
                                                            id="code"
                                                            onBlur={handleInputOnBlur}
                                                            placeholder="qwerty12"
                                                        />
                                                    </div>
                                                    <h1 className="text-lg font-semibold text-gray-600 mb-4">
                                                        Type
                                                    </h1>
                                                    <div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio"
                                                                name="type"
                                                                value="Percentage"
                                                                id="type1"
                                                                onBlur={handleInputOnBlur}
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="type1"
                                                            >
                                                                Percentage
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio"
                                                                name="type"
                                                                id="type2"
                                                                value="Fixed Amount"
                                                                onBlur={handleInputOnBlur}
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="type2"
                                                            >
                                                                Fixed Amount
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio"
                                                                name="type"
                                                                id="type3"
                                                                value="Free Shipping"
                                                                onBlur={handleInputOnBlur}
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="type2"
                                                            >
                                                                free Shipping
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="discount py-4">
                                                        <h1 className="text-lg font-semibold text-gray-600 mb-4">
                                                            Discount value
                                                        </h1>
                                                        <input
                                                            className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                                                            required
                                                            type="text"
                                                            name="discount"
                                                            id="discount"
                                                            placeholder="10.20"
                                                            onBlur={handleInputOnBlur}
                                                        />
                                                    </div>
                                                    <div className="limit">
                                                        <h1 className="text-lg font-semibold text-gray-600 mb-4">
                                                            Useage Limit
                                                        </h1>
                                                        <input
                                                            className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                                                            required
                                                            type="text"
                                                            name="limit"
                                                            id="limit"
                                                            placeholder="100"
                                                            onBlur={handleInputOnBlur}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div
                                                    id="status"
                                                    className="bg-white p-4 shadow rounded-md mt-4"
                                                >
                                                    <h1 className="text-lg font-semibold text-gray-600 mb-4 border-b">
                                                        Status
                                                    </h1>
                                                    <div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio"
                                                                name="status"
                                                                value="Enabled"
                                                                id="flexRadioDefault1"
                                                                onBlur={handleInputOnBlur}
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault1"
                                                            >
                                                                Enabled
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                type="radio"
                                                                name="status"
                                                                id="flexRadioDefault2"
                                                                value="Disabled"
                                                                onBlur={handleInputOnBlur}
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="form-check-label inline-block text-gray-800"
                                                                htmlFor="flexRadioDefault2"
                                                            >
                                                                Disabled
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="schedule"
                                                    className="bg-white shadow mt-4 p-4 rounded-md"
                                                >
                                                    <h1 className="text-lg font-semibold text-gray-600 mb-4 border-b">
                                                        Schedule
                                                    </h1>
                                                    <p className="mb-4">
                                                        Use these settings to limit the coupon
                                                        expiration date.
                                                    </p>
                                                    <div className="datePicker">
                                                        <div className="flex flex-col mb-4 gap-y-2">
                                                            <label htmlFor="start">
                                                                Starting Date
                                                            </label>
                                                            <input
                                                                className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                                                                required
                                                                type="date"
                                                                name="start"
                                                                id="start"
                                                                onBlur={handleInputOnBlur}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mb-4 gap-y-2">
                                                            <label htmlFor="start">
                                                                End Date
                                                            </label>
                                                            <input
                                                                className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                                                                required
                                                                type="date"
                                                                name="end"
                                                                id="end"
                                                                onBlur={handleInputOnBlur}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full md:w-1/5 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>)
            }
        </div>


    );
};

export default AddCoupon;
