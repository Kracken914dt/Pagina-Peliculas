import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaPrincipal from '../pages/PaginaPrincipal';
import DetallesPelicula from "../pages/DetallesPelicula";

function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PaginaPrincipal/>} />
            <Route exact path="/movies/:movieId" element={<DetallesPelicula/>} />    
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes