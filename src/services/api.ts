import axios from 'axios';

const BASE_URL = 'https://registro-es-3bc05-default-rtdb.firebaseio.com/';

export const fetchAccion = async () => {
  const response = await axios.get(`${BASE_URL}/Accion.json`);
  return response.data;
};

export const fetchAventura = async () => {
  const response = await axios.get(`${BASE_URL}/Aventura.json`);
  return response.data;
};

export const fetchTerror = async () => {
  const response = await axios.get(`${BASE_URL}/Terror.json`);
  return response.data;
};
