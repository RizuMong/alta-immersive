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
          <div className="flex gap-6 mt-4">
            <div className="bg-gray-300 rounded p-6 text-black">Card Active</div>
            <div className="bg-gray-300 rounded p-6 text-black">Card Placement</div>
            <div className="bg-gray-300 rounded p-6 text-black">Card Feedback</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
