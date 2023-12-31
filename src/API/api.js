import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'ecd1ef739d214e488f3f5be2896ac87b';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2QxZWY3MzlkMjE0ZTQ4OGYzZjViZTI4OTZhYzg3YiIsInN1YiI6IjY0ZjMxMjM1NzQ1MDdkMDExYzFlZWMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FVxiAL4TK20cJpj-fYSe2DKqJ9_MWQt2gEQwSAYwAJ0',
  },
};

const params = {
  key: API_KEY,
};

export const getTrendingList = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?language=en-US`,
      options,
      params
    );
    console.log(response);
    if (response) {
      const data = response.data;
      console.log(data);
      return data;
    } else {
      throw new Error('Empty response');
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const fetchMovies = async MovieName => {
  try {
    const response = await axios.get(
      `/search/movie?language=en-US&query=${MovieName}`,
      {
        params: {
          api_key: API_KEY,

          language: 'en-US',
        },
      }
    );

    if (response.status === 200) {
      const data = response.data;
      return data.results;
    } else {
      throw new Error('Got empty response');
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Could not get movie data');
    throw error;
  }
};

export const getCast = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      ...options,
      params,
    });
    console.log(response);
    if (response) {
      const data = response.data;
      console.log(data);
      return data;
    } else {
      throw new Error('Empty response');
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong!', {
      icon: '🤯',
    });
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      ...options,
      params,
    });
    console.log(response);
    if (response) {
      const data = response.data.results;
      console.log(data);
      return data;
    } else {
      throw new Error('Empty response');
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong!', {
      icon: '🤯',
    });
  }
};
