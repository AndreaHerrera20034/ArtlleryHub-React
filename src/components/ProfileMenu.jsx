import React, { useState, useEffect, useRef } from "react";
import { FaUserCog, FaUserEdit } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

export default function ProfileMenu() {
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: FaUserCog,
      link: "/Perfil", // Agrega la URL de la página de perfil
    },
    {
      label: "Sign Out",
      icon: IoMdPower,
      link: "/Login",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className=" items-center gap-1 rounded-full  text-white"
      >
        <IoPersonCircleSharp className="block mt-4 lg:inline-block lg:mt-0 hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 mr-4 text-4xl"></IoPersonCircleSharp>
      </button>
      {isMenuOpen && (
        <div className="absolute top-10 right-0 z-10 w-48 mt-2 bg-white rounded shadow-md">
          {profileMenuItems.map(({ label, icon: Icon, link }, key) => (
            <Link
              to={link} // Usar el enlace proporcionado
              key={label}
              onClick={toggleMenu} // Cerrar menú al hacer clic en el enlace
              className={`block w-full py-2 px-4 text-sm text-left text-blueGray hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10 ${
                key === profileMenuItems.length - 1 ? "rounded-b" : ""
              }`}
            >
              <Icon className="inline-block w-4 h-4 mr-2" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
