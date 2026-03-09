import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function StudentForm({ addStudent, editStudent, updateStudent }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {

    if (editStudent) {
      setForm(editStudent);
    }

  }, [editStudent]);

const validate = () => {

  if (!form.name || !form.email || !form.age) {
    return "All fields are required";
  }

  // Name validation (only letters and spaces, min 2 characters)
  const nameRegex = /^[A-Za-z ]{2,}$/;
  if (!nameRegex.test(form.name)) {
    return "Name must contain only letters and at least 2 characters";
  }

  // Email validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(form.email)) {
    return "Invalid Email";
  }

  // Age validation (number and reasonable range)
  const age = Number(form.age);
  if (isNaN(age) || age < 1 || age > 100) {
    return "Age must be a valid number between 1 and 100";
  }

  return null;
};

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    if (editStudent) {
      updateStudent(form);
    } else {
      addStudent(form);
    }

    setForm({
      name: "",
      email: "",
      age: ""
    });

    setError("");

  };

  return (

<motion.form
initial={{opacity:0}}
animate={{opacity:1}}
onSubmit={handleSubmit}
className="grid md:grid-cols-3 gap-4 mb-8"
>

<input
className="border p-3 rounded-xl"
placeholder="Name"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
className="border p-3 rounded-xl"
placeholder="Email"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
className="border p-3 rounded-xl"
type="number"
placeholder="Age"
value={form.age}
onChange={(e)=>setForm({...form,age:e.target.value})}
/>

<button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-xl px-4 py-3">

{editStudent ? "Update Student" : "Add Student"}

</button>

{error && <p className="text-red-500">{error}</p>}

</motion.form>

  );

}

export default StudentForm;