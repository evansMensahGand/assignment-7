// import { useState } from "react";

// const Events = () => {
//     const handleClick = () => console.log("You've clicked me!");

//     return (
//         <div>
//             <h1> Events</h1>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// };

// export default Events;

// import { useState } from "react";

// const Events = () => {
//   const [firstName,setFirstName] = useState("");
//   const [lastName,setlastName] = useState("");

//   return (
//     <div>
//       <h1> Events</h1>
//           <label htmlFor="">First Name</label>
//           <input type="text" name="firstName" id="firstName" value={firstName} onchange={(e) => setfirstName(e.target.value)}/>
//           <label htmlFor=""> Last Name </label>
//           <input type="text" name="lastName" id="lastName" value={lastName} onchange={(e) => setLastName(e.target.value)}/>
//     </div>
//   );
// };

// export default Events;

import { useState } from "react";

const Events = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const handleBlur = () => {
    if (password === confirmPassword) {
      alert("You are registered");
    } else {
      alert("password did not match");
    }
  };
  // password===confirmPassword

  return (
    <div>
      <h1> Events</h1>
      <label htmlFor="">Password</label>
      <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => console.log("I am focused.")}
              onBlur={() =>console.log("I am not focused")}
      />
      <label htmlFor="">Confirm Password </label>
      <input
        type="text"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Events;
