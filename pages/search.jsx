import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  return (
    <>
        <Header />
        <main className='flex'>
            <section>
                <p className='text-sm'>3000 resultados</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Locais em xxxxxxxxx</h1>
                <div>
                    <ul className='flex'>
                        <li className='filtros'>Cancelamento flexível</li>
                        <li className='filtros'>Tipo de local</li>
                        <li className='filtros'>Preço</li>
                        <li className='filtros'>Quartos</li>
                    </ul>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Search;