import React from "react";
import Header from "../components/header";
import MenteeProfile from "../components/mentee_profile";
import SideBar from "../components/sidebar";

const MenteeDetails = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="ml-8 mt-9">
          <Header />
          <MenteeProfile/>
        </div>
      </div>
    </>
  );
};

export default MenteeDetails;
