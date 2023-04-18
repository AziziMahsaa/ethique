import React from "react";

export default function Renklilezzet() {
  return (
    <div className="flex flex-col text-center gap-4 font-semibold mt-20">
      <span className=" font-serif text-darkgreen md:hidden ">
        #ethiqueplantbased
      </span>
      <div className=" md:hidden bg-makaron h-[550px] bg-cover flex items-end justify-center  ">
        <button className=" mb-12 bg-rose py-4 px-10  text-darkgreen text-center text-xs font-serif tracking-widest">
          DISCOVER
        </button>
      </div>
      <div className=" md:flex hidden bg-makaronweb bg-cover  h-[600px] justify-center items-end ">
        <div>
          <div className="lightbottom mb-20 bg-rose py-4 px-10  text-darkgreen text-center text-xs font-serif tracking-widest">
            DISCOVER
          </div>
        </div>
      </div>
    </div>
  );
}
