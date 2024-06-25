import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Link } from "react-router-dom";


function Nabvar() {
  const { carrito } = useContext(PizzaContext);
  return (
    <div className="titulo">
      <h3 className="tituloPrin">
        <Link className="textdeco" to="/">
          🍕¡Pizzeria Mama Mia!🍕
        </Link>
      </h3>
      <h3>🛒: {carrito.length}</h3> 
     
    </div>
  );
}

export default Nabvar;
