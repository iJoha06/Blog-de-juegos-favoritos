import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { IoGameController, IoHomeSharp } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <nav className="bg-black p-2">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxzvTwG1X1B0N6vNCwfdXqX4y1lzF-Rb8Uw&s" alt="Logo" className="h-12"/>
        </Link>

        {/* Menú de Navegación */}
        <div className="flex-1 flex justify-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 flex items-center transform transition-transform duration-300 hover:scale-110"
          >
            <IoHomeSharp className="mr-1" /> Inicio
          </Link>
          <Link
            to="/juegos"
            className="text-white hover:text-gray-300 flex items-center transform transition-transform duration-300 hover:scale-110"
          >
            <FaPlaystation className="mr-1" /> Juegos
          </Link>
          <Link
            to="/favoritos"
            className="text-white hover:text-gray-300 flex items-center transform transition-transform duration-300 hover:scale-110"
          >
            <FaHeart className="mr-1" /> Favoritos
          </Link>
          <Link
            to="/plataformas"
            className="text-white hover:text-gray-300 flex items-center transform transition-transform duration-300 hover:scale-110"
          >
            <IoGameController className="mr-1" /> Plataformas
          </Link>
          <Link
            to="/nosotros"
            className="text-white hover:text-gray-300 flex items-center transform transition-transform duration-300 hover:scale-110"
          >
            <FaInfoCircle className="mr-1" /> Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
