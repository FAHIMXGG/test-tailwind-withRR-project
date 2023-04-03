import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:<HomePage></HomePage>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c'),
      },
      {
        path: 'about',
        element:<About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
