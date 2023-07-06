import {React, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import TextForm from './components/TextForm.js';
import User from './components/User';
import Profile from './components/Profile';

// import About from './components/About';  uncomment

import {
  createBrowserRouter ,
  // Router,
  RouterProvider,
  // Route
} from "react-router-dom";
// import About from './components/About';

// import Navbar from './components/Navbar'; 

const router = createBrowserRouter([
  {
    path: "/",
    element:<TextForm heading="Welder" heading1="Process"/>,
   
  },{
      path: "/user",
      element:<User heading="User"/>,
  },{
    path: "/profile",
    element:<Profile heading="Process"/>,
}

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router} /> 
 
  <StrictMode>
    {/* <User/>  */}
    {/* <DataEntry/> */}
    <App/>
  </StrictMode>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
