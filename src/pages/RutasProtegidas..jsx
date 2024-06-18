import { usaAuth } from "../context/authContex"
import { Navigate, Outlet } from "react-router-dom";

function RutasProtegidas() {
    const {cargar, Autenticado} = usaAuth();
    console.log(cargar,Autenticado)

    if(cargar)return<h1>
        ....Cargando
    </h1>
    
    if(!cargar && !Autenticado)return  <Navigate to="/InicioSesion" replace/>;

    return <Outlet/>

}

export default RutasProtegidas