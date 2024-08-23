import React, { useState, useEffect } from 'react';
import { fetchAccion, fetchAventura, fetchTerror } from '../services/api'; 
import { juegosItemSchema, JuegosItem } from '../schema/juegosItem';
import useFavoriteGame from '../stores/favoriteGame';
import { Dialog, Transition } from '@headlessui/react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';

type CategoryType = 'accion' | 'aventura' | 'terror';

const Menu: React.FC = () => {
  const [category, setCategory] = useState<CategoryType>('accion');
  const [items, setItems] = useState<JuegosItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<JuegosItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavoriteGame();

  useEffect(() => {
    const fetchItems = async () => {
      let data;
      switch (category) {
        case 'accion':
          data = await fetchAccion();
          break;
        case 'aventura':
          data = await fetchAventura();
          break;
        case 'terror':
          data = await fetchTerror();
          break;
      }
      const validatedData = data.map((item: unknown) => juegosItemSchema.parse(item));
      setItems(validatedData);
    };
    fetchItems();
  }, [category]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as CategoryType);
  };

  const openModal = (item: JuegosItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = (item: JuegosItem) => {
    const isFavorite = favorites.some(fav => fav.name === item.nombre);
    if (isFavorite) {
      removeFavorite(item.nombre);
    } else {
      addFavorite({ id: item.nombre, name: item.nombre, type: category, imageURL: item.imgURL });
    }
  };

  return (
    <div className="container mx-auto px-4 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center text-green-500 drop-shadow-lg">
        Juegos más populares
      </h1>
      <div className="mb-6">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="block w-full p-3 border rounded bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
        >
          <option value="accion">Acción</option>
          <option value="aventura">Aventura</option>
          <option value="terror">Terror</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.nombre} className="border border-gray-700 rounded-lg p-4 bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <img src={item.imgURL} alt={item.nombre} className="w-full h-48 object-cover mb-3 rounded-lg" />
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3 text-center">{item.nombre}</h2>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => openModal(item)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
              >
                <FaInfoCircle className="mr-2" /> Acerca del Juego
              </button>
              <button
                onClick={() => toggleFavorite(item)}
                className={`px-4 py-2 rounded flex items-center justify-center transition-colors duration-300 ${
                  favorites.some(fav => fav.name === item.nombre)
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-600 text-gray-200 hover:bg-green-500'
                }`}
              >
                <FaHeart className="mr-2" />
                {favorites.some(fav => fav.name === item.nombre) ? 'Eliminar Favorito' : 'Agregar Favorito'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  {selectedItem && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-yellow-400 text-center mb-4"
                      >
                        {selectedItem.nombre}
                      </Dialog.Title>
                      <div className="mt-2 space-y-3 text-center">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold">Descripción:</span> {selectedItem.descripcion}
                        </p>
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold">Año de Lanzamiento:</span> {selectedItem.año}
                        </p>
                      </div>
                      <div className="mt-6 text-center">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cerrar
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Menu;
