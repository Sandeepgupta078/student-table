// import { useState } from "react";
// import StudentForm from "./components/StudentForm";
// import StudentTable from "./components/StudentTable";
// import Pagination from "./components/Pagination";
// import SearchBar from "./components/SearchBar";
// import useLocalStorage from "./hooks/useLocalStorage";
// import { exportToExcel } from "./utils/exportExcel";
// import toast, { Toaster } from "react-hot-toast";

// function App() {

//   const [students, setStudents] = useLocalStorage("students", []);
//   const [editStudent, setEditStudent] = useState(null);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const rowsPerPage = 5;

//   const filteredStudents = students.filter(
//     (s) =>
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.email.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);

//   const paginatedStudents = filteredStudents.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const addStudent = (student) => {

//     const newStudents = [
//       ...students,
//       { ...student, id: Date.now() }
//     ];

//     setStudents(newStudents);

//     toast.success("Student Added");

//   };

//   const updateStudent = (student) => {

//     const updated = students.map((s) =>
//       s.id === student.id ? student : s
//     );

//     setStudents(updated);

//     setEditStudent(null);

//     toast.success("Student Updated");

//   };

//   const deleteStudent = (id) => {

//     if (window.confirm("Delete this student?")) {

//       const updated = students.filter((s) => s.id !== id);

//       setStudents(updated);

//       toast.success("Student Deleted");

//     }

//   };

//   return (

//     <div className="max-w-5xl mx-auto mt-10">

//       <Toaster />

//       <h1 className="text-3xl font-bold mb-6">
//         Students Management
//       </h1>

//       <StudentForm
//         addStudent={addStudent}
//         editStudent={editStudent}
//         updateStudent={updateStudent}
//       />

//       <SearchBar
//         search={search}
//         setSearch={setSearch}
//       />

//       <div className="flex gap-3 mb-4">

//         <button
//           onClick={() => exportToExcel(students, "all_students")}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Download All
//         </button>

//         <button
//           onClick={() =>
//             exportToExcel(filteredStudents, "filtered_students")
//           }
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Download Filtered
//         </button>

//       </div>

//       <StudentTable
//         students={paginatedStudents}
//         deleteStudent={deleteStudent}
//         setEditStudent={setEditStudent}
//       />

//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />

//     </div>
//   );
// }

// export default App;




import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import useLocalStorage from "./hooks/useLocalStorage";
import { exportToExcel } from "./utils/exportExcel";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function App(){

const [students,setStudents] = useLocalStorage("students",[]);
const [editStudent,setEditStudent] = useState(null);
const [search,setSearch] = useState("");
const [currentPage,setCurrentPage] = useState(1);

const rowsPerPage = 5;

const filtered = students.filter(
s => s.name.toLowerCase().includes(search.toLowerCase()) ||
s.email.toLowerCase().includes(search.toLowerCase())
);

const totalPages = Math.ceil(filtered.length / rowsPerPage);

const paginated = filtered.slice(
(currentPage-1)*rowsPerPage,
currentPage*rowsPerPage
);

const addStudent = (student)=>{
const newStudents=[...students,{...student,id:Date.now()}]
setStudents(newStudents)
toast.success("Student Added")
}

const updateStudent = (student)=>{
const updated = students.map(s=>s.id===student.id?student:s)
setStudents(updated)
setEditStudent(null)
toast.success("Student Updated")
}

const deleteStudent=(id)=>{
if(window.confirm("Delete student?")){
setStudents(students.filter(s=>s.id!==id))
toast.success("Student Deleted")
}
}

return(

<div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-10">

<Toaster/>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
>

<h1 className="text-4xl font-bold mb-6 text-center">
🎓 Students Dashboard
</h1>

<StudentForm
addStudent={addStudent}
editStudent={editStudent}
updateStudent={updateStudent}
/>

<SearchBar search={search} setSearch={setSearch}/>

<div className="flex gap-3 mb-4">

<button
onClick={()=>exportToExcel(students,"all_students")}
className="bg-green-600 text-white px-4 py-2 rounded-xl"
>
Download All
</button>

<button
onClick={()=>exportToExcel(filtered,"filtered_students")}
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
>
Download Filtered
</button>

</div>

<StudentTable
students={paginated}
deleteStudent={deleteStudent}
setEditStudent={setEditStudent}
/>

<Pagination
totalPages={totalPages}
currentPage={currentPage}
setCurrentPage={setCurrentPage}
/>

</motion.div>

</div>

)
}

export default App