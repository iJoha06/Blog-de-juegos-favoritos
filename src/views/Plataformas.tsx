import React from 'react';

interface Plataformas {
  id: number;
  nombre: string;
  imgURL: string;
}

const plataformas: Plataformas[] = [
  {
    id: 1,
    imgURL: "https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg",
    nombre: "PC"
  },
  {
    id: 2,
    imgURL: "https://s.yimg.com/ny/api/res/1.2/q0B4IoyLSuEVUjAJeeaM.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://o.aolcdn.com/hss/storage/midas/bed0afde4825867b445ad256177f71fd/204298049/PS4+Pro+gallery+14.jpg",
    nombre: "PS4"
  },
  {
    id: 3,
    imgURL: "https://st4.depositphotos.com/1316534/24049/i/450/depositphotos_240496342-stock-photo-wroclaw-poland-jan-2019-xbox.jpg",
    nombre: "Xbox One"
  },
  {
    id: 4,
    imgURL: "https://cl2.buscafs.com/www.levelup.com/public/uploads/images/840638/840638.jpg",
    nombre: "PS5"
  },
  {
    id: 5,
    imgURL: "https://sm.ign.com/t/ign_es/screenshot/default/switch_a25b.1280.jpg",
    nombre: "Nintendo Switch"
  },
  {
    id: 6,
    imgURL: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/09/ps2.jpg",
    nombre: "PS2"
  },
  {
    id: 7,
    imgURL: "https://www.truetrophies.com/imgs/073302/ps3.jpg",
    nombre: "PS3"
  },
  
];

const Plataformas: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400 drop-shadow-lg">
        DISPONIBLE EN ESTAS PLATAFORMAS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {plataformas.map((plataforma) => (
          <div key={plataforma.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <img src={plataforma.imgURL} alt={plataforma.nombre} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-yellow-300">{plataforma.nombre}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plataformas;
