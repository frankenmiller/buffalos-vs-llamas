import React from 'react';
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider, 
  Route, Link } from "react-router-dom";
import './css/index.css';
import './css/home.css';
import './css/slider.css';
import App from './App';
import About from './routes/about'
import Bufficorn from './routes/bufficorn'
import Projects from './routes/projects'
import Certificates from './routes/certificates';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <img src={require ("./images/bullet.png")} id='bullet_one' alt="bullet_one" />
        <img src={require ("./images/bullet.png")} id='bullet_two' alt="bullet_one" />
        <img src={require ("./images/bullet.png")} id='bullet_three' alt="bullet_one" />
        <img src={require ("./images/bullet.png")} id='bullet_four' alt="bullet_one" />
        <img src={require ("./images/bullet.png")} id='bullet_five' alt="bullet_one" />
        <h1>🌍 We welcome you 🌍<span id="littleto">to</span>Frankenmiller's World!</h1>
        <Link className='link' to="projects">Frankenmiller's Projects</Link>
        <br />
        <Link className='link' to="bufficorn">Frankenmiller's Bufficorn</Link>
        <br />
        <Link className='link' to="certificates">Frankenmiller's Certificates</Link>
        <br />
        <Link className='link' to="about">About Frankenmiller</Link>
        <br />
        <Link  className='link' to="app">Buffalos versus llamas</Link>
      </div>
    ),
  },
  {
    path: "app",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "certificates",
    element: <Certificates />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "bufficorn",
    element: <Bufficorn />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);