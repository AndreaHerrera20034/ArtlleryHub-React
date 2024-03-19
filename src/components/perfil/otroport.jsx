import { useState } from "react";

const otroport = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 justify-center">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className={`tab-btn ${
              activeTab === 1
                ? "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Favoritos
            </span>
          </button>
          <button
            type="button"
            className={`tab-btn ${
              activeTab === 2
                ? "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Obras publicadas
            </span>
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
          id="tabs-with-underline-1"
          className={`tab-content ${activeTab === 1 ? "" : "hidden"}`}
          role="tabpanel"
        >
          {/* imagen de favoritos */}
          <div className="flex items-center gap-4 flex-wrap mt-12">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4"></div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
          {/* Termina un pedazo de imagen */}
        </div>
        <div
          id="tabs-with-underline-2"
          className={`tab-content ${activeTab === 2 ? "" : "hidden"}`}
          role="tabpanel"
        >
          {/*   Aqui la imagen de publicadas */}
          <div className="flex items-center gap-4 flex-wrap mt-12">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://wallpapers.com/images/featured/art-dajgwkpkb3im2q3u.jpg"
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4"></div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Art
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Noche
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default otroport;
