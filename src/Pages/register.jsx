import React, { useState } from "react";
import axios from "axios";
import loginImg from "../assets/login.jpg";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        email: email,
        password: password,
        name: fullName,
        rol : 'user'
      });
      console.log("Registro exitoso:", response.data);
 
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img className="absolute w-full h-full object-cover mix-blend-overlay" src={loginImg} alt="/" title="imagen de freepick" />
        <div className="flex justify-center items-center h-full">
          <form onSubmit={handleSubmit} className=" rounded-lg max-w-[450px] w-full mx-auto bg-white p-8 opacity-90">
            <h1 className="text-4xl font-bold text-gray-900 text-center py-8">Registro</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-5sm font-medium leading-6 text-gray-900 py-2">Nombre completo</label>
              <input className="border relative bg-gray-100 p-2" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-5sm font-medium leading-6 text-gray-900 py-2">Ingresa un correo</label>
              <input className="border relative bg-gray-100 p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="block text-5sm font-medium leading-6 text-gray-900">Ingresa una contraseña</label>
              <input className="border relative bg-gray-100 p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full py-3 mt-5 bg-red-600 hover:bg-red-500 relative text-white rounded-xl">Registrar</button>

            <p className="mt-10 text-center text-5sm text-gray-500">
            ¿Ya tienes cuenta?{' '}
            <a href="/Login" className="font-semibold leading-6 text-red-600 hover:text-orange-500">
               Iniciar sesión
            </a>
          </p>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
