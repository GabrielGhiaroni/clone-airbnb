import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BuscaInfo } from '../data';
import { useRouter } from 'next/router';
import { listaLocais } from '../data';
import Image from 'next/image';
import {AiTwotoneStar, AiOutlineHeart} from 'react-icons/ai';

const Search = ({dados}) => {
    console.log(dados);
    const {subtitulo, titulo, filtroUm, filtroDois, filtroTres, filtroQuatro} = BuscaInfo;
    const router = useRouter();
    const {local} = router.query;
    const localBuscadoCapitalize = local.charAt(0).toUpperCase() + local.slice(1);

  return (
    <>
        <Header placeholderBusca={localBuscadoCapitalize}/>
        <main className='flex'>
            <section className='mx-auto mt-8 md:mx-14'>
                <p className='text-sm'>{subtitulo}</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>{titulo}{localBuscadoCapitalize}</h1>
                    <ul className='flex whitespace-nowrap gap-x-1 md:gap-x-4 mb-5'>
                        <li className='filtros py-1 px-2 text-sm'>{filtroUm}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroDois}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroTres}</li>
                        <li className='filtros p-1 px-2 text-sm'>{filtroQuatro}</li>
                    </ul>
                    <div>
                        {
                            listaLocais.map((index, item) => {
                                const {src, titulo, subtitulo, descricao, avaliacao, preco} = index;
                                return (
                                        <div className=' md:flex mb-4 cursor-pointer hover:shadow-lg p-4 border-b w-full'>
                                            <div className='relative h-40 w-full md:52 md:w-80 flex-shrink-0'>
                                                <Image src={src} layout="fill" className='object-cover' />
                                            </div>
                                        
                                            <div className='flex flex-grow flex-col md:pl-5'>
                                                <div className='flex justify-between mt-3 md:mt-0'>
                                                    <h4 className='text-sm text-gray-500'>{subtitulo}</h4>
                                                    <AiOutlineHeart className='h-7 cursor-pointer'/>
                                                </div>
                                                <h1 className='text-xl'>{titulo}</h1>
                                                <div className='border-b w-10 pt-2'></div>
                                                <p className='pt-2 text-sm text-gray-500 flex-grow'>{descricao}</p>

                                                <div className='flex justify-between mt-3 md:mt-0'>
                                                    <div className='flex items-center gap-x-1'>
                                                        <AiTwotoneStar style={{'color': '#ffc73a'}} className="h-5"/>
                                                        <p>{avaliacao}</p> 
                                                    </div>  

                                                    <div className='flex items-center gap-x-[2px]'>
                                                        <p className='text-lg'>R${preco}</p>
                                                        <p className='text-xs'>/</p>
                                                        <p className='text-xs'>noite</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    const dados = searchResults.json(); 
    return {
        props: {
            dados
        }
    }
};
