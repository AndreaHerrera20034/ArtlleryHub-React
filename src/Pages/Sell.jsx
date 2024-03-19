import { useState, useRef } from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

const Sell = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  const fileInputRef = useRef(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);
  
    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/postArt/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("Respuesta del servidor:", response.data);
  
      setProductName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
  
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      // Aquí puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario
    } finally {
      setLoading(false);
    }
  }; 

  return (
    <>
      <Header></Header>
      <div style={{ paddingTop: "20px", paddingBottom: "60px" }}>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 p-8 bg-gray-100 rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="product-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre del producto:
            </label>
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
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Descripción:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Precio:
            </label>
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
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Categoria:
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required>
              <option value="" disabled>Seleccione una...</option>
              <option>Pinturas</option>
              <option>Escultura</option>
              <option>Arte Digital</option>
              <option>Fotografía</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Imagen:
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef} // Asignamos la referencia al input de tipo file
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            {/* Botón de Guardar */}
            {loading ? ( // Si loading es true, mostrar el botón de carga
              <button
                disabled
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            ) : ( // Si loading es false, mostrar el botón Guardar
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Sell;
