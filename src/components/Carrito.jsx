import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

function Carrito() {
  const { carrito } = useContext(PizzaContext);
  const total = carrito.reduce((acu,element)=>acu+element.price,0)
  return (
     {total} 
  )
}

export default Carrito