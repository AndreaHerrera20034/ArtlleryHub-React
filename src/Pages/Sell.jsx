import React, { useState } from 'react';
import Header from '../components/navbar';
import Footer from '../components/footer';

const Sell = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos del producto y la imagen a tu backend
    // para procesarlos, o realizar la lógica que necesites.

    // Por ejemplo, puedes crear un objeto FormData para enviarlos:
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    // Luego, puedes enviar formData mediante una solicitud HTTP (por ejemplo, mediante fetch o axios).

    // Reiniciamos el estado del formulario después de enviar los datos
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return <>
    <Header></Header>
    <div style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
        <div className="mb-4">
          <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">Nombre del producto:</label>
          <input
            id="product-name"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Precio:</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Imagen:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }} >
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</button>
        </div>

      </form>
    </div>
    <Footer></Footer>
  </>
}

export default Sell;
