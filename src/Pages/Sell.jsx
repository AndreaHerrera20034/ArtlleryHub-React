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
      <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <div className="absolute bg-white opacity-70 inset-0 z-0"></div>
        <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Venta
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Hola, cuéntanos ¿qué vas a vender?
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <form className="mt-8 space-y-3">
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Nombre del producto:</label>
                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"></input>
              </div>

              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Descripción:</label>
                <textarea id="message" rows="4" className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"></textarea>
              </div>

              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Precio:</label>
                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"></input>
              </div>

              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Categoría:</label>
                <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                  <option value="">Pintura</option>
                  <option value="">Arte Digital</option>
                  <option value="">Escultura</option>
                  <option value="">Fotografía</option>
                </select>
              </div>

              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Cantidad:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="w-20 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <button type="submit" className="my-5 w-50 flex justify-center bg-blue-500 text-gray-100 p-4  rounded-lg tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                  Guardar
                </button>
              </div>
            </form>
          </div>


          <div className="mt-8 space-y-3 flex items-end justify-end w-full">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 bg-white hover:bg-gray-100 bg-gray-500 dark:hover:border-gray-100 dark:hover:bg-gray-400">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-300 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-400 dark:text-gray-300"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-400 dark:text-gray-300">PNG or JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Sell;
