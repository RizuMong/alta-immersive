import React from "react";
import Img from "next/image"

const Header = () => {
  return (
    <>
      <header className="flex gap-6">
        <div>
          <h3>Dashboard</h3>
        </div>
        <div>
          Search
        </div>
        <div>
          <Img src="" alt="Login user" />
        </div>
        <div>
          <p>Hai, Jhen Chang</p>
        </div>
      </header>
      <hr/>

    </>
  );
};

export default Header;
