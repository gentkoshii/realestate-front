import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login/login.jsx'
import SignUp from './Signup/signup.jsx'
import Prop from './Properties/properties.jsx'
import NeedHelp from './Help/help.jsx'
import HomeOYO from './Help/homeOYO.jsx'
import BuyingYH from './Help/buyingYH.jsx'
import BeyondC from './Help/beyondC.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "prop",
    element: <Prop />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "needhelp",
    element: <NeedHelp />,
  },
  {
    path: "homeOYO",
    element: <HomeOYO />,
  },
  {
    path: "buyingYH",
    element: <BuyingYH />,
  },
  {
    path: "beyondC",
    element: <BeyondC />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
