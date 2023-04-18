import React, { useState } from "react";
import SecondTab from "./Secondcard";
import Card from "./Card";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs  ">
      <ul className="flex flex-row gap-3 p-4 items-center justify-center font-serif text-darkgreen">
        <li
          className={
            activeTab === "tab1" ? " underline underline-offset-4" : ""
          }
          onClick={handleTab1}
        >
          OUR NEW FLAVORS
        </li>
        <li
          className={
            activeTab === "tab2" ? " underline underline-offset-4" : ""
          }
          onClick={handleTab2}
        >
          100% Sourdough Breads
        </li>
      </ul>

      <div className="outlet p-3 flex md:flex-nowrap flex-wrap w-full">
        {activeTab === "tab1" ? <Card /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
