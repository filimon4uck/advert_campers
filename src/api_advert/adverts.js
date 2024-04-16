import axios from 'axios';

const baseURL = 'https://66199850125e9bb9f29a5d11.mockapi.io/api/';

const instantAdverts = axios.create({ baseURL });
export const fetchAdverts = async page => {
  const { data } = await instantAdverts.get(`advert?limit=4&page=${page}`);
  return data;
};
