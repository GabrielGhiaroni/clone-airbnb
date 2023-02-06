import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { MainInfo, ExploreInfo } from '../data';

const Home: NextPage = ({}) => {
  const {titulo} = MainInfo;
  return (
    <div className="">
      <Head>
        <title>Clone Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 md:px-16'>
        <section>
          <h2 className='text-2xl md:text-4xl font-semibold py-6 md:pt-10 md:pb-14 text-center'>{titulo}</h2>
          <div className='md:grid md:grid-cols-2 xl:grid-cols-4'>
            {ExploreInfo.map((item, index) => {
                const {src, nome, distancia} = item;
                return (
                  <ul>
                    <li className='flex flex-col items-center pb-10'>
                      <div className='hover:scale-110 hover:cursor-pointer text-center transition duration-200'>
                        <img src={src} alt="imagem destino" className='w-[150px] md:w-[200px] mb-2 rounded-lg'/>
                        <h1 className='text-lg'>{nome}</h1>
                        <p className='text-xs md:text-sm text-gray-500'>{distancia}</p>
                      </div>
                    </li>
                  </ul>
                )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


// INSERIR MANUALMENTE AS INFOS DE DESTINO
export default Home;
