import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";
import {Routes,Route } from "react-router-dom";
import Error from "./pages/Error";
import Nabvar from "./pages/Nabvar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Nabvar/>
      <Header/>
      <Routes>
        <Route path="/:id" element={<Detalle/>}/>    
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>    
        {/* <Route path="/carrito" element={<Carrito/>}/>  */}
      </Routes>
    </>
  );
}

export default App;
