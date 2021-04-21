// import { useState } from "react";

// const Form = () => {
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [country, setCountry] = useState("");
//   // rather use the method
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     gender: "",
//   });

//   const handlechange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setState({ ...state, [name]: value });
//   };

//   return (
//     <>
//       <h1>Forms</h1>
//       <hr />
//       <form action="">
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={state.firstName}
//             //   onChange={(e) => setFirstName(e.target.value)}   we had to change to the principle below to make it simpler
//             onChange={handlechange}
//           />
//           <input
//             type="text"
//             name="firstName"
//             value={state.firstName}
//             //   onChange={(e) => setFirstName(e.target.value)}
//             onChange={handlechange}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={state.lastName}
//             //   onChange={(e) => setLastName(e.target.value)}
//             onChange={handlechange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             value={state.email}
//             //   onChange={(e) => setEmail(e.target.value)}
//             onChange={handlechange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="Password"
//             name="password"
//             value={state.password}
//             //   onChange={(e) => setPassword(e.target.value)}
//             onChange={handlechange}
//           />
//         </div>
//         <div>
//           <label htmlFor="gender">Gender</label>
//           <select
//             // type="text"
//             name="gender"
//             value={state.gender}
//             //   onChange={(e) => setCountry(e.target.value)}
//             onChange={handlechange}
//           >
//             <option value="">---Select Gender---</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//       </form>
//       <hr />
//       <p>First Name:{state.firstName}</p>
//       <p>Last Name:{state.lastName}</p>
//       <p>Email:{state.email}</p>
//       <p>Password:{state.password}</p>
//       <p>Gender:{state.gender}</p>
//     </>
//   );
// };

// export default Form;
