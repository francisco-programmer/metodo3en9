import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EnglishNow from './pages/EnglishNow.jsx';
import DecoracionDeFiestas from './pages/DecoracionDeFiestas.jsx';
import DeCeroTuPrimerEmpleo from './pages/DeCeroTuPrimerEmpleo.jsx';
import DesafioBilingue from './pages/DesafioBilingue.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <EnglishNow />,
  }, 

{
  path:"desafiobilingue",
  element: <DesafioBilingue/>
},
{
  path:"de-cero-a-tu-primer-empleo-en-ingles",
  element: <DeCeroTuPrimerEmpleo />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
