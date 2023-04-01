import React, { useState } from 'react';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex gap-2 items-center"
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-52 h-24 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <Link to={link.linkTo} key={link.id}>
              <li className="text-white hover:text-white text-[18px] cursor-pointer font-medium">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* For Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt="menu"
            src={menuOpen ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } p-6 absolute top-20 right-0 mx-4 my-8 min-w-[140px] z-10 rounded-xl bg-primary text-white`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <Link to={link.linkTo} key={link.id}>
                  <li className="font-medium font-poppins cursor-pointer text-[16px]">
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
