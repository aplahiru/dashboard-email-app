import React from 'react';
import logo from '../../resources/logo.png';

function Navbar() {
  return (
      <header className='h-full sticky'>
        <nav className='grid grid-rows-[200px_minmax(100px,_1fr)_150px] h-full lg:w-20 bg-[#204fff]'>
          <div className='flex justify-center mt-8'>
            <img src={logo} className='h-12 w-12' alt="" />
          </div>
          <div className=''>
            <ul className='grid grid-rows-[repeat(8,_minmax(50px,_1fr))]'>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-clock"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-search"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-suitcase"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-user-friends"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-gem"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-link"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-comments text-white"/></li>
              <li className='flex lg:justify-center items-center hover:text-lg cursor-pointer text-slate-300 hover:text-white'><i className="fas fa-cog"/></li>
            </ul>
          </div>
        </nav>
      </header>
  );
}

export default Navbar;
