import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import "./index.css";
import { AuthProve } from "./context/authContex"; // Asegúrate de que el nombre coincida con la exportación del archivo authContex.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion.jsx";
import Registrarse from "./pages/Registrarse.jsx";
import Matematicas from "./pages/Matematicas.jsx";
import SumasyRestas from "./pages/SumasyRestas.jsx";
import Fracciones from "./pages/Fracciones.jsx";
import Geometria from "./pages/Geometria.jsx";
import Aprendizaje from "./pages/Aprendizaje.jsx";
import Ciencias from "./pages/Ciencias.jsx";
import Lec1SumRes from "./components/ResSumasRestas.jsx";

import RutasProtegidas from "./pages/RutasProtegidas..jsx";
import Español from "./pages/Español.jsx";
import Ortografia from "./pages/Ortografia.jsx";
import Gramatica from "./pages/Gramatica.jsx";
import Literatura from "./pages/Literatura.jsx";
import Redaccion from "./pages/Redaccion.jsx";
import Comprension from "./pages/Comprension.jsx";
import MisVis from "./pages/MisVis.jsx";
import Valores from "./pages/Valores.jsx";
import { TaskProvider } from "./context/taskContext.jsx";
import Lec2SumRes from "./components/ExamSumasRestas2.jsx";
import LecEspasss from "./components/espano.jsx";
import LecOrtografia from "./components/ortografiaRes.jsx";

const inicioSesionRegistroRoutes = [
  {
    path: "/InicioSesion",
    element: <InicioSesion />,
  },
  {
    path: "/Registro",
    element: <Registrarse />,
  },
];

const otrasRutas = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Matematicas",
    element: <Matematicas />,
  },
  {
    path: "/Ciencias",
    element: <Ciencias />,
  },
  {
    path: "/Español",
    element: <Español />,
  },
  {
    path: "/SumasyRestas",
    element: <SumasyRestas />,
  },
  {
    path: "/Fracciones",
    element: <Fracciones />,
  },
  {
    path: "/Geometria",
    element: <Geometria />,
  },
  {
    path: "/AprendizajeGeneral",
    element: <Aprendizaje />,
  },
  {
    path: "/Ortografia",
    element: <Ortografia />,
  },
  {
    path: "/Gramatica",
    element: <Gramatica />,
  },
  {
    path: "/Literatura",
    element: <Literatura />,
  },
  {
    path: "/Redaccion",
    element: <Redaccion />,
  },
  {
    path: "/Comprension",
    element: <Comprension />,
  },
  {
    path: "/MisionVision",
    element: <MisVis />,
  },
  {
    path: "/Valores",
    element: <Valores />,
  },
  {
    path: "/ResSumasRestas",
    element: <Lec1SumRes />,
  },
  {
    path: "/resEspanol",
    element: <LecEspasss />,
  },
  {
    path: "/CuestionarodosSumasRests",
    element: <Lec2SumRes />,
  },
  {
    path: "/LecOrtografia",
    element: <LecOrtografia />,
  },
  

];

// Función para envolver cada elemento de la ruta con RutasProtegidas
const agregarRutasProtegidas = (rutas) => {
  return rutas.map((ruta) => {
    return {
      ...ruta,
      element: (
        <>
          {ruta.element}
          <RutasProtegidas />
        </>
      ),
    };
  });
};

const router = createBrowserRouter([
  ...inicioSesionRegistroRoutes,
  ...agregarRutasProtegidas(otrasRutas), // Agregar RutasProtegidas a todas las rutas
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProve>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </AuthProve>
  </React.StrictMode>
);
