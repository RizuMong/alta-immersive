import TableUser from '../components/table_user'
import React from "react";
import Sidebar from "../components/sidebar";

const User = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-row">
          <TableUser />
        </div>
      </div>
    </>
  );
};

export default User;
