import { useState } from "react";
import Link from "../Link/Link";
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen]= useState(false)
    
const routes = [
  { id: 'home', path: '/', name: 'Home' },
  { id: 'about', path: '/about', name: 'About' },
  { id: 'products', path: '/products', name: 'Products' },
  { id: 'contact', path: '/contact', name: 'Contact' },
  { id: 'dashboard', path: '/dashboard', name: 'Dashboard' }
];
    return (
        <nav className="text-black p-6 bg-yellow-200">
         <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <AiOutlineClose></AiOutlineClose>
                 :    <AiOutlineMenu className=""></AiOutlineMenu>

            }
      
         </div>
        

            <ul className={`md:flex absolute md:static duration-1000
            {
                ${open ? 'top-16': '-top-60'}
            }
            
            bg-yellow-200 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
           
        </nav>
    );
};

export default NavBar;