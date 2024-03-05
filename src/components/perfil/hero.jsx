import CountUp from "react-countup";

const hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*  hero left content*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hola bienvenidos
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[4opx] leading-[35px] sm:leading-[46px] mt-5 "
            >
              mi nombre es artyllery <br /> Artista y Escultor
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor 
                      ease-in duration-300 py-2 px-4 rounded-[80px]"
                >
                  <i className="ri-mail-send-line"> contactame</i>
                </button>
              </a>
              <a
                href="#portafolio"
                className=" text-smallTextColor font-[600] text-[16px] border-b border-solid"
              >
                mira mis trabajos xd?
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px]
                leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="">
                <i className="ri-apps-2-fill"></i>
              </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              asperiores quos ipsum soluta. Id, incidunt officia porro
              cupiditate optio possimus, voluptates distinctio rerum ipsam
              deleniti iste. Dolorem, amet deleniti? Deleniti?
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                sigueme C:
              </span>
              {/* EL DE SEGUIR O FOLLOW? CUENTAS RANDOM?*/}
              <span>
                <a
                  href="#yo"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#yo"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#yo"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ---- lef fin-----*/}
          {/* ---- img de esa wea-----*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-png-transparent-0.png"
                alt=""
              />
            </figure>
          </div>
          {/* ---- img de esa wea final-----*/}
          {/*content right*/}
          <div
            className="md:basis-1/5 flex justify-bertween text-center mt-10 flex-wrap gap-3 md:mt-0
            md:flex-col md:justify-end md:text-end "
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                años de experencia
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Tasa de ventas
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Clientes satisfechos
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={60} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Peticiones echas
              </h4>
            </div>
          </div>
          {/*final del content*/}
        </div>
      </div>
    </section>
  );
};

export default hero;
