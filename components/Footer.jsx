import React from 'react';
import {AiOutlineSearch, AiOutlineHeart, } from 'react-icons/ai';
import {FaAirbnb} from 'react-icons/fa';
import {BiMessageAlt} from 'react-icons/bi';
import {HiOutlineUserCircle} from 'react-icons/hi';
import { FooterInfo } from '../data';

const Footer = () => {
    const {txtIcone1, txtIcone2, txtIcone3, txtIcone4, txtIcone5} = FooterInfo;

  return (
    <footer className='sticky bottom-0 z-50 grid grid-cols-5 border-t-2 p-3 gap-x-6 md:hidden'>
        <div className='flex flex-col items-center'>
            <AiOutlineSearch className='h-8 w-8 text-gray-400'/>
            <p className='text-xs text-gray-500'>{txtIcone1}</p>
        </div>
        <div className='flex flex-col items-center'>
            <AiOutlineHeart className='h-8 w-8 text-gray-400'/>
            <p className='text-xs text-gray-500'>{txtIcone2}</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaAirbnb className='h-8 w-8 text-gray-400'/>
            <p className='text-xs text-gray-500'>{txtIcone3}</p>
        </div>
        <div className='flex flex-col items-center'>
            <BiMessageAlt className='h-8 w-8 text-gray-400'/>
            <p className='text-xs text-gray-500'>{txtIcone4}</p>
        </div>
        <div className='flex flex-col items-center'>
            <HiOutlineUserCircle className='h-8 w-8 text-gray-400'/>
            <p className='text-xs text-gray-500'>{txtIcone5}</p>
        </div>
    </footer>
  )
}

export default Footer;