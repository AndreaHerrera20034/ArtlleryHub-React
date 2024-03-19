import Navbar from "../components/navbar";

import Sidebar from "../components/perfil/sidebar";

import "./perfil.css";

const perfil = () => {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </>
  );
};

export default perfil;
