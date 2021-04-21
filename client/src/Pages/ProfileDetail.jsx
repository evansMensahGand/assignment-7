// import { useParams, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";

// const ProfileDetail = () => {
//   const [student, setStudent] = useState({});
//   const params = useParams();
//   useHistory();
//   const history = useHistory();


//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(
//         `http://localhost:4000/students/${params.userId}`
//       );
//       const result = await data.json();
//       setStudent(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>ProfileDetail</h1>
//       <h1>{`${student.first_name}${student.last_name}`}</h1>
//       <p>
//         <strong>Gender:</strong> {student.gender}
//       </p>
//       <p>
//         <strong>Email:</strong> {student.email}
//       </p>
//       <p>
//         <strong>class:</strong> {student.class}
//       </p>
//       <button onClick={() => history.goBack()}>Go back</button>
//       <button onClick={() => history.push("/")}>Go Home</button>
//     </div>
//   );
// };

// export default ProfileDetail;
