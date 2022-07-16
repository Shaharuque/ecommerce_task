import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState()
    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setSingleProduct(data)
            })
    }, [id])

    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-6 p-8 bg-black'>
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className='flex justify-end shadow-yellow-400'>
                        <img className='w-96 rounded-md' src={singleProduct?.image} />
                    </div>
            }
            <div className='font-bold'>
                <h1 className='text-white '>Brand: <span className='text-yellow-400'>{singleProduct?.title}</span></h1>
                <h1 className='text-white text-sm mb-2'>Product Price: <span className='text-yellow-400 text-xl'>${singleProduct?.price}</span> </h1>
                <h1 className='text-white'>Category: <span className='text-yellow-400 capitalize'>{singleProduct?.category}</span> </h1>
                <h1 className='text-white'>Description: <span className='text-yellow-400 text-sm'>{singleProduct?.description}</span> </h1>
                <div className='flex mt-4'>
                    <button className='text-white bg-teal-400 px-4 rounded mr-2'>+</button>
                    <p className='text-yellow-400'>0</p>
                    <button className='text-white bg-teal-400 px-4 rounded ml-2'>-</button>
                </div>
                <div>
                    <button className='text-white bg-teal-400 px-4 rounded mt-4'>ADD TO CART</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;