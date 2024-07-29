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
//Examenes Flora
import LecFotos from "./components/ExamFoto.jsx";
import LecTipos from "./components/ExamTipos.jsx";
import LecCiclos from "./components/ExamCiclos.jsx";
import LecPartes from "./components/ExamPartes.jsx";
import LecImport from "./components/ExamImport.jsx";
//Examenes Fauna
import LecTiposHabit from "./components/ExamTiposHabit.jsx";
import LecAdap from "./components/ExamAdap.jsx";
import LecRelac from "./components/ExamRelac.jsx";
import LecCons from "./components/ExamCons.jsx";
//Examenes Cuerpo
import LecDigestivo from "./components/ExamDigestivo.jsx";
import Lec2Circulatorio from "./components/EmanCirculatorio.jsx";
import LecRespiratorio from "./components/ExamRespiratorio.jsx";
//Examenes Fisica
import LecCine from "./components/ExamCine.jsx";
import LecDinamica from "./components/ExamDina.jsx";
import LecEner from "./components/ExamEner.jsx";
//Examenes Quimica
import LecAtom from "./components/ExamAtomos.jsx";
import LecEnlaces from "./components/ExamEnlaces.jsx";




import Flora from "./pages/MateriaCiencias/Flora.jsx";
import Fauna from "./pages/MateriaCiencias/Fauna.jsx";
import Fisica from "./pages/MateriaCiencias/Fisica.jsx";
import Quimica from "./pages/MateriaCiencias/Quimica.jsx";
import CuerpoHumano from "./pages/MateriaCiencias/CuerpoHumano.jsx";
import LecReacciones from "./components/ExamReacciones.jsx";




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
    path: "/Flora",
    element: <Flora/>,
  },
  {
    path: "/Fauna",
    element: <Fauna/>,
  },
  {
    path: "/CuerpoHumano",
    element: <CuerpoHumano/>,
  },
  {
    path: "/Fisica",
    element: <Fisica/>,
  },
  {
    path: "/Quimica",
    element: <Quimica/>,
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
  {
    path: "/LecFotos",
    element: <LecFotos />,
  },
  {
    path: "/LecTipos",
    element: <LecTipos />,
  },
  {
    path: "/LecCiclos",
    element: <LecCiclos />,
  },
  {
    path: "/LecPartes",
    element: <LecPartes />,
  },
  {
    path: "/LecImport",
    element: <LecImport />,
  },
  // Lecciones Fauna
  {
    path: "/LecTiposHabit",
    element: <LecTiposHabit />,
  },
  {
    path: "/LecAdap",
    element: <LecAdap />,
  },
  {
    path: "/LecRelac",
    element: <LecRelac />,
  },
  {
    path: "/LecCons",
    element: <LecCons />,
  },

  //Lecciones Cuerpo Humano
 
  {
    path: "/LecCirculatorio",
    element: <Lec2Circulatorio />,
  },
  {
    path: "/LecDigestivo",
    element: <LecDigestivo />,
  },
  {
    path: "/LecRespiratorio",
    element: <LecRespiratorio />,
  },
  //Fisica
  {
    path: "/LecCine",
    element: <LecCine />,
  },
  {
    path: "/LecDinamica",
    element: <LecDinamica />,
  },
  {
    path: "/LecEner",
    element: <LecEner/>,
  },

//Quimica
  {
    path: "/LecAtom",
    element: <LecAtom/>,
  },
  {
    path: "/LecEnlaces",
    element: <LecEnlaces/>
  },
  {
    path: "/LecReacciones",
    element: <LecReacciones/>
  }
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
