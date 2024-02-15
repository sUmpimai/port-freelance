import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='sticky top-0 z-40 w-full bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-8 mx-0'>
                    <div className='flex items-center justify-between'>
                        <div className='text-slate-900 font-normal text-4xl w-auto'>
                            <NavLink to="/">
                                <span className='inline-block w-10 h-10 border-4 border-[#334155] text-center'>S.</span>
                            </NavLink>
                        </div>
                        <div className='flex items-center text-slate-900 space-x-5'>
                            <NavLink to="/" className="hover:text-slate-500">
                                Home
                            </NavLink>
                            <NavLink to="/projects" className="hover:text-slate-500">
                                Works
                            </NavLink>
                            <NavLink to="/contact" className="hover:text-slate-500">
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}