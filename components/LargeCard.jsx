import React from 'react';

const LargeCard = ({img, titulo, descricao, botao}) => {
  return (
    <section className='max-w-7xl relative py-6 md:pt-10 md:pb-14 cursor-pointer mx-auto flex justify-center'>
        <div className='relative'>
            <img src={img} alt="card" className='h-60 w-[350px] md:h-[100%] w-[1050px] rounded-2xl object-cover' />
        </div>
        <div className='absolute top-[40px] left-6 md:top-24 md:left-36'>
            <h3 className='text-lg md:text-4xl md:mb-2'>{titulo}</h3>
            <p className='text-sm md:text-lg md:mb-2'>{descricao}</p>
            <button className='text-white bg-red-400 px-4 py-2 rounded-lg mt-2 hover:bg-red-500'>{botao}</button>
        </div>
    </section>
  )
}

export default LargeCard;