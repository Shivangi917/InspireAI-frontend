import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-slate-200 text-black pt-10 pb-2'>
      <ul className='flex justify-around'>
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => 
              isActive ? 'underline underline-offset-8 decoration-slate-900 text-slate-900' : 'text-slate-900'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/about'
            className={({ isActive }) => 
              isActive ? 'underline underline-offset-8 decoration-slate-900 text-slate-900' : 'text-slate-900'
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
