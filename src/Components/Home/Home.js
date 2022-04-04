import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useReviews } from '../../Hooks/useReviews';
//image utilities folder thekey import korey use kora holo
import pic from '../../Utilites/Images/product.jpg'
import Review from '../Review/Review';

const Home = () => {
    //useReviews custom hook
    const [reviews, setReviews] = useReviews()
    console.log(reviews.length)

    //See all comments btn event handler
    const navigate=useNavigate()
    const allReviews=()=>{
        navigate('/reviews')
    }

    return (
        <div>
            <div className='p-8 grid md:grid-cols-2 gap-6'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-mono'>BEST SELLING PRODUCT</h1>
                    <span className='text-sm font-serif text-teal-700'>in amazon site...</span>

                    <Link to='/about' className='bg-teal-700 text-white font-sans mt-12 rounded w-1/4'>
                        <p className='text-center'>Live Demo</p>
                    </Link>
                </div>
                <div className='rounded shadow-lg shadow-teal-700'>
                    <img className='' src={pic} alt="" />
                </div>
            </div>
            <div>
                <h1 className='font-mono text-center mt-12 text-teal-800 font-semibold text-2xl'>Customer Reviews ({(reviews.length)-5})</h1>
                <div className='p-8'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
                <div className='flex justify-center my-6 '>
                    <button onClick={allReviews} className='text-center bg-teal-700 text-white font-sans rounded  p-3 '>See all comments</button>
                </div>
            </div>
        </div>
    );
};

export default Home;