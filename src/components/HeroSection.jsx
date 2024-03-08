export default function HeroSection() {
  return (
    <div className="relative" style={{ backgroundColor: "#f6e5c7" }}>
      <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2">
          <div className="relative lg:w-6/12 lg:py-10">
            <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
              Diverse Art World
            </h1>
            <p className="mt-8 text-gray-700 lg:w-10/12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              doloribus laboriosam libero veritatis id in ducimus reprehenderit
              deserunt debitis repellendus architecto voluptas recusandae,
              accusamus voluptatum rerum tempora optio excepturi. Nulla.
            </p>
            <form className="w-full mt-12">
              <button className="ml-auto py-3 px-6 rounded-2xl text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
                <span className="hidden text-yellow-900 font-semibold md:block">
                  Unirse
                </span>
              </button>
            </form>
          </div>
          <div className="ml-auto -mb-24 lg:-mb-0 lg:w-6/12">
            <img
              src=".\src\images\hero2.png"
              className="relative"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
