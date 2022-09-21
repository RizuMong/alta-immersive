import React from "react";

const MenteeProfile = () => {
  return (
    <>
      <div className="flex justify-between my-6">
        <div className="basis-6/12">
          <h4 className="font-semibold text-xl mb-3">Rachman Kamil</h4>
          <p className="mb-2 text-sm font-medium">Front-End Engineer Batch 8</p>
          <p className="mb-2 text-sm font-medium">IPA</p>
          <p className=" text-sm font-medium">SMA Negeri 4 Surabaya</p>
        </div>
        <div className="order-last">
          <p className="mb-3 text-base font-medium">
            <span className="font-semibold">Phone</span>: 0813333777287
          </p>
          <p className="mb-3 text-base font-medium">
            <span className="font-semibold">Telegram</span>: @rachmankamil
          </p>
          <p className="mb-3 text-base font-medium">
            <span className="font-semibold">Discord</span>: @rachmankamil#2347
          </p>
          <p className="mb-3 text-base font-medium">
            <span className="font-semibold">Email</span>: rachmankamil@gmail.com
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MenteeProfile;
