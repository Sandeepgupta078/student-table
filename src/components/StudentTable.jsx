import { motion } from "framer-motion";

function StudentTable({ students, deleteStudent, setEditStudent }) {
  return (
    <div className="w-full">

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
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
            {students.map((student) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hover:bg-indigo-50"
              >
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.age}</td>

                <td className="p-3 space-x-2">
                  <button
                    onClick={() => setEditStudent(student)}
                    className="bg-yellow-400 px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">

        {students.map((student) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg rounded-xl p-4 border"
          >

            <p className="font-semibold text-lg">{student.name}</p>
            <p className="text-gray-600">{student.email}</p>
            <p className="text-sm">Age: {student.age}</p>

            <div className="flex gap-2 mt-3">

              <button
                onClick={() => setEditStudent(student)}
                className="bg-yellow-400 px-3 py-1 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default StudentTable;