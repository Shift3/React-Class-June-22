const SearchBar = (props) => {
  return(
    <form onSubmit={e => props.onSubmit(e)}>
      <label htmlFor="searchInput">
        Search Term:
        <input
          id="searchInput"
          placeholder="Enter movie, series, or episode name..."
          type="text"/>
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;