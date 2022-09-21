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
            <div className="bg-gray-300 rounded p-6 text-black">
              <h3 className="mb-2">Mentee Active</h3>
              <h4>10</h4>
            </div>
            <div className="bg-gray-300 rounded p-6 text-black">
              <h3 className="mb-2">Mentee Placement</h3>
              <h4>10</h4>
            </div>
            <div className="bg-gray-300 rounded p-6 text-black">
              <h3 className="mb-2">Mentee Feedback</h3>
              <h4>10</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
