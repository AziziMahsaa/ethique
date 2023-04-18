import Navbar from "./Navbar";
function Header() {
  return (
    <div className="flex flex-col w-full sticky top-0 z-50 ">
      <div className=" bg-darkgreen px-3 py-8 md:py-5 flex gap-7 items-center justify-center">
        <img className="w-3 h-3  " src="/icones/left.png" alt="planets" />
        <div className="flex md:flex-row md:gap-1 flex-col  text-golden text-sm font-serif gap-3 tracking-wider font-thin ">
          <div>We deliver your orders the next day.</div>
          <button>(Click for detailed information)</button>
        </div>
        <img className="w-4 h-4 " src="/icones/right.png" alt="planets" />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
