//import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
//import { ProductService } from './service/ProductService';
import { ProductService } from './ProductService';
import './Style.css';

export default function CarruselPrincipal() {
    const [products, setProducts] = useState([]);
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

    const productTemplate = (product) => {
        return (
            <div className="flex flex-col items-center shadow rounded-2xl mx-4" style={{ backgroundColor: '#F9F7F3' }}>
                <div className="mb-3">
                    <img src={product.image} alt={product.name} className="w-100 rounded-md" />
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                    <h6 className="text-xl font-bold mb-3">{product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)} className={`mt-2 tag-${product.inventoryStatus.toLowerCase()}`}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button label='Comprar' rounded severity="success" className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-xl' />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container rounded-3xl mx-auto px-6 py-1 md:px-1 lg:py-4 lg:px-7" style={{ backgroundColor: '#F9F7F3' }}>
            <h5 className="text-2xl text-yellow-900 font-bold mb-5 text-left">
                Puede interesarte
            </h5>
            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
            </div>
        </div>
        
    )
}