import React from 'react';
import useFavoriteGame from '../stores/favoriteGame';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavoriteGame();

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Mis Juegos Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-lg">No tienes juegos favoritos guardados.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.imageURL}
                alt={item.name}
                className="w-full h-48 object-cover mb-3 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{item.name}</h3>
              <button
                onClick={() => removeFavorite(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
              >
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
