import React from 'react';
import { FooterInfo } from '../data';

const Footer = () => {
  return (
    <footer className='bg-gray-50 mt-8 py-4 md:flex md:py-12 justify-center md:gap-x-14 lg:gap-x-24 xl:gap-x-36'>
        {FooterInfo.map((item, index) => {
            const {titulo, desc1, desc2, desc3, desc4} = item;
            return (
                <ul className='text-center py-4'>
                    <li>
                        <h2 className='text-lg font-bold'>{titulo}</h2>
                        <a href="#"><p className='text-sm pb-[.5px]'>{desc1}</p></a>
                        <a href="#"><p className='text-sm pb-[.5px]'>{desc2}</p></a>
                        <a href="#"><p className='text-sm pb-[.5px]'>{desc3}</p></a>
                        <a href="#"><p className='text-sm'>{desc4}</p></a>
                    </li>
                </ul>
            )
        })}
    </footer>
  )
}

export default Footer