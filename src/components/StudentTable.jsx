// import { exportToExcel } from "../utils/exportExcel";

// function StudentTable({ students, deleteStudent, setEditStudent }) {

//   return (
//     <div>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => exportToExcel(students)}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Download Excel
//         </button>
//       </div>

//       <table className="w-full border">

//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Age</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((student) => (

//             <tr key={student.id}>

//               <td className="p-2 border">
//                 {student.name}
//               </td>

//               <td className="p-2 border">
//                 {student.email}
//               </td>

//               <td className="p-2 border">
//                 {student.age}
//               </td>

//               <td className="p-2 border space-x-2">

//                 <button
//                   onClick={() => setEditStudent(student)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteStudent(student.id)}
//                   className="bg-red-600 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>

//               </td>

//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default StudentTable;


import { motion } from "framer-motion";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  return (

<table className="w-full rounded-xl overflow-hidden shadow-lg">

<thead className="bg-indigo-600 text-white">

<tr>

<th className="p-3">Name</th>
<th className="p-3">Email</th>
<th className="p-3">Age</th>
<th className="p-3">Actions</th>

</tr>

</thead>

<tbody>

{students.map((student)=>(
<motion.tr
key={student.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="hover:bg-indigo-50"
>

<td className="p-3">{student.name}</td>
<td className="p-3">{student.email}</td>
<td className="p-3">{student.age}</td>

<td className="p-3 space-x-2">

<button
onClick={()=>setEditStudent(student)}
className="bg-yellow-400 px-3 py-1 rounded-lg"
>
Edit
</button>

<button
onClick={()=>deleteStudent(student.id)}
className="bg-red-500 text-white px-3 py-1 rounded-lg"
>
Delete
</button>

</td>

</motion.tr>
))}

</tbody>

</table>

  );

}

export default StudentTable;