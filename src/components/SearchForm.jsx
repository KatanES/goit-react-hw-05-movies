function SearchForm({ queryUpdate }) {
  const onHandleSubmin = async e => {
    const target = e.currentTarget.search.value.trim();
    e.preventDefault();
    if (target !== '') {
      queryUpdate(target);
    }
    return;
  };
  return (
    <form onSubmit={onHandleSubmin}>
      <input
        required
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
