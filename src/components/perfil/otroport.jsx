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
                ? "font-semibold border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Tab 1
          </button>
          <button
            type="button"
            className={`tab-btn ${
              activeTab === 2
                ? "font-semibold border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Tab 2
          </button>
          <button
            type="button"
            className={`tab-btn ${
              activeTab === 3
                ? "font-semibold border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Tab 3
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
          id="tabs-with-underline-1"
          className={`tab-content ${activeTab === 1 ? "" : "hidden"}`}
          role="tabpanel"
        >
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
        </div>
        <div
          id="tabs-with-underline-2"
          className={`tab-content ${activeTab === 2 ? "" : "hidden"}`}
          role="tabpanel"
        >
          <img src="ruta/a/la/imagen2.jpg" alt="Second" />
        </div>
        <div
          id="tabs-with-underline-3"
          className={`tab-content ${activeTab === 3 ? "" : "hidden"}`}
          role="tabpanel"
        >
          <img src="ruta/a/la/imagen3.jpg" alt="Third" />
        </div>
      </div>
    </>
  );
};

export default otroport;
