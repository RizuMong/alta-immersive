import React from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="ml-8 mt-9">
          <Header />
          <div className="flex gap-12 mt-4">
            <div className="bg-gray-100 h-32 w-80 rounded p-6 text-[#1B1B1B]">
              <h3 className="mb-6 font-semibold text-lg text-[#266663]">Mentee Active</h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
            <div className="bg-gray-100 h-32 w-80 rounded p-6 text-[#1B1B1B]">
              <h3 className="mb-6 font-semibold text-lg text-[#3F445E]">Mentee Placement</h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
            <div className="bg-gray-100 h-32 w-80 rounded p-6 text-[#1B1B1B]">
              <h3 className="mb-6 font-semibold text-lg text-[#EAAC48]">Mentee Feedback</h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
