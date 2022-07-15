import React from 'react';
import { IoMdStar,IoMdStarHalf } from 'react-icons/io';


const Star = ({ rate }) => {
    return (
        <div>
            <h1 className='font-bold text-yellow-600'>{rate} out of 5 </h1>
            <div className='text-yellow-400 flex text-xl hover:text-black'>
                <IoMdStar></IoMdStar>
                <IoMdStar></IoMdStar>
                <IoMdStar></IoMdStar>
                <IoMdStarHalf></IoMdStarHalf>
            </div>
        </div>
    );
};

export default Star;