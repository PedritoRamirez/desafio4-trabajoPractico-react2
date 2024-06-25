import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Detalle = () => {
  const { pizzas, agregarAlCarrito } = useContext(PizzaContext);
  return (
    <div>
      {pizzas.map((e, id) => (
        <div className="card2" key={id}>
          <div className="contNomIng">
            <h5>Pizza: {e.name}</h5>
            <div className="ingrede">
              <h6>
                <b>Ingredientes:</b>
              </h6>
              <ul>
                {e.ingredients.map((ingredient, i) => (
                  <li key={i}>🍕 {ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <img className="imgMap2" src={e.img} alt="" />
          <div className="contDesPrBut">
            <h5>
              <b>Descripcion:</b>
            </h5>
            <p>{e.desc}</p>
            <h4>
              <b>Precio: {e.price}</b>
            </h4>
            <button onClick={() => agregarAlCarrito(e)}>
              Agregar al Carrito 🛒
            </button>
            <button> <Link to="/"> <h4>Volver</h4></Link></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detalle;
