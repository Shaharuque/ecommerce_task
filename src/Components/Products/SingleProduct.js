import React from 'react';
import Star from './Star';
import { MdDoubleArrow } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { image, title, category, rating, id, price } = product
    const navigate=useNavigate()

    const navigateToDetails=()=>{
        navigate(`/product/details/${id}`)
    }
    return (
        <div className='p-4 rounded shadow-lg shadow-black relative'>
            <div className='flex justify-center mb-4 '>
                <img className='w-1/4 ' src={image} alt={category}></img>
            </div>
            <h1 className='text-teal-600 font-bold'>{title}</h1>
            {
                rating.rate ? <Star rate={rating.rate}></Star> : null
            }
            <h1 className='font-bold text-teal-600'>PRICE: ${price}</h1>
            <div className='flex justify-end mt-8'>
                <button onClick={navigateToDetails} className='bg-teal-400 text-white px-2 mt-8 rounded-md hover:text-yellow-500 hover:bg-black absolute bottom-3 flex items-center'>Explore Product<MdDoubleArrow className='ml-1'></MdDoubleArrow></button>
            </div>

        </div>
    );
};

export default SingleProduct;