import React from "react";
import Img from "next/image";

const Header = () => {
  return (
    <>
      <header className="flex gap-6 mb-4">
        <div>
          <h3 className="font-semibold text-xl">Dashboard</h3>
        </div>
        <div>Search</div>
        <div className="flex">
          <div>
            <Img className="bg-black rounded-2xl" width="30" height="30" src="" />
          </div>
          <div className="ml-3">
            <p>Hai, Jhen Chang</p>
          </div>
        </div>
      </header>
      
      <hr />
    </>
  );
};

export default Header;
