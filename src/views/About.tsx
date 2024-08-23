import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 drop-shadow-lg">Sobre Nosotros</h1>
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="relative">
            <img
              src="https://www.laregion.es/asset/thumbnail,1920,1080,center,center/media/laregion/images/2024/05/31/2024053117485158336.jpg"
              alt="Gaming"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Nuestra Historia</h2>
            <p className="text-gray-300 mb-4">
              Fundado por un grupo de apasionados del gaming en 2015, nuestro sitio web nació con el objetivo de reunir a jugadores de todo el mundo para compartir su amor por los videojuegos.
            </p>
            <p className="text-gray-300 mb-4">
              Desde nuestros humildes comienzos, hemos crecido enormemente, ofreciendo una plataforma donde los jugadores pueden descubrir, puntuar y compartir sus videojuegos favoritos mientras disfrutan de una comunidad vibrante.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Nuestro Objetivo</h2>
            <p className="text-gray-300">
              Nuestro objetivo es proporcionar un espacio dedicado a los gamers donde puedan encontrar los juegos más emocionantes, interactuar con otros jugadores y disfrutar de una experiencia completa. Nos comprometemos a ofrecer contenido de calidad y mantener una comunidad inclusiva y apasionada por los videojuegos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
