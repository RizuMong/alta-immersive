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
              <h4 className="font-semibold text-xl mb-3">Rachman Kamil</h4>
              <p className="mb-2 text-sm">Front-End Engineer Batch 8</p>
              <p className="mb-2 text-sm">IPA</p>
              <p className=" text-sm">SMA Negeri 4 Surabaya</p>
            </div>
            <div className="ml-10">
              <p className="mb-3"><span className="font-semibold">Phone</span>: 0813333777287</p>
              <p className="mb-3"><span className="font-semibold">Telegram</span>: @rachmankamil</p>
              <p className="mb-3"><span className="font-semibold">Discord</span>: @rachmankamil#2347</p>
              <p className="mb-3"><span className="font-semibold">Email</span>: rachmankamil@gmail.com</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </>
  );
};

export default MenteeDetails;
