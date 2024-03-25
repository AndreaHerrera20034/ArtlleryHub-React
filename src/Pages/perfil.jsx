import Navbar from "../components/navbar";
import Hero from "../components/perfil/hero";
import OtroPor from "../components/perfil/otroport";


import "./perfil.css";

const perfil = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <Hero />

        <OtroPor />
      </div>
    </>
  );
};

export default perfil;
