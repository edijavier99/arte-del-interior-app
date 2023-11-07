import React, { useEffect } from 'react';
import "../../styles/carrito.css"

const Carrito = ({ item }) => {
  return (
            <div className='d-flex bg-light flex-row mb-3 p-4'> 
              <div className='carritoImage'>
                <img src={item.image} alt="imagen producto" />
              </div>
              <div className='carritoInfo ms-5'>
                <p>{item.title}</p>
                <p>{item.price} €</p>
              </div>
            </div>
  );
};

export default Carrito;
