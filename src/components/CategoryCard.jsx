import React from "react";
export default function CategoryCard(){
    return(
        <div className="py-6" style={{backgroundColor: '#F9F7F3'}}>
            <h2 className="text-center text-2xl font-bold mb-5">Category</h2>

            <div className="flex justify-center space-x-6">
                {/* card 1 */}
                <div className="max-w-xl rounded-xl shadow-lg" style={{backgroundColor: '#82CDDE'}}>
                    <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full pt-2" src="https://res.cloudinary.com/dcud5isuy/image/upload/v1710697885/Pintura_splfzo.jpg" alt="Pintura" />
                    <div className="px-8 py-4">
                        <div className="font-bold text-xl mb-2">Pinturas</div>
                    </div>
                </div>

                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#82CDDE'}}>
                    <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full pt-2" src="https://res.cloudinary.com/dcud5isuy/image/upload/v1710697884/Escultura_fgf2wt.jpg" alt="Escultura" />
                    <div className="px-8 py-4">
                        <div className="font-bold text-xl mb-2">Escultura</div>
                    </div>
                </div>

                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#82CDDE'}}>
                    <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full pt-2" src="https://res.cloudinary.com/dcud5isuy/image/upload/v1710697886/Arte_digital_u3fqbj.jpg" alt="ArteDigital" />
                    <div className="px-8 py-4">
                        <div className="font-bold text-xl mb-2">Arte Digital</div>
                    </div>
                </div>

                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#82CDDE'}}>
                    <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full pt-2" src="https://res.cloudinary.com/dcud5isuy/image/upload/v1710697885/Fotograf%C3%ADa_ekjqwu.jpg" alt="Fotografia" />
                    <div className="px-8 py-4">
                        <div className="font-bold text-xl mb-2">Fotografía</div>
                    </div>
                </div>
            </div>
        </div>
    );
}