import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Explore from '../components/Explore';

const Home: NextPage = ({}) => {
  return (
    <div className="">
      <Head>
        <title>Clone Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 md:px-16'>
      <Explore />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
