import React from 'react'
import {client,urlFor} from "../../Lib/client"

const ProductDetails = () => {
return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src=""/>
                </div>
            </div>
        </div>
    </div>
)
}

export const getStaticProps = async ({prams:{slug}}) =>{
    const query = `*[_type == "product" && slug.current == '${slug}'][0]` 
    const products = await client.fetch(query);
    const productsQuery
    const bannerQuery = '*[_type == "banner"]' 
    const bannerData = await client.fetch( bannerQuery);

    return{
    props:{products, bannerData}
} 
}

export default ProductDetails