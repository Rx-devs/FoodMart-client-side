import Image from 'next/image';
import React from 'react';

const Category = () => {
    return (
        <div className=" ">
            <div>
                <h1 className="my-5 font-semibold text-lg">Category</h1>
                <hr className="border-green-800" />
            </div>
            <div className="">
                <div className="flex flex-row justify-start p-3 align-middle  border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/pz3dsR0/c-milk.png" height="30" width="30"></Image>
                    <p className='px-2 py-2'>   Milks & Daires</p>
                </div>
                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/JcBmCJM/c-clothing.png" height="30" width="30"></Image>
                    <p className='px-2 py-2'>  Clothing</p>
                    {/* <p >Clothing</p> */}
                </div>
                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/wW1ypYC/c-pets.png" height="30" width="30"></Image>
                    <p className='px-2 py-2'>  Pet Foods</p>
                </div>
                
            </div>
        </div>
    );
};

export default Category;