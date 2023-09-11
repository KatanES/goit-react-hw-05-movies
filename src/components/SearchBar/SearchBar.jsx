import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { useSearchParams, useNavigate } from 'react-router-dom';

import {
  SearchInput,
  SearchBtn,
  SearchBarContainer,
  SearchBarForm,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Оновлення параметра "query" в URL при зміні стану "query"
    searchParams.set('query', query);
    navigate(`?${searchParams.toString()}`);
  }, [query, searchParams, navigate]);

  const inputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }
    // Оновлення стану "query" при відправці форми
    setQuery(query);
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          name="movie_name"
          title="Enter movie name"
          required
          placeholder="Search movie"
          value={query}
          onChange={inputChange}
        />
        <SearchBtn type="submit">
          <GoSearch size="20" />
        </SearchBtn>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
