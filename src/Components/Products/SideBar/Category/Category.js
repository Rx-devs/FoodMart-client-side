import Image from 'next/image';
import React from 'react';

const Category = () => {
    return (
        <div>
            <div>
                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-xl">Category</h1>
            </div>
            <div>
                <div className="flex flex-row justify-start p-3 align-middle  border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/pz3dsR0/c-milk.png" height="30" width="30" alt=''></Image>
                    <button className='px-2 py-2'>Snacks</button>
                </div>
                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/JcBmCJM/c-clothing.png" height="30" width="30" alt=''></Image>
                    <button className='px-2 py-2'>Breakfast</button>
                   
                </div>
                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                    <Image src="https://i.ibb.co/wW1ypYC/c-pets.png" height="30" width="30" alt=''></Image>
                    <button className='px-2 py-2'>Beverages</button>
                </div>
                
            </div>
        </div>
    );
};

export default Category;