// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useHistory } from "react-router-dom";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [_, setAuth] = useContext(AuthContext);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "Evans" && password === "password") {
//       setAuth(true);
//       history.push("/protected");
//     } else {
//       history.push("/login");
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Email">Email</label>
//         <input
//           type="Email"
//           name="Email"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
