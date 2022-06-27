import React from "react";
import Product from "../Componenets/Product/Product"
import FooterBanner from "../Componenets/FooterBanner/FooterBanner"
import HeroBanner from "../Componenets/HeroBanner/HeroBanner"
import {client} from "../Lib/client"

const Home = ({products, bannerData}) => {
  console.log(bannerData)
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />
      
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>

    <div className="products-container">
      {products?.map((product)=><Product key={product._id} product={product} />)}
    </div> 

    <FooterBanner footerBanner ={bannerData  &&  bannerData[0]} />
    </>
  ) 
} 

export const getServerSideProps = async () =>{
    const query = '*[_type == "product"]'
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch( bannerQuery);

    return{
    props:{products, bannerData}
  } 
}

  
export default Home;