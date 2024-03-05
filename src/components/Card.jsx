import React from "react";

const Card = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container rounded-3xl mx-auto md:px-12 lg:py-2 lg:px-7 shadow-lg rounded-2xl overflow-hidden" style={{ backgroundColor: '#F9F7F3' }}>
                <div className="flex flex-col lg:flex-row items-start">
                    <div className="p-6 lg:w-1/2 lg:px-8 lg:py-12">
                        <h2 className="text-2xl font-bold mb-4">Discover the art of your choice!</h2>
                        <p className="text-gray-500 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odio veritatis omnis deserunt nihil reprehenderit illum sapiente ea rerum, atque reiciendis iste repellat labore alias, voluptatem vero impedit enim laboriosam?
                        </p>
                    </div>
                    <div className="lg:w-70 lg:h-84 relative">
                        <img src="src\images\cardimage.jpg" className="w-full h-full object-cover object-top lg:rounded-tl-lg lg:rounded-2xl" alt="Card" />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;