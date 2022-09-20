import React from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";

const Index = () => {
  return (
    <>
      <div className="flex">
        <div className="grid-cols-4">
          <SideBar />
        </div>
        <div className="ml-8 mt-6 grid-cols-8 ">
          <Header/>
        </div>
      </div>
    </>
  );
};

export default Index;