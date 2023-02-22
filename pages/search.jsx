import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BuscaInfo } from '../data';

const Search = () => {
    const {subtitulo, titulo, filtroUm, filtroDois, filtroTres, filtroQuatro} = BuscaInfo;
  return (
    <>
        <Header />
        <main className='flex'>
            <section className='mx-auto mt-8 md:mx-14'>
                <p className='text-sm'>3000 resultados</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Locais em xxxxxxxxx</h1>
                    <ul className='flex whitespace-nowrap gap-x-1 md:gap-x-4'>
                        <li className='filtros py-1 px-2 text-sm'>{filtroUm}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroDois}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroTres}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroQuatro}</li>
                    </ul>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Search;