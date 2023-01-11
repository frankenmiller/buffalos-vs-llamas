import React from 'react';
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider, 
  Route, Link } from "react-router-dom";
import './css/index.css';
import './css/slider.css';
import App from './App';
import About from './routes/about'
import Bufficorn from './routes/bufficorn'
import Projects from './routes/projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Frankenmiller</Link>
        <br />
        <Link to="projects">Frankenmiller's Projects</Link>
        <br />
        <Link to="bufficorn">Frankenmiller's Bufficorn</Link>
        <br />
        <Link to="app">Buffalos versus llamas</Link>
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