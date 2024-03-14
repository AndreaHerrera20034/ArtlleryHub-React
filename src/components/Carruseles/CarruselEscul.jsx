//import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
//import { ProductService } from './service/ProductService';
import { ProductService } from './ProductService';
import './Style.css';
import FavoriteButton from './FavoriteButton';

export default function CarruselPrincipal() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visualización del modal
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 6, // Cantidad de cards a mostrar
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 6, // Cantidad de cards a mostrar
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 6, // Cantidad de cards a mostrar
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'Pintura':
                return 'success';

            case 'Escultura':
                return 'warning';

            case 'ArteDigital':
                return 'danger';

            case 'Fotografía':
                return 'info';
            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const handleBuyClick = (product) => {
        setSelectedProduct(product); // Almacenar el producto seleccionado en el estado
        setShowModal(true); // Mostrar el modal al hacer clic en "Comprar"
    };

    const productTemplate = (product) => {
        return (
            <div className="flex flex-col items-center shadow rounded-2xl mx-4" style={{ backgroundColor: '#F9F7F3' }}>
                <div className="mb-3 pt-2">
                    <img src={product.image} alt={product.name} className="w-100 rounded-xl" />
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                    <h6 className="text-xl font-bold mb-3">{product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)} className={`mt-2 tag-${product.inventoryStatus.toLowerCase()}`}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button label='Comprar' rounded severity="success" className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-xl' onClick={() => handleBuyClick(product)} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container rounded-3xl mx-auto px-6 py-1 md:px-1 lg:py-4 lg:px-7">
            <h5 className="text-2xl text-yellow-900 font-bold mb-5 text-left">
                Escultura
            </h5>
            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
            </div>
            {/* Modal */}
            {showModal && selectedProduct && (
                <div className="flex fixed top-0 right-0 bottom-0 left-0 z-50 items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow-lg flex w-full md:max-w-3xl">
                        {/* Imagen */}
                        <div className="w-1/2 p-4 md:p-5">
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="object-cover w-64 h-64 md:h-auto md:w-full rounded-2xl" />
                        </div>
                        {/* Contenido del modal */}
                        <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
                            <div className='py-8'>
                                <h3 className="text-xl font-semibold text-gray-900">{selectedProduct.name}</h3>
                                {/* Mostrar detalles del producto seleccionado aquí */}
                                <p className="mb-2">Creador: {selectedProduct.user}</p>
                                <p className="mb-2">Descripción: {selectedProduct.description}</p>
                                <p className="mb-2">Precio: {selectedProduct.price}</p>
                            </div>
                            {/* Botón de cerrar modal */}
                            <div className="flex justify-evenly">
                                <button className="text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-2xl text-sm px-5 py-2.5" onClick={() => setShowModal(false)}>Comprar</button>
                                <FavoriteButton />
                            </div>
                        </div>
                        {/* Botón de cierre del modal */}
                        <button type="button" className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-400 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-400 dark:hover:text-white" data-modal-hide="static-modal" onClick={() => setShowModal(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Cerrar modal</span>
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}