import { useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, logout } from './auth';

export default function Header() {

    const [loggedIn, setLoggedIn] = useState(isLoggedIn());

    const handleLogout = () => {
        logout();
        setLoggedIn(false);
    };

    return (
        <nav className="flex items-center justify- flex-wrap bg-teal-500 p-6 ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="/">
                    <span className="font-semibold text-xl tracking-tight">ArtlleryHub</span>
                </a>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4">Home</a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4">Category</a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4">Vender</a>
                </div>
                <div className="mb-1 flex items-center mr-4">
                    <div className="relative w-64">
                        <input className="block w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md leading-8 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 sm:text-sm"
                            placeholder="Buscar pintura, escultura y más..." type="search" name="search">
                        </input>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                {loggedIn ? (
                    <button onClick={handleLogout} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cerrar sesión</button>
                ) : (
                    <>
                        <a href="/Login">
                            <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                        </a>
                        <a href="/Register">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-teal-500 rounded-md group-hover:bg-opacity-0">
                                    Sign In
                                </span>
                            </button>
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
}