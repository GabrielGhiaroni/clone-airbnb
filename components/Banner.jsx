import React from 'react';
import Image from 'next/image';
import { BannerInfo } from '../data';

const Banner = () => {
    const {txt, txtBtn} = BannerInfo;

  return (
    <div className='relative h-[300px] md:h-[700px]'>
        <Image 
            src="https://links.papareact.com/0fm"
            layout='fill'
            className='object-cover'
        />
        <div className='absolute top-[50%] text-center w-full'>
            <p className='text-sm md:text-2xl font-bold text-[#f08484]'>{txt}</p>
            <button className='text-red-400 bg-white px-5 py-2 md:px-10 md:py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>{txtBtn}</button>
        </div>
    </div>
  )
}

export default Banner;