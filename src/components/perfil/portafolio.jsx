const portafolio = () => {
  return (
    <section id="portafolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:m-0">
            <h3 className="text-red-400"> Mis recientes trabajos </h3>
          </div>
          <div className="flex gap-3">
            <button className="text-blue-300 border border-solid border-black-500 py-2 px-4 rounded-[8px]">
              Favoritos
            </button>
            <button className="text-blue-300 border border-solid border-black-500 py-2 px-4 rounded-[8px]">
              obras publicadas
            </button>
          </div>
        </div>

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
    </section>
  );
};

export default portafolio;
