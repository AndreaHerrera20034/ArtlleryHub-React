import { useState, useRef } from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
const Sell = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Referencia al input de tipo file

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos del producto y la imagen a tu backend
    // para procesarlos, o realizar la lógica que necesites.

    // Por ejemplo, puedes crear un objeto FormData para enviarlos:
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);

    // Luego, puedes enviar formData mediante una solicitud HTTP (por ejemplo, mediante fetch o axios).

    // Reiniciamos el estado del formulario después de enviar los datos
    setProductName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage(null);

    // Reiniciamos el valor del input de tipo file
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Establecemos el valor en blanco
    }
  };

  //aqui se pontra

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
              required
            >
              <option value="" disabled>
                Seleccione una...
              </option>
              <option>Tecnologia</option>
              <option>Artesanía</option>
              <option>Contemporaneo</option>
              <option>Abstracto</option>
            </select>
          </div>
          <div className="mb-4 flex">
            <div className="w-2/3 pr-4">
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
                ref={fileInputRef}
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          {/* Mostramos la imagen seleccionada */}
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              style={{
                maxWidth: "300px",
                width: "100%",
                height: "auto",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            />
          )}
          <div style={{ justifyContent: "center", display: "flex" }}>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Sell;
