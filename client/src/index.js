

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Greet from './Greet';
// import Goodbye from './Goodbye';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Greet />
//     <Goodbye/>-
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Person from './person';
// import School from './School';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Person name="Pusher" age={41}/>
//     <Person name="Mary" age={52} />
//     <School name="BH ACADEMY" location="Fadama" />
//     <School headmaster="Aluguintuguin" numberOfCourses={14}/>

//   </React.StrictMode>,
//   document.getElementById('root')
// );





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import ToDo from './ToDo';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <ToDo/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Events from './Event';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Events />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



//  import React, { createContext } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Pages/Todo';
// // import App from "./App";
// import './index.css';
// // import Form from './forms';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./component/Header";
// import AboutPage from "./Pages/AboutPage";
// import ContactPage from "./Pages/ContactPage";
// import ServicePage from "./Pages/ServicePage";
// import HomePage from "./Pages/HomePage";
// import ProfilePage from "./Pages/Profile";
// import ProfileDetail from './Pages/ProfileDetail';
// import ProtectedPage from './Pages/ProtectedPage';
// import ProtectedRoute from './component/ProtectedRoute';
// import LoginPage from './Pages/LoginPage';
// import UserContextProvider from "./context/UserContext";
// import AuthContextProvider from "./context/AuthContext";
// let isLoggedIn = true;



ReactDOM.render(

  <React.StrictMode>
    {/* <AuthContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Contact" component={ContactPage} />
            <Route path="/Service" component={ServicePage} />
            <Route exact path="/Profile" component={ProfilePage} />
            <Route path="/Profile/:userId" component={ProfileDetail} />
            <Route path="/Login" component={LoginPage} />

            <ProtectedRoute
              path="/protected"
              component={ProtectedPage}
              isLoggedIn={isLoggedIn}
            />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </AuthContextProvider> */}
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
