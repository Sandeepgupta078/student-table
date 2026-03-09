function SearchBar({ search, setSearch }) {

    return (
  
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-xl border focus:ring-2 focus:ring-indigo-400"
      />
  
    );
  
  }
  
  export default SearchBar;