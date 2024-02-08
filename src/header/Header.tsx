import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    isHome: boolean;
}

export default function Header(props: HeaderProps) {
    const isHome = props;

    return (
        <header className={`sticky top-0 z-40 w-full ${isHome ? "bg-[#DFE6E8]" :" bg-[#ffffff]"}`}>
            <div className='max-w-7xl mx-auto'>
                <div className='py-4 lg:px-8 mx-4 lg:mx-0'>
                    <div className='flex items-center justify-between'>
                        <div className='text-slate-900 font-normal text-3xl w-auto'>
                            <NavLink to="/">
                                Suwi UM.
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