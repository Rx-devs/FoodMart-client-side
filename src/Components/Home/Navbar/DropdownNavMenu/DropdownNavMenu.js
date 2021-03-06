import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const subCategoryList = [
    {
        subCategory_id: 1,
        subCategory_name: "Noodles",
    },
    {
        subCategory_id: 2,
        subCategory_name: "Local Breakfast",
    },
    {
        subCategory_id: 3,
        subCategory_name: "Juice",
    },
    {
        subCategory_id: 4,
        subCategory_name: "Candy & Chocolate",
    },
    {
        subCategory_id: 5,
        subCategory_name: "Coffee",
    },
    {
        subCategory_id: 6,
        subCategory_name: "Frozen Snacks",
    },
    {
        subCategory_id: 7,
        subCategory_name: "Soft Drinks",
    },
    {
        subCategory_id: 8,
        subCategory_name: "Fresh Fruits",
    },
    {
        subCategory_id: 9,
        subCategory_name: "Fresh Vegetables",
    },
    {
        subCategory_id: 10,
        subCategory_name: "Cakes",
    },
];
const DropdownNavMenu = () => {
    return (
        <>
            <style jsx>{`
                .megaMenu {
                    display: none;
                    left: 0;
                    position: absolute;
                    text-align: left;
                    width: 100%;
                    margin-top: -12px;
                }

                .hoverable {
                    position: static;
                    display: block;
                }

                .hoverable:hover .megaMenu {
                    display: block;
                }
                .deals:hover .deals-text {
                    color: orange;
                }
                .right-nav:hover .nav-icon-btn {
                    color: black;
                }
            `}</style>
            <div className="hoverable hoverable-menu transition">
                <a
                    href="#"
                    className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-semibold"
                >
                    <div className="flex flex-row items-center text-gray-500 hover:text-green-700">
                        Menu <FiChevronDown className="pt-1 w-5 h-5" />
                    </div>
                </a>

                <div className="megaMenu transition px-5 bg-white mb-16 rounded-md shadow-md">
                    <div className="container w-full flex flex-wrap justify-between sm:mb-0 bg-white ">
                        <div className="w-full primary-color mb-2">
                            <h2 className=" hidden font-semibold text-3xl">
                                FoodMart Mega Menu
                            </h2>
                        </div>
                        <div className="container w-full flex flex-wrap justify-between sm:mb-0 bg-white ">
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                <div className="flex items-center">
                                    <h3 className="text-xl primary-color hover:text-orange-400 font-semibold mb-2">
                                        {" "}
                                        Fruit &amp; Vegetables
                                    </h3>
                                </div>
                                <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                    {subCategoryList
                                        .slice(0, 4)
                                        .map((subCategory) => (
                                            <div
                                                key={subCategory.subCategory_id}
                                            >
                                                <Link
                                                    href={`/subCategory/${subCategory.subCategory_name}`}
                                                >
                                                    <a className="text-gray-500 hover:text-green-500">
                                                        {
                                                            subCategory.subCategory_name
                                                        }
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    
                                </div>
                            </ul>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                <div className="flex items-center">
                                    <h3 className="text-xl primary-color hover:text-orange-400 font-semibold mb-2">
                                        Beverages
                                    </h3>
                                </div>
                                <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                {subCategoryList
                                        .slice(4, 8)
                                        .map((subCategory) => (
                                            <div
                                                key={subCategory.subCategory_id}
                                            >
                                                <Link
                                                    href={`/subCategory/${subCategory.subCategory_name}`}
                                                >
                                                    <a className="text-gray-500 hover:text-green-500">
                                                        {
                                                            subCategory.subCategory_name
                                                        }
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    
                                </div>
                            </ul>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                <div className="flex items-center">
                                    <h3 className="text-xl primary-color hover:text-orange-400 font-semibold mb-2">
                                        Snacks
                                    </h3>
                                </div>
                                <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                {subCategoryList
                                        .slice(8, 10)
                                        .map((subCategory) => (
                                            <div
                                                key={subCategory.subCategory_id}
                                            >
                                                <Link
                                                    href={`/subCategory/${subCategory.subCategory_name}`}
                                                >
                                                    <a className="text-gray-500 hover:text-green-500">
                                                        {
                                                            subCategory.subCategory_name
                                                        }
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    {/* <div>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-green-500"
                                        >
                                            Noodles
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-green-500"
                                        >
                                            Candy &amp; Chocolate
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-green-500"
                                        >
                                            Noodles
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-green-500"
                                        >
                                            Candy &amp; Chocolate
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-green-500"
                                        >
                                            Candy &amp; Chocolate
                                        </a>
                                    </div> */}
                                </div>
                            </ul>
                            <ul className=" flex items-center px-4 sm:w-1/2 lg:w-auto pb-6 pt-6 lg:pt-3">
                                <div className="w-full relative">
                                    <div className="deals z-10 absolute top-0 left-0 p-6 w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <h2 className="deals-text text-2xl font-semibold primary-color ">
                                                Hot Deals
                                            </h2>
                                            <div className="text-lg text-white  w-20 h-20 mx-4 rounded-full flex items-center justify-center font-semibold bg-orange-500">
                                                70% <br /> Off
                                            </div>
                                        </div>
                                        <p className="w-32 text-2xl text-gray-600 font-semibold mb-5">
                                            Dont miss trending
                                        </p>
                                        <button className="deals-button primary-bg-color hover:bg-orange-500 text-white font-semibold text-xl rounded-md px-4 py-2 ">
                                            <Link href="products/all-products">
                                                <a>Shop Now</a>
                                            </Link>
                                        </button>
                                    </div>
                                    <Image
                                        className="z-0"
                                        src="https://i.ibb.co/sPmgYLZ/banner-menu.png"
                                        alt="Picture of the author"
                                        width="420px"
                                        height="260px"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropdownNavMenu;
