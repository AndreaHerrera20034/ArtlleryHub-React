import React, { useEffect, useState } from 'react';
import { CgShoppingCart } from 'react-icons/cg'
import cartData from '../utils/cartData';
import { IoPersonCircleSharp } from "react-icons/io5";



export default function Header() {
    const [carts, setCarts] = useState(cartData); // Usamos el estado local para almacenar los datos del carrito

    return (
        <nav className="flex items-center justify- flex-wrap bg-[#bce1ff] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">ArtlleryHub</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4">Home</a>
                    <a href="/Sell" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4">Vender</a>
                </div>
                <div className="mb-1 flex items-center">
                    <div className="relative w-64">
                        <input className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 sm:text-sm mr-4"
                            placeholder="Buscar pintura, escultura y más..." type="search" name="search">
                        </input>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
               <div>
                 <a href="/login" className='block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4'>
                    <span className='relative inline-block pl-5'>
                        <IoPersonCircleSharp className="inline-block text-4xl" />
                    </span>
                </a>
                <a href="/" className='block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4'>
                    <span className='relative inline-block'>
                        <CgShoppingCart className="inline-block text-3xl" />
                        <span style={{ fontSize: '10px' }} className='absolute bottom-5 left-9 bg-purple-800 text-white w-5 h-5 flex items-center justify-center rounded-full'>{carts?.length} </span>
                    </span>
                </a>
               </div>


            </div>
        </nav>
    );
}