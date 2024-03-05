import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CarouselFoto = () => {
    const items = [
        {
          id: 1,
          title: 'Cuadro árbol',
          type: 'Pintura',
          price: '$99',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Escultura mujer',
          type: 'Escultura',
          price: '$99',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Visión futurista',
          type: 'Arte digital',
          price: '$99',
          image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            title: 'Visión futurista',
            type: 'Arte digital',
            price: '$99',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            title: 'Visión futurista',
            type: 'Arte digital',
            price: '$99',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            title: 'Visión futurista',
            type: 'Arte digital',
            price: '$99',
            image: 'https://via.placeholder.com/150'
        }
      ];

    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setContainerWidth(carouselRef.current.offsetWidth);
        }
    }, []);

    const scrollTo = (scrollOffset) => {
        if (carouselRef.current) {
            setScrollPosition(prevPosition => prevPosition + scrollOffset);
            carouselRef.current.scrollLeft += scrollOffset;
        }
    };

    return(
        <div className="container rounded-3xl mx-auto px-6 py-1 md:px-1 lg:py-4 lg:px-7">
            <h5 className="text-2xl text-yellow-900 font-bold mb-5 text-left">
                Fotografía
            </h5>
            <div className="flex items-center space-x-4 overflow-hidden">
                <button className="focus:outline-none" onClick={() => scrollTo(-containerWidth)}>
                    <AiOutlineLeft />
                </button>
                <div ref={carouselRef} className="flex space-x-10" style={{ scrollBehavior: 'smooth', scrollLeft: scrollPosition }}>
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center rounded-2xl" style={{ backgroundColor: '#F9F7F3' }}>
                            <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-3xl mb-4" />
                            <p className="text-lg font-bold mb-2">{item.title}</p>
                            <p className="text-gray-500 mb-4">{item.type}</p>
                            <p className="text-xl font-bold mb-4">{item.price}</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-xl">
                                Comprar
                            </button>
                        </div>
                    ))}
                </div>
                <button className="focus:outline-none" onClick={() => scrollTo(containerWidth)}>
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );

}

export  default CarouselFoto; 