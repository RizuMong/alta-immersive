import React from "react";
import Header from "../components/header";
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
          <div className="flex my-6">
            <div className="">
              <h4>Rachman Kamil</h4>
              <p>Front-End Engineer Batch 8</p>
              <p>IPA</p>
              <p>SMA Negeri 4 Surabaya</p>
            </div>
            <div className="ml-10">
              <p><span>Phone</span>: 0813333777287</p>
              <p><span>Telegram</span>: @rachmankamil</p>
              <p><span>Discord</span>: @rachmankamil#2347</p>
              <p><span>Email</span>: rachmankamil@gmail.com</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </>
  );
};

export default MenteeDetails;
