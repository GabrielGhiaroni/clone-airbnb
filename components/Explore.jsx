import React from 'react';
import {ExploreInfo} from '../data';
import {MainInfo} from '../data';

const Explore = () => {
    const {titulo} = MainInfo;
  return (
    <section>
          <h2 className='text-2xl md:text-4xl font-semibold py-6 md:pt-10 md:pb-14 text-center'>{titulo}</h2>
            <ul className='md:grid md:grid-cols-2 xl:grid-cols-4'>
            {ExploreInfo.map((item, index) => {
                const {src, nome, distancia} = item;
                return (
                    <li key={index} className='flex flex-col items-center pb-10 last:pb-4'>
                      <div className='hover:scale-110 hover:cursor-pointer text-center transition duration-200'>
                        <img src={src} alt="imagem destino" className='w-[150px] md:w-[200px] mb-2 rounded-lg'/>
                        <h1 className='text-lg'>{nome}</h1>
                        <p className='text-xs md:text-sm text-gray-500'>{distancia}</p>
                      </div>
                    </li>
                )
            })}
            </ul>
    </section>
  )
}

export default Explore;