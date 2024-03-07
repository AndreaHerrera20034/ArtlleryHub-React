import Hero from "../components/perfil/hero";
import Services from "../components/perfil/services";
import Portafolio from "../components/perfil/portafolio";
import "./perfil.css";

const perfil = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Portafolio />
      </main>
    </>
  );
};

export default perfil;
