import React from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";

const Index = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="ml-8 mt-9">
          <Header/>
        </div>
      </div>
    </>
  );
};

export default Index;