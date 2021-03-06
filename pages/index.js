import { useEffect, useState } from "react";
import Banner from "../src/Components/Home/Banner/Banner";
import BestSells from "../src/Components/Home/BestSells/BestSells";
import Blogs from "../src/Components/Home/Blogs/Blogs";
import Brands from "../src/Components/Home/Brands/Brands";
import Categories from "../src/Components/Home/Categories/Categories";
import DealsofDay from "../src/Components/Home/DealsofDay/DealsofDay";
import DeliverySteps from "../src/Components/Home/DeliverySteps/DeliverySteps";
import NewsLetter from "../src/Components/Home/NewsLetter/NewsLetter";
import PopularProducts from "../src/Components/Home/PopularProducts/PopularProducts";
import ProductOffer from "../src/Components/Home/ProductOffer/ProductOffer";
import Reviews from "../src/Components/Home/Reviews/Reviews";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import OfferModal from "../src/Components/OfferModal/OfferModal";
import TawkMessengerReact from '/node_modules/@tawk.to/tawk-messenger-react';

export default function Home({ reviews, products, blogs }) {
   
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 1000);
  }, []);
  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="">
      {!openModal && (
        <div className="fixed top-0 z-50 w-full h-screen transition modal-overlay">
          <OfferModal handleModal={handleModal}></OfferModal>
          <style>
            {`.modal-overlay{
            background: rgba(0, 0, 0, 0.5);
          }`}
          </style>
        </div>
      )}
      <Banner></Banner>
      <PopularProducts products={products}></PopularProducts>
      <DealsofDay></DealsofDay>
      <BestSells products={products}></BestSells>
      <Categories></Categories>
      <ProductOffer></ProductOffer>
      <DeliverySteps></DeliverySteps>
      <Reviews reviews={reviews}></Reviews>
      <Blogs blogs={blogs}></Blogs>
      <Brands></Brands>
      <NewsLetter></NewsLetter>

      {/* Messenger App */}
      <TawkMessengerReact
                propertyId="62377205a34c2456412bf6c3"
                widgetId="1fuk9aqlq"/>
    </div>
  );
}

export async function getStaticProps() {
  const reviews_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/reviews`);
  const reviews = await reviews_res.json();

  const products_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
  const products = await products_res.json();

  const blogs_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/blogs`);
  const blogs = await blogs_res.json();

  return {
    props: { reviews, products, blogs },
  };
}

/* export const getServerSideProps = async () => {
  const reviews_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/reviews`);
  const reviews = await reviews_res.json();
  const products_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
  const products = await products_res.json();
  const blogs_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/blogs`);
  const blogs = await blogs_res.json();
  return {
    props: { reviews, products, blogs },
  };
}; */