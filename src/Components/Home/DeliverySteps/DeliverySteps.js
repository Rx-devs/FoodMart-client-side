import Image from "next/image";
import React from "react";
import moneback from "./DeliveryImages/back.png";
import choose from "./DeliveryImages/choose.png";
import pay from "./DeliveryImages/pay.png";
import shipping from "./DeliveryImages/shipping.png";

const DeliverySteps = () => {
  return (
    <div>
      <div className="container delivery-steps mx-auto pb-16">
        <div className="grid mx-2 lg:mx-0 md:mx-0 bg-red-00 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="block rounded-md bg-white border max-w-sm text-center">
            <div className="p-6">
              <Image
                width={50}
                height={50}
                src={shipping}
                alt="shipping"
              ></Image>
              <h5 className="primary-color text-lg font-medium mb-2 rounded- ">
                Free Shipping
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                On Order Over 100%
              </p>
            </div>
          </div>
          <div className="block  rounded-md bg-white border max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={choose} alt="pay"></Image>
              <h5 className="primary-color text-lg font-medium mb-2">
               Choose your food
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Your favourite food
              </p>
            </div>
          </div>
          <div className="block  rounded-md bg-white border max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={pay} alt="pay"></Image>
              <h5 className="primary-color text-lg font-medium mb-2">
                Pay your bill
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below 
              </p>
            </div>
          </div>
          <div className="block  rounded-md bg-white border max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={moneback} alt="pay"></Image>
              <h5 className="primary-color text-lg font-medium mb-2">
               Money back 100%
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                With in 30days after delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySteps;
