import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <div className="w-full text-center mb-8 pt-8">
        <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-md">
          Watchgames 
        </h1>
        <h1 className="text-3xl font-extrabold text-blue-200 drop-shadow-md">
          Analiza, puntua y debate los juegos del momento
        </h1>
      </div>

      <section id="sistema-ya" className="py-12 flex-grow">
        <div className="container mx-auto">
          <div className="relative w-full h-96 lg:h-[700px] overflow-hidden rounded-lg shadow-lg mb-8">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="w-full h-full"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/wukong.jpg"
                  alt="Wukong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/csgos.jpg"
                  alt="CS:GO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/public/zelda.jpg"
                  alt="The Legend of Zelda"
                  className="w-full h-full object-cover"
                />
              </div>
            </Carousel>
          </div>

          <div className="lg:ml-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              Descubre <span className="text-blue-500">nuevos videojuegos</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Sumérgete en el universo de los videojuegos con nuestra plataforma, donde te ofrecemos una experiencia incomparable para explorar, disfrutar y compartir tus juegos favoritos. Aquí, cada jugador encuentra su aventura.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Explorar:</strong> Adéntrate en nuestra vasta biblioteca de videojuegos, cuidadosamente seleccionados para ofrecerte las mejores y más recientes experiencias. Navega por categorías, descubre nuevos lanzamientos y revive los clásicos que definieron una era.
              </li>
              <li>
                <strong>Puntuar:</strong> Deja tu marca en la comunidad gamer puntuando los juegos que más te apasionan. Tu opinión ayuda a otros jugadores a encontrar el próximo gran título para disfrutar.
              </li>
              <li>
                <strong>Favoritos:</strong> Guarda una lista personalizada de tus juegos preferidos. Accede rápidamente a ellos desde tu perfil y nunca pierdas de vista esos títulos que siempre quieres tener a mano.
              </li>
              <li>
                <strong>Opiniones:</strong> Lee reseñas detalladas de otros jugadores y expertos en videojuegos para tomar decisiones informadas. Entérate de las últimas novedades, estrategias y secretos antes de sumergirte en la acción.
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              Ya seas un aventurero en busca de la próxima gran epopeya, un estratega afilando sus tácticas, o un velocista deseoso de sentir la adrenalina, nuestra plataforma tiene algo para ti. Vive una experiencia gamer completa, diseñada para llevar tu pasión por los videojuegos al siguiente nivel.
            </p>
          </div>
        </div>
      </section>

      <section id="mas-populares" className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Juegos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Aventura Épica</h3>
              <p className="text-gray-300 mb-4">
                Sumérgete en una historia llena de acción y aventuras. Explora mundos fantásticos, enfréntate a enemigos poderosos y descubre secretos ocultos mientras te embarcas en una aventura épica.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Puntuar</button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Carreras Extremas</h3>
              <p className="text-gray-300 mb-4">
                Experimenta la velocidad al límite con los mejores juegos de carreras. Compite contra otros jugadores, personaliza tus vehículos y desafía a tus amigos en pistas emocionantes.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Puntuar</button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Mundo Abierto</h3>
              <p className="text-gray-300 mb-4">
                Explora vastos mundos abiertos donde la libertad es la clave. Crea tu propio destino, interactúa con personajes interesantes y disfruta de una experiencia de juego sin límites.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Puntuar</button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Estrategia y Conquista</h3>
              <p className="text-gray-300 mb-4">
                Desafía tu mente con juegos de estrategia donde cada decisión cuenta. Planea tus movimientos, construye imperios y conquista a tus enemigos para ser el mejor estratega.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Puntuar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
