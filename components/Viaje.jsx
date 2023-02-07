import React from 'react';
import {ViajeParaOndeQuiserInfo, ViajeParaOndeQuiserTitulo} from '../data';

const Viaje = () => {
  const {titulo} = ViajeParaOndeQuiserTitulo;
  return (
    <section>
        <h2 className='text-2xl md:text-4xl font-semibold pt-4 pb-6 md:pt-10 md:pb-14 text-center'>{titulo}</h2>
          <ul className='lg:flex md:grid md:grid-cols-2 md:gap-x-6 md:justify-center lg:space-x-8'>
            {
              ViajeParaOndeQuiserInfo.map((item, index) => {
                const {src, titulo} = item;
                return (
                  <li className='flex flex-col items-center pb-10 last:pb-4'>
                    <div className='hover:scale-110 hover:cursor-pointer text-center transition duration-200'>
                      <img src={src} alt="imagem-destino" className='w-[250px] md:w-[300px] lg:w-[350px] mb-2 rounded-lg'/>
                      <h1 className='text-lg'>{titulo}</h1>
                    </div>
                  </li>
                )
              })
            }
          </ul>
    </section>
  )
}

export default Viaje;