import React, { useState } from 'react';

const Review = (props) => {
    const {review}=props
    const {name,comment,ratings}=review

    const [toggle,setToggle]=useState(false)
    const showOrNot=()=>{
        setToggle(!toggle)
    }
    console.log(toggle)
    return (
        <div className=' border-2 mt-6 shadow-lg shadow-teal-200 p-4'>
            <h1 className='font-mono text-xl mb-4'>{name}</h1>
            <p className='font-serif'>
            {/*using conditional rendering */}
            {
                comment.length <30 || toggle ? comment: comment.slice(0,30)+'...'
            }
            <button onClick={showOrNot} className='rounded bg-teal-400 md:ml-4 p-1 text-xs text-white hover:bg-purple-800 mb-3'>Show more</button>
            </p>
            <p className='font-sans'>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;