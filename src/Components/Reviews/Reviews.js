import React from 'react';
//Custom Hook useReviews import
import {useReviews} from '../../Hooks/useReviews'
import Review from '../Review/Review';

const Reviews = () => {
    //by calling custom hook getting the data and stored into reviews using array destructring concept
    const [reviews,setReviews]=useReviews()
    
    return (
        <div className='p-8'>
            <p className='text-center text-teal-500 font-bold'>What customers says about our product({reviews.length})</p>
            {
                reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;