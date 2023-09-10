import {
  SearchInput,
  SearchBtn,
  SearchBarContainer,
  SearchBarForm,
} from './SearchBar.styled';
export const SearchBar = ({ handleSubmit }) => {
  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      alert('Enter movie');
      return;
    }
    handleSubmit(evt.target.elements.query.value); // Викликаємо handleSubmit
    evt.target.reset();
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleFormSubmit}>
        <SearchInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Movie search"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
