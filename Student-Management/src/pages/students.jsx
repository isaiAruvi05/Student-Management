import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun Kumar", department: "CSE", email: "arun@gmail.com" },
    { id: 2, name: "Priya", department: "ECE", email: "priya@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  function addStudent(e) {
    e.preventDefault();

    if (!name || !department || !email) return;

    const newStudent = {
      id: Date.now(),
      name,
      department,
      email,
    };

    setStudents([...students, newStudent]);
    setName("");
    setDepartment("");
    setEmail("");
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div>
      <h1>Students</h1>
      <p>Manage student records</p>

      <form className="student-form" onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;