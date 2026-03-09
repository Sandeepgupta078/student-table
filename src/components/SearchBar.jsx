// function SearchBar({ search, setSearch }) {

//     return (
//       <input
//         type="text"
//         placeholder="Search by name or email..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 rounded w-full mb-4"
//       />
//     );
  
//   }
  
//   export default SearchBar;


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