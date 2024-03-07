import { useState } from "react";
import axios from "axios";
import loginImg from "../assets/login.jpg";
import HomePage from "./Home"; // Importa tu componente de la página de inicio

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está autenticado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;

      // Almacena el token en el almacenamiento local (localStorage) para su uso en toda la aplicación
      localStorage.setItem("token", token);

      // Actualiza el estado para indicar que el usuario está autenticado
      setIsLoggedIn(true);
    } catch (error) {
      setError(
        "Error al iniciar sesión. Por favor, verifique su correo electrónico y contraseña."
      );
    }
  };

  // Si el usuario está autenticado, renderiza la página de inicio
  if (isLoggedIn) {
    return <HomePage />;
  }

  // Si el usuario no está autenticado, renderiza el formulario de inicio de sesión
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay "
        src={loginImg}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="rounded-lg max-w-[450px]   w-full  mx-auto  bg-white  p-8  opacity-90">
          <h1 className="text-4xl font-bold  text-gray-900 text-center py-8 ">Login</h1>

=======
        <form
          onSubmit={handleSubmit}
          className="max-w-[450px]   w-full  mx-auto  bg-white  p-8  opacity-90"
        >
          <h1 className="text-4xl font-bold  text-gray-900 text-center py-8 ">
            Login
          </h1>
>>>>>>> evelynDev
          <div className="flex flex-col  mb-4">
            <label className="block text-5sm font-medium leading-6 text-gray-900 py-2 ">
              Correo
            </label>
            <input
              className="border relative bg-gray-100  p-2 "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between py-2">
            <label
              htmlFor="password"
              className="block text-5sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-red-600 hover:text-red-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="flex flex-col  mb-4">
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
          {/* Muestra el mensaje de error si existe */}
          <button
            type="submit"
            className="w-full py-3 mt-5 bg-red-600  hover:bg-red-500 relative text-white rounded-xl"
          >
            Ingresar
          </button>
          <p className="flex items-center text-5sm text-gray-500  mt-5">
            <input className="mr-2" type="checkbox" />
            Recuérdame
          </p>
          <p className="mt-10 text-center text-5sm text-gray-500">
<<<<<<< HEAD
            ¿No tienes una cuenta?{' '}
            <a href="/Register" className="font-semibold leading-6 text-red-600 hover:text-orange-500">
=======
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-red-600 hover:text-orange-500"
            >
>>>>>>> evelynDev
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
