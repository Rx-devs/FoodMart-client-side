import React from 'react';

const FAQ = () => {
    return (
        <div className='container pt-5'>
            
               <div className="bg-white dark:bg-gray-900">
        
        <div className="px-10 py-10 mx-auto">
            <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white">Frequently <span className='text-green-600'>asked questions..</span></h1>

            <hr className="my-6 border-gray-400 dark:border-gray-700"/>
        
            <div>
                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4"></path></svg>

                        {/* <h1 claclassNamess="mx-4 text-3xl text-green-600  dark:text-white">What is FoodMart Services?</h1> */}
                        <h1 className="mx-4 text-3xl text-green-600 dark:text-white">What is FoodMart Services?</h1>
                    </button>

                    <div className="flex mt-8 md:mx-10">
                        <span className="border border-blue-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                        </p>
                    </div>
                </div>
                
                <hr className="my-8 border-gray-400 dark:border-gray-700"/>

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-3xl text-green-600 dark:text-white">How to buy many products at a time ?</h1>
                    </button>
                </div>

                <hr className="my-8 border-gray-400 dark:border-gray-700"/>

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-3xl text-green-600 dark:text-white">Refund policy for customar ?</h1>
                    </button>
                </div>

                <hr className="my-8 border-gray-400 dark:border-gray-700"/>

                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-3xl text-green-600 dark:text-white">Exchange policy for a customar?</h1>
                    </button>
                </div>
                <div>
                <hr className="my-8 border-gray-200 dark:border-gray-700"/>
                </div>
                <div>
                    <button className="flex items-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M12 4v16m8-8H4" />
                        </svg>

                        <h1 className="mx-4 text-3xl text-green-600 dark:text-white">Is the cost of give a products available ?</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default FAQ;