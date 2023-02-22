import React, { useState } from 'react';
import Image from 'next/image';
import {AiOutlineSearch, AiOutlineGlobal, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {NavbarInfo} from '../data.js';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router.js';

const Header = () => {
    const {placeholder, anfitriao, numeroConvidados} = NavbarInfo;
    const [searchBar, setSearchBar] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberGuests, setNumberGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (e) => {
        setStartDate(e.selection.startDate);
        setEndDate(e.selection.endDate);
    };
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const buscarLocal = () => {
        searchBar && router.push({
            pathname: 'search',
            query: {
                local: searchBar
            }
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchBar) {
            router.push({
                pathname: 'search',
                query: {
                    local: searchBar
                }
            });
            setSearchBar('');
        };
    };

  return (
    <header className='sticky top-0 z-50 grid md:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div onClick={() => router.push("/")} className='hidden md:flex relative items-center h-6 md:h-10 cursor-pointer my-auto'>
            <Image 
                src="https://links.papareact.com/qd3"
                layout='fill'
                className='object-contain object-left'
            />
        </div>
        <div className='flex mx-auto w-[300px] md:w-full items-center justify-between border-2 rounded-full py-2 shadow-sm'>
            <input value={searchBar} onKeyPress={handleKeyPress} onChange={(e) => setSearchBar(e.target.value)} type="text" placeholder={placeholder} className='w-full px-10 md:px-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400'/>
            <AiOutlineSearch onClick={buscarLocal} className='inline mx-4 h-8 bg-red-400 text-white rounded-full w-10 p-2 cursor-pointer'/>
        </div>

        <div className='flex items-center gap-4 justify-end text-gray-500'>
            <p className='hidden lg:inline cursor-pointer'>{anfitriao}</p>
            <AiOutlineGlobal className='hidden md:inline h-6 cursor-pointer'/>

            <div className='hidden md:flex gap-x-2 rounded-full items-center p-2 border-2'>
                <AiOutlineMenu className='h-6 cursor-pointer'/>
                <FaUserCircle className='h-6 cursor-pointer'/>
            </div>
        </div>
        {searchBar && (
            <div className='hidden md:flex flex-col mx-auto col-span-3'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                />
                <div className='flex border-b mb-4 items-center'>
                    <h2 className='text-2xl font-semibold flex-grow'>{numeroConvidados}</h2>
                    <AiOutlineUser className='h-6'/>
                    <input type="number" value={numberGuests} onChange={(e) => setNumberGuests(e.target.value)} min={1} className='w-12 pl-2 text-lg outline-none text-red-400' />
                </div>
                <div className='flex'>
                    <button className='flex-grow bg-gray-200 p-1 rounded-tl-lg rounded-bl-lg' onClick={() => setSearchBar('')}>Cancelar</button>
                    <button onClick={() => router.push({
                        pathname: 'search',
                        query: {
                            local: searchBar
                        }
                    })} className='flex-grow bg-red-400 text-white rounded-tr-lg rounded-br-lg'><span onClick={() => setSearchBar('')}>Buscar</span></button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header;