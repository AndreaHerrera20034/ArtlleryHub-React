const services = () => {
  return (
    <section id="services" className="items-center">
      <div className="container lg:pt-5 items-center">
        <div className="text-center">
          <h2 className=" text-headingColor font-[800] text-[2.4rem mb-5]">
            {" "}
            que te puedo crear?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque,
            distinctio aspernatur est quasi iste facere laboriosam earum, labore
            cupiditate dolor, quisquam doloremque omnis? Omnis aliquam
            aspernatur culpa natus neque!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:max-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*  linea vertical running*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full items-center left-1/2 transform-translate-x-1/2"></div>

              {/* right card*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer 
                                ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                            group-hover:font-[600] text-xl"
                        >
                          {" "}
                          Artista Escultor
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil fugiat, dolore hic animi ducimus delectus
                          amet eos voluptas perspiciatis excepturi labore
                          dolorem ut earum, incidunt libero vero praesentium,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* rgiht*/}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer 
                                ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                            group-hover:font-[600] text-xl"
                        >
                          {" "}
                          Artista Escultor
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil fugiat, dolore hic animi ducimus delectus
                          amet eos voluptas perspiciatis excepturi labore
                          dolorem ut earum, incidunt libero vero praesentium,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
