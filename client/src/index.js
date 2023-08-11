import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider,Route} from "react-router-dom";


import Main from './pages/Main';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Booki from './pages/Booki/Booki'

import Kasa from './pages/Kasa/Kasa'

import Grimoire from './pages/Grimoire/Grimoire'



import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element= { <Main /> } >
        <Route path="/Home" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Booki" element={ <Booki/> } />
        
        
        
        <Route path="/Kasa" element={ <Kasa/> } />
        
        <Route path="/Grimoire" element={ <Grimoire/> } />
        
        
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)

