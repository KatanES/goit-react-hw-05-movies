import axios from 'axios';

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

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2QxZWY3MzlkMjE0ZTQ4OGYzZjViZTI4OTZhYzg3YiIsInN1YiI6IjY0ZjMxMjM1NzQ1MDdkMDExYzFlZWMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FVxiAL4TK20cJpj-fYSe2DKqJ9_MWQt2gEQwSAYwAJ0' \
//      --header 'accept: application/json'

export const fetchMovies = async (query, page) => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,

        language: 'en-US',
        page: page,
      },
    });

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