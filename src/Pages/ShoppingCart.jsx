<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cartData from '../utils/cartData';
import Header from '../components/navbar';
import { TiDelete } from "react-icons/ti";
import Footer from '../components/footer';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [carts, setCarts] = useState(cartData); // Usamos el estado local para almacenar los datos del carrito

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCarts(updatedCart); // Actualizamos el estado local con el carrito actualizado
   
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCarts(updatedCart); // Actualizamos el estado local con el carrito actualizado
  
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart); // Actualizamos el estado local con el carrito actualizado
    
  };

  if (carts.length === 0) {
    return <>
    <Header></Header>
    <div className=' h-[55vh] flex justify-center items-center text-4xl '>
        El carrito esta vacío
      </div>
    </>
  }

  return <>
  <Header></Header>
    <div className='container mx-auto mt-2'>
      <div className='flex shadow-md my-0'>
        <div className='w-3/4 bg-white px-10 py-10'>
          <div className='flex justify-between border-b pb-2'>
            <h1 className='font-semibold text-2xl'>Carrito</h1>
            <h2 className='font-semibold text-2xl'>{carts?.length} Productos</h2>
          </div>
          <div className='flex mt-10 mb-5'>
            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
              Detalles del Producto
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
              Cantidad
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
              Precio
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
              Total
            </h3>
          </div>
          {carts?.map((cart) => {
            return (
              <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5' key={cart.id}>
                <div className='flex w-2/5'>
                  <div className='w-20'>
                    <img
                      className='h-24'
                      src={cart?.image}
                      alt={cart?.title}
                    />
                  </div>
                  <div className='flex flex-col justify-between ml-4 flex-grow'>
                    <span className='font-bold text-sm'>{cart?.title}</span>
                    <span className='text-red-500 text-xs capitalize'>
                      {cart?.category}
                    </span>
                    <div
                      className='font-semibold hover:text-red-500 text-gray-500 text-2xl cursor-pointer pl-4'
                      onClick={() => removeProduct(cart?.id)}
                    >
                      <TiDelete />
                    </div>
                  </div>
                </div>
                <div className='flex justify-center w-1/5'>
                  <svg
                    className='fill-current text-gray-600 w-3 cursor-pointer'
                    viewBox='0 0 448 512'
                    onClick={() => handleDec(cart?.id)}
                  >
                    <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                  </svg>

                  <input
                    className='mx-2 border text-center w-8'
                    type='text'
                    value={cart?.quantity}
                  />

                  <svg
                    className='fill-current text-gray-600 w-3 cursor-pointer'
                    onClick={() => handleInc(cart?.id)}
                    viewBox='0 0 448 512'
                  >
                    <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                  </svg>
                </div>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  ${cart?.price}
                </span>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  ${cart?.price * cart?.quantity}
                </span>
              </div>
            );
          })}
          <Link
            to={'/'}
            className='flex font-semibold text-indigo-600 text-sm mt-10'
          >
            <svg
              className='fill-current mr-2 text-indigo-600 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continua comprando
          </Link>
        </div>

        <div id='summary' className='w-1/4 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8'>Resumen del pedido</h1>
          <div className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-sm uppercase'>
              Productos: {carts?.length}
            </span>
            <span className='font-semibold text-sm'>
              ${total?.toFixed(2)}
            </span>
          </div>
     
          <div className='border-t mt-8'>
            
            <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
};

export default ShoppingCart;
=======
const shoppingCart = () => {
  return (
    <>
      <h1 className="test-xl flex items-center justify-center">
        Shopping Cart
      </h1>
    </>
  );
};

export default shoppingCart;
>>>>>>> evelynDev
