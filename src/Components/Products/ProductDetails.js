import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { FaCartPlus } from 'react-icons/fa';
import {TiMinus,TiPlus} from 'react-icons/ti'
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState()
    const [count,setCount]=useState(0)

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setSingleProduct(data)
            })
    }, [id])

    const handleIncrese=()=>{
         if(count>=0){
            setCount(count+1)
        }
    }

    const handleDecrese=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const handleCart=()=>{
        if(count!==0){
            toast.success('Product Successfully Added to Cart')
        }
        else{
            toast.error('Add atleast 1 item please')
        }
    }


    return (
        <div className='bg-black'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-6 p-8 '>
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
                    <div className='flex mt-8'>
                        <button onClick={handleDecrese} className='text-white bg-teal-400 px-4 rounded mr-2 font-bold hover:bg-yellow-600 hover:text-black'><TiMinus></TiMinus></button>
                        <p className='text-yellow-400'>{count}</p>
                        <button onClick={handleIncrese} className='text-white bg-teal-400 px-4 rounded ml-2 font-bold hover:bg-yellow-600 hover:text-black'><TiPlus></TiPlus></button>
                    </div>
                    <div >
                        <button onClick={handleCart} className='text-white bg-teal-400 px-4 rounded mt-4 hover:bg-yellow-600 hover:text-black  flex items-center'>Wishlist<FaCartPlus className='ml-1'></FaCartPlus></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;