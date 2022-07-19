
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useReviews } from '../../Hooks/useReviews';
//image utilities folder thekey import korey use kora holo
import pic from '../../Utilites/Images/product.jpg'
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    //useReviews custom hook
    const [reviews, setReviews] = useReviews()
    //console.log(reviews.length)
    const [show, setShow] = useState(false)

    //See all comments btn event handler
    const navigate = useNavigate()
    const allReviews = () => {
        //navigate('/reviews')
        setShow(!show)
    }

    return (
        <div>
            <div className='p-8 grid md:grid-cols-2 gap-6'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-mono'>BEST SELLING PRODUCT</h1>
                    <span className='text-sm font-serif text-teal-700'>in amazon site...</span>

                    <a href='#home' className='bg-teal-700 text-white font-sans mt-12 rounded w-1/4'>
                        <p className='text-center'>Live Demo</p>
                    </a>
                </div>
                <div className='rounded shadow-lg shadow-teal-700'>
                    <img className='' src={pic} alt="" />
                </div>
            </div>

            <div className='my-8'>
                <h1 className='text-center font-bold text-xl'>Best Selling Products</h1>
                <Products></Products>
            </div>

            <div>
                <h1 className='font-mono text-center mt-12 text-teal-800 font-semibold text-2xl'>Customer Reviews({reviews.length})</h1>
                <div className='p-8'>
                    {
                        show ? reviews.map(review => <Review key={review._id} review={review}></Review>) : reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
                <div className='flex justify-center my-6 '>
                    <button onClick={allReviews} className='text-center bg-teal-700 text-white font-sans rounded  p-3 '>{
                        show?'Show less comments':'Show more comments'
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default Home;