// function Pagination({ totalPages, currentPage, setCurrentPage }) {

//     return (
//       <div className="flex gap-2 mt-4 justify-center">
  
//         {Array.from({ length: totalPages }, (_, i) => (
  
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 border rounded ${
//               currentPage === i + 1 ? "bg-blue-500 text-white" : ""
//             }`}
//           >
//             {i + 1}
//           </button>
  
//         ))}
  
//       </div>
//     );
  
//   }
  
//   export default Pagination;

function Pagination({ totalPages, currentPage, setCurrentPage }) {

    return (
  
      <div className="flex justify-center gap-2 mt-6">
  
        {Array.from({ length: totalPages }, (_, i) => (
  
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-1 rounded-lg border ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : ""
            }`}
          >
            {i + 1}
          </button>
  
        ))}
  
      </div>
  
    );
  
  }
  
  export default Pagination;