import React from "react";
import contacts from '../../styles/Contact.module.css';
import Image from "next/image";

const ContactUs = () => {

  return (
<>
    <div>
       <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Contact Us</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                      contact-us
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

   <body className="mx-4 md:mx-0">
<div className="container md:px-2 mx-auto flex md:flex-row flex-col p-2 shadow mt-8 border">
      <div className={contacts.contactMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236207.01563377152!2d91.67978063970719!3d22.325874171159647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1647105610723!5m2!1sen!2sbd" width="100%" height="auto" loading="lazy"></iframe>
      </div>
      <div className={contacts.contactForm}>
        <h1 className="text-3xl font-semibold text-center pb-4" >Have Any Question?</h1>
        <form>
          <input type="text" placeholder="Name" className="w-full border py-2 rounded-md px-4"/>
          <input type="email" placeholder="Email" className="w-full border my-4 py-2 rounded-md px-4"/>
          <textarea rows={5} placeholder="Write your Message" className="w-full border py-2 rounded-md px-4"></textarea>
          <input type="submit" name="submit" className="primary-bg-color w-full py-3 mt-4 rounded-md text-white"/>
        </form>
      </div>
    </div>


<div>

</div>


   </body>
  <div className="flex flex-col md:flex-row gap-3 p-10 justify-between my-4">
    <div className="shadow-md rounded-md w-full">
      <Image width={300} height={300} src="https://i.ibb.co/rd2vKZC/Contact-us.gif" alt=""></Image>
    </div>
  <div className="w-full  bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl border-gray-500">
  <div className="flex flex-col items-center justify-center p-12">
    <h2 className="text-xl font-semibold center">Phone Number</h2>
    <div className="flex justify-center items-center w-16 md:w-32 py-14">
      <img className={contacts.infoImg} src="https://i.ibb.co/YbmwkpJ/contact-icon.png" alt="Man looking at item at a store"/>
    </div>
     <p className=" text-slate-500 p-3 mt-2">+8801325469895</p>
  </div>
</div>
   <div className="w-full bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl">
   <div className="flex flex-col items-center justify-center p-12">
    <h2 className="text-xl font-semibold center">Email Address</h2>
    <div className="flex justify-center items-center w-16 md:w-32 py-14">
      <img className={contacts.infoImg} src="https://i.ibb.co/W047fGp/contact-icon2.png" alt="Man looking at item at a store"/>
    </div>
     <p className=" text-slate-500 p-3 mt-5">foodmart11@gmail.com</p>
  </div>
</div>
<div className="w-full bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl">
<div className="flex flex-col items-center justify-center p-12">
    <h2 className="text-xl font-semibold center">Our Location</h2>
    <div className="flex justify-center items-center w-16 md:w-32 py-14">
      <img className={contacts.infoImgs} src="https://i.ibb.co/B6s3YjV/contact-icon3.png" alt="Man looking at item at a store"/>
    </div>
     <p className=" text-slate-500 p-3">Chattagram, Bangladesh</p>
  </div>
</div>
  </div>
   </>
  );
};

export default ContactUs;