import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();


// eslint-disable-next-line react/prop-types
export default function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  async function getPizzas() {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  }
  function agregarAlCarrito({id,name,price,img}){
    const articulo = {id,name,price,img,cant:1,tot:0}
    const indiceDePizzas = carrito.findIndex((pizza)=>pizza.id===id)
    if(indiceDePizzas >= 0){
      carrito[indiceDePizzas].cant++
      carrito[indiceDePizzas].tot= carrito[indiceDePizzas].tot * carrito[indiceDePizzas].cant
      setCarrito([...carrito])

    }else{
      setCarrito([...carrito,articulo])
    }
    // const total = carrito.reduce((acu,element)=>acu+element.price,0) 
  }
  useEffect(() => {
    getPizzas();
  }, []);
  return (
    <>
      <PizzaContext.Provider value={{pizzas, setPizzas, carrito, setCarrito, agregarAlCarrito}}>
        {children}
      </PizzaContext.Provider>
    </>
  );
}
