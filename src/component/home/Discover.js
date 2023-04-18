import Swiperdiscover from "./Swiperdiscover";

function Discover() {
  return (
    <div className="p-10 text-center flex flex-col md:flex-row md:h-screen md:px-24">
      <div className="md:w-2/5 ">
        <img className="md:hidden" src="/images/tatlimobile.jpg" alt="pasta" />
        <div className="hidden md:block h-[650px]">
          <Swiperdiscover />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 p-4 justify-center md:ml-32 font-serif md:flex-col text-darkgreen">
        <h6 className="tracking-wider text-xs Creations md:text-base">
          Plant Based & Gluten Free
        </h6>
        <div className="flex-flex-col md:flex gap-2 ">
          <h2 className="text-2xl font-extralight md:text-4xl tracking-wide">
            French Entremet
          </h2>
          <h2 className="text-2xl font-extralight md:text-4xl tracking-wide">
            Creations
          </h2>
        </div>
        <div>
          <div className="my text-darkgreen text-xs tracking-widest px-8 py-4 ">
            DISCOVER
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-5 mt-3 md:mt-5 
        "
        >
          <span className="border-t border-t-slate-300 py-2">SINGLE CAKE</span>
          <span className="border-t py-2 border-t-slate-300">LARGE CAKE</span>
        </div>
      </div>
    </div>
  );
}

export default Discover;
