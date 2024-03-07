import { AiOutlineGithub } from "react-icons/ai";

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
                  <AiOutlineGithub />
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

          {/*final del content*/}
        </div>
      </div>
    </section>
  );
};

export default hero;
