import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
    const categories = [
        {
            label: "Category 1",
            link: "/ShoppingCart",
        },
        {
            label: "Category 2",
            link: ""
        },
        {
            label: "Category 3",
            link: ""
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
                className="flex items-center gap-1 rounded-full text-white font-semibold
         hover:text-neutral-700 focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
            >
                Categorias
                {isMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            </button>
            {isMenuOpen && (
                <div className="absolute top-10 right-0 z-10 w-48 mt-2 bg-white rounded shadow-md">
                    {categories.map(({ label, link }, key) => (
                        <Link
                            to={link}
                            key={label}
                            onClick={toggleMenu}
                            className={`block w-full py-2 px-4 text-sm text-left text-blueGray hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10 ${key === categories.length - 1 ? "rounded-b" : ""
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
