import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import Menu from "../icons/Menu";
import Close from "../icons/Close";

const Navbar = ({ bg }) => {

    let [ open, setOpen ] = useState(false);

    const navbar = document.getElementById("navbar");
    if(navbar != null)
        navbar.style.backgroundColor = "FF9A00"
        
    return(
        <>
            <div className=' w-full top-0 fixed left-0 z-50'>
                <div id="navbar" className={`md:flex items-center justify-between bg-${bg} py-4 md:px-10 px-7 h-20`}>
                    <div className='cursor-pointer flex items-center ml-8'>
                        {/* Legg til logo her!! */}
                    </div>
                    <div onClick={() => setOpen(!open)}>
                    {
                        open
                        ? <Close />
                        : <Menu />
                    }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-18 absolute md:static bg-${bg} md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
                         pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 pt-4 text-xl'>
                        </li>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/">
                                <p className='font-marker hover:text-red-600 duration-500'>Hjem</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/aktivitet">
                                <p className='font-marker hover:text-red-600 duration-500'>Aktivitet</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/landmaaling">
                                <p className='font-marker hover:text-red-600 duration-500'>Landmåling</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/admin">
                                <p className='font-marker hover:text-red-600 duration-500'>Admin</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-2xl md:my-0 my-7'>
                            <a href="https://www.instagram.com/hvl_maleklubb/">
                                <BsInstagram className='hover:text-red-600 duration-500' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;