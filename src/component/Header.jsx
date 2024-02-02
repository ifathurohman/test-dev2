import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="w-full h-[72px] px-[108px] py-2.5 justify-between items-center inline-flex">
                <div className="pr-[7px] justify-start items-center flex">
                    <div className="w-[86.21px] justify-center items-center gap-[5.02px] flex">
                        <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 15225">
                                <path id="Subtract" d="M14.8622 0.903677C13.4321 0.311323 11.9001 0.00439289 10.3525 4.68355e-05L10.3191 0C8.22812 -2.11185e-06 6.17399 0.552291 4.36468 1.60127C2.54576 2.65582 1.03953 4.0511 1.90735e-06 5.87865C1.03953 7.70621 2.54576 9.2249 4.36468 10.2795C5.62787 11.0118 7.01039 11.5021 8.44148 11.7313C11.5072 11.7621 13.9835 14.4226 13.9835 17.7C13.9835 20.2034 12.5386 22.3469 10.4898 23.2334C10.7374 23.5405 11.1187 23.724 11.5407 23.6803C12.6806 23.5624 13.7995 23.2798 14.8622 22.8397C16.3026 22.2431 17.6113 21.3686 18.7137 20.2662C19.8161 19.1638 20.6905 17.8551 21.2871 16.4148C21.8837 14.9744 22.1908 13.4307 22.1908 11.8717C22.1908 10.3127 21.8837 8.76892 21.2871 7.32858C20.6905 5.88824 19.8161 4.57952 18.7137 3.47713C17.6113 2.37474 16.3026 1.50028 14.8622 0.903677Z" fill="#00A5DD" />
                                <path id="Vector" d="M11.571 23.8993C11.6032 23.7626 11.5966 23.6195 11.5521 23.4863C11.5076 23.353 11.4268 23.2348 11.3189 23.1449C11.211 23.055 11.0801 22.9969 10.941 22.9771C10.8019 22.9573 10.6601 22.9767 10.5314 23.033L3.60185 26.0673C2.9365 26.3584 3.02491 27.3305 3.73186 27.4968L6.63843 28.1806C6.75128 28.207 6.85654 28.2591 6.94608 28.3327C7.03562 28.4063 7.10704 28.4995 7.15483 28.6051L8.41383 31.3999C8.71037 32.0587 9.67409 31.966 9.8397 31.262L11.571 23.8993Z" fill="#FF851B" />
                                <circle id="Ellipse 54" cx="1.2549" cy="1.2549" r="1.2549" transform="matrix(-1 0 0 1 8.78406 4.39209)" fill="white" />
                            </g>
                        </svg>
                        <div><span className="text-sky-500 text-[15.06px] font-black font-Inter">Fish</span><span className="text-orange-500 text-[15.06px] font-normal font-Inter">Info</span></div>
                    </div>
                </div>
                {/* <div className="">
                    <a className="text-center text-sky-500 text-base font-bold font-Poppins leading-[15px]">Beranda</a>
                    <a className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px]">Informasi perikanan</a>
                    <a className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px]">Gudang Ikan</a>
                    <a className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px]">Katalog Produk</a>
                </div> */}
                <nav className="justify-start items-center gap-8 flex">
                    <Link to={'/'} className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px] hover:text-sky-500 active:font-bold focus:outline-none focus:font-bold  focus:text-sky-500">
                    Beranda
                    </Link>
                    <Link to={'/informasi'} className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px] hover:text-sky-500 active:font-bold focus:outline-none focus:font-bold  focus:text-sky-500">
                    Informasi perikanan
                    </Link>
                    <Link to={'/gudang'} className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px] hover:text-sky-500 active:font-bold focus:outline-none focus:font-bold  focus:text-sky-500">
                    Gudang Ikan
                    </Link>
                    <Link to={'/product'} className="text-center text-zinc-800 text-base font-normal font-Poppins leading-[15px] hover:text-sky-500 active:font-bold focus:outline-none focus:font-bold  focus:text-sky-500">
                    Katalog Produk
                    </Link>
                </nav>
                <div className="text-center text-blue-800 text-base font-medium font-Poppins leading-[15px]">Login </div>
            </div>
        </header>
    )
}

export default Header