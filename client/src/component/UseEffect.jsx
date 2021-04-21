import { useState, useEffect } from "react";

const UseEffect = () => {
  const [index, setIndex] = useState("");
  const [student, setStudent] = useState({});
  useEffect(() => {
    // async/await
    // const fetchData = async () => {
    //     const result = await fetch("http://localhost:4000/students");
    //     const students = await result.json();
    //     console.log(students);
    // };

    // then/catch
    fetch(`http://localhost:4000/students/${index}`)
      .then((data) => data.json())
      .then((students) => console.log(students))
      .catch((err) => console.error(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>UseEffect</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button>Search for students</button>
      </form>
      <h1> Student</h1>
      <p>First Name: {student.first_name} </p>
      <p>Last Name: {student.last_name} </p>
      <p>Email: {student.email} </p>
      <p>Gender:{student.gender} </p>
      <p>Class:{student.class} </p>
    </div>
  );
};

export default UseEffect;
