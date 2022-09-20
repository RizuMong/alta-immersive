import TableClass from '../components/table_class';
import React from 'react';
import Sidebar from "../components/sidebar";

const ClassList = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="mt-20 ml-60">
        <TableClass />
        </div>
      </div>
    </>

  )
}

export default ClassList