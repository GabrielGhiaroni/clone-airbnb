import React from 'react';
import Image from 'next/image';
import {AiOutlineSearch, AiOutlineGlobal, AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {NavbarInfo} from '../data.js';

const Header = () => {
    const {placeholder, anfitriao} = NavbarInfo;
  return (
    <header className='sticky top-0 z-50 grid md:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='hidden md:flex relative items-center h-6 md:h-10 cursor-pointer my-auto'>
            <Image 
                src="https://links.papareact.com/qd3"
                layout='fill'
                className='object-contain object-left'
            />
        </div>
        <div className='flex mx-auto w-[300px] md:w-full items-center justify-between border-2 rounded-full py-2 shadow-sm'>
            <input type="text" placeholder={placeholder} className='w-full px-10 md:px-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400'/>
            <AiOutlineSearch className='inline mx-4 h-8 bg-red-400 text-white rounded-full w-10 p-2 cursor-pointer'/>
        </div>

        <div className='flex items-center gap-4 justify-end text-gray-500'>
            <p className='hidden lg:inline cursor-pointer'>{anfitriao}</p>
            <AiOutlineGlobal className='hidden md:inline h-6 cursor-pointer'/>

            <div className='hidden md:flex gap-x-2 rounded-full items-center p-2 border-2'>
                <AiOutlineMenu className='h-6 cursor-pointer'/>
                <FaUserCircle className='h-6 cursor-pointer'/>
            </div>
        </div>
    </header>
  )
}

export default Header;