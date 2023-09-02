import axios from 'axios';

const API_KEY = 'ecd1ef739d214e488f3f5be2896ac87b';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const fetchMovies = async (timeWindow, page) => {
  try {
    const response = await axios.get(`trending/all/${timeWindow}`, {
      params: {
        key: API_KEY,

        page: page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
