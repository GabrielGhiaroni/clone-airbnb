import React from 'react';

const LargeCard = ({img, titulo, descricao, botao}) => {
  return (
    <section className='max-w-7xl relative py-6 md:pt-10 md:pb-14 cursor-pointer mx-auto flex justify-center'>
        <div className='relative'>
            <img src={img} alt="card" className='h-60 w-[350px] md:w-[750px] lg:w-[900px] rounded-2xl object-cover' />
        </div>
        <div className='absolute top-10 min-[360px]:left-6 min-[360px]:top-11 min-[365px]:left-8 min-[390px]:left-10 min-[412px]:left-12 md:top-16 md:left-16 lg:left-24 xl:left-60'>
            <h3 className='text-lg font-semibold md:text-2xl'>{titulo}</h3>
            <p className='text-sm md:text-base'>{descricao}</p>
            <button className='text-white bg-red-400 px-4 py-2 rounded-lg mt-2 hover:bg-red-500'>{botao}</button>
        </div>
    </section>
  )
}

export default LargeCard;