import React from 'react'
import Header from "../components/header";
import MenteeLog from '../components/mentee_log';
import MenteeProfile from '../components/mentee_profile';
import Sidebar from "../components/sidebar";

const MenteeDetails = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="ml-8 mt-9">
          <Header />
          <MenteeProfile/>
          <MenteeLog/>
        </div>
      </div>
    </>
  );
};

export default MenteeDetails;
