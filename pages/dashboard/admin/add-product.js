import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const AddProduct = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-16 mx-5 md:mx-20">
                <h1 className=" text-black font-semibold text-4xl pb-2">
                    Add Product
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
                                        Add Product
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h1 className="text-xl pb-3 font-semibold">Add New Product</h1>
                <div className="md:flex flex-wrap items-center justify-center ">
                    <div className="md:w-1/2 bg-white rounded-lg p-8 md:m-4">
                        <div className="">
                            <h1 className="text-gray-700 text-center font-semibold text-3xl ">
                                Add Product
                            </h1>
                        </div>
                        <form className="pt-10" action="/" method="post">
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="product_title"
                                >
                                    Product Title:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="product_title"
                                    id="product_title"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="product_category"
                                >
                                    Product Category:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="product_category"
                                    id="product_category"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="image_url"
                                >
                                    Image Url:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="image_url"
                                    id="image_url"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="product_price"
                                >
                                    Product Price:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="text"
                                    id="product_price"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="product_stock"
                                >
                                    Product Stock:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="text"
                                    id="product_stock"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="vendor_name"
                                >
                                    Vendor Name:
                                </label>
                                <input
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    required
                                    type="text"
                                    name="text"
                                    id="vendor_name"
                                />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label
                                    className="font-semibold text-lg text-gray-700"
                                    htmlFor="productDetails"
                                >
                                    Product Details:
                                </label>
                                <textarea
                                    className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                    type="productDetails"
                                    name="productDetails"
                                    id="productDetails"
                                    rows="6"
                                ></textarea>
                            </div>
                            <div className="pt-3">
                                <button
                                    className="w-full block font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-4 py-2"
                                    type="submit"
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
