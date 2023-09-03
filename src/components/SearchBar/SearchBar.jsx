export const SearchBar = ({ handleSubmit }) => {
  const handleFormSubmit = evt => {
    // evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      alert('Enter movie');
      return;
    }
    handleSubmit(evt.target.elements.query.value); // Викликаємо handleSubmit
    evt.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Movie search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
