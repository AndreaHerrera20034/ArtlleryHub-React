import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Portafolio from "./components/perfil/portafolio";

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portafolio />
  </React.StrictMode>
);
