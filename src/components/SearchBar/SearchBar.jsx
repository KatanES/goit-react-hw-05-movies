import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

import {
  SearchInput,
  SearchBtn,
  SearchBarContainer,
  SearchBarForm,
} from './SearchBar.styled';

const SearchBar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const inputChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    if (!query.trim()) {
      return;
    }
    onChange(query);
    setQuery('');
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

export default SearchBar;
