import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
export const getCharacters = async (page, signal) => {
  const params = {
    page,
  };

  try {
    const { data } = await axios.get('character', { params, signal });
    const { results, info: { pages } } = data;
    const characters = results;
    const totalPages = pages;
    console.log(data);

    return { characters, totalPages };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

export const getSearchedCharacters = async (query, signal) => {
  const params = {
    name: query,
  };

  try {
    const { data } = await axios.get('character', { params, signal });
    const { results, info: { count } } = data;
    const characters = results;
    const totalResults = count;
    return { characters, totalResults };
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
};

export const getInfo = async id => {
  try {
    const { data } = await axios.get(`character/${id}`);
    return data;
  } catch (error) {
    if (axios.isCancel(error)) return { cancel: true };
    throw new Error(error);
  }
}
