import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Login from './Login/login.jsx';
import SignUp from './Signup/signup.jsx';
import Prop from './Properties/properties.jsx';
import NeedHelp from './Help/help.jsx';
import HomeOYO from './Help/homeOYO.jsx';
import BuyingYH from './Help/buyingYH.jsx';
import BeyondC from './Help/beyondC.jsx';
import SinglePost from './SinglePost/singlePost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login", // Add a slash before "login"
    element: <Login />,
  },
  {
    path: "/prop", // Add a slash before "prop"
    element: <Prop />,
  },
  {
    path: "/signup", // Add a slash before "signup"
    element: <SignUp />,
  },
  {
    path: "/needhelp", // Add a slash before "needhelp"
    element: <NeedHelp />,
  },
  {
    path: "/homeOYO", // Add a slash before "homeOYO"
    element: <HomeOYO />,
  },
  {
    path: "/buyingYH", // Add a slash before "buyingYH"
    element: <BuyingYH />,
  },
  {
    path: "/beyondC", // Add a slash before "beyondC"
    element: <BeyondC />,
  },
  {
    path: "/property/:id", // Add a slash before "property/:id"
    element: <SinglePost />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
