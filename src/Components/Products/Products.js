import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8'>
            {
                products?.map((product,index)=><SingleProduct product={product} key={index}></SingleProduct>)
            }
           </div>
        </div>
    );
};

export default Products;