import React from "react";
import Tabs from "./Tab";
function Cardsection() {
  return (
    <div className="flex flex-col items-center justify-center   bg-white ">
      <div className="flex flex-col gap-3 p-4 items-center  font-serif text-darkgreen">
        <h2 className="tracking-wider text-xs">100% PLANT BASED</h2>
        <h2 className="text-2xl font-extralight">ETHIQUE CREATIONS</h2>
      </div>
      <Tabs />
      <div>
        <button className="my text-center  text-xs  px-8 py-4 font-serif">
          START SHOPPING
        </button>
      </div>
    </div>
  );
}

export default Cardsection;
