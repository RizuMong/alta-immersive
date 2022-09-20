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
        <div className="mt-20 ml-40">
        <TableUser/>
        </div>
      </div>
    </>
  );
};

export default User;
