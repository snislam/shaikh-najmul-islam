import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-blue-900'>
            <div className='flex flex-row justify-between items-center h-[70px] container mx-auto px-12'>
                <div>
                    <Link className='text-3xl font-bold' to='/'>
                        <span className='font-bold text-white'>Najmul<span className='text-[#ffb700]'>Islam</span></span>
                    </Link>
                </div>
                <div>
                    <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}> {!isOpen ? <MenuIcon className='w-8 h-8 text-white' /> : <XIcon className='w-8 h-8 text-white' />} </button>
                    <menu className={isOpen ? 'absolute md:static md:mt-0 left-0 top-[70px] w-full px-8 py-3 duration-700 md:duration-0 bg-[#FBD062] md:bg-transparent' : 'absolute md:static mt-[-580px] md:mt-0 left-0 top-[70px] w-full px-8 py-3 duration-700 md:duration-0 bg-[#FBD062] md:bg-transparent'}>
                        <ul className='block md:flex md:flex-row justify-center items-center'>
                            <li className='my-2 py-1 bg-[#f9c43d] md:bg-transparent hover:bg-yellow-600 duration-500 font-semibold hover:border-b-2 border-[#d09809]'><Link className='text-slate-200 px-2 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='/'>Home</Link></li>
                            <li className='my-2 py-1 bg-[#f9c43d] md:bg-transparent hover:bg-yellow-600 duration-500 font-semibold hover:border-b-2 border-[#d09809]'><Link className='text-slate-200 px-2 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='#portfolio'>Our Portfolio</Link></li>
                            <li className='my-2 py-1 bg-[#f9c43d] md:bg-transparent hover:bg-yellow-600 duration-500 font-semibold hover:border-b-2 border-[#d09809]'><Link className='text-slate-200 px-2 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='#our-team'>Our Team</Link></li>
                            <li className='my-2 py-1 bg-[#f9c43d] md:bg-transparent hover:bg-yellow-600 duration-500 font-semibold hover:border-b-2 border-[#d09809]'><Link className='text-slate-200 px-2 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='/contact'>Contact Us</Link></li>
                        </ul>
                    </menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;