import React from "react";
import Sidebar from "../components/sidebar";

const User = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="mt-20 ml-8">user</div>
      </div>
    </>
  );
};

export default User;
