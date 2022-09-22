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
            <div className="bg-gray-50 h-32 w-80 rounded-lg pl-5 pt-4 text-[#1B1B1B]">
              <h3 className="mb-7 font-semibold text-lg text-[#266663]">
                Mentee Active
              </h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
            <div className="bg-gray-50 h-32 w-80 rounded pl-5 pt-4 text-[#1B1B1B]">
              <h3 className="mb-7 font-semibold text-lg text-[#3F445E]">
                Mentee Placement
              </h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
            <div className="bg-gray-50 h-32 w-80 rounded pl-5 pt-4 text-[#1B1B1B]">
              <h3 className="mb-7 font-semibold text-lg text-[#f0b14d]">
                Mentee Feedback
              </h3>
              <h4 className="font-semibold text-2xl">10</h4>
            </div>
          </div>
          <div className="bg-gray-50 mt-11 rounded-lg h-96 w-full">
            <h2 className="pt-6 pl-8 font-semibold text-xl text-[#1B1B1B]">
              Statistik Mentee
            </h2>
          </div>         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
