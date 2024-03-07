import Hero from "../components/perfil/hero";
import Portafolio from "../components/perfil/portafolio";
import Navbar from "../components/navbar";
import "./perfil.css";

const perfil = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portafolio />
      </main>
    </>
  );
};

export default perfil;
