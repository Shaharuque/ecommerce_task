import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import pic from '../../Utilites/Images/icon.jpg'

const Header = () => {
    return (
        <div className='p-2 bg-teal-700 grid md:grid-cols-2 '>
            <div className=''>
                <img className='w-12 h-11 rounded-full ' src={pic} alt="" />
            </div>
            <div className='flex justify-center md:justify-end items-center'>
                <CustomLink className='text-white font-sans mr-2 font-bold' to='/home'>Home</CustomLink>
                <CustomLink className='text-white font-sans mr-2 font-bold' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='text-white font-sans mr-2 font-bold' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='text-white font-sans mr-2 font-bold' to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;