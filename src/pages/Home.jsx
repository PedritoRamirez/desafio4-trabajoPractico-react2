import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { pizzas, agregarAlCarrito } = useContext(PizzaContext);
  const navigate = useNavigate();
  return (
    <>   
      <div className="contCard">
        {pizzas.map((e, id) => (
          <div className="card" key={id}>
            <h5>Pizza: {e.name}</h5>
            <img className="imgMap" src={e.img} alt="" />
            <h6>
              <b>Ingredientes:</b>
            </h6>
            <ul>
              {e.ingredients.map((ingredient, i) => (
                <li key={i}>🍕 {ingredient}</li>
              ))}
            </ul>
            <h4>
              <b>Precio: {e.price}</b>
            </h4>
            
            <button onClick={()=>navigate(`/${e.id}`)}>Descripcion</button>  
            <button onClick={() => agregarAlCarrito(e)}>
              Agregar al Carrito 🛒
            </button>
          </div>
        ))}
      </div>
      <footer className="foter">Hecho por: Pedro Ramirez. Todos los derechos Reservados</footer>
    </>
  );
}
