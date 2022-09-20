import React from 'react'
import TableMentee from '../components/table_mentee'
import Sidebar from "../components/sidebar";

const MenteeList = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-row">
          <TableMentee />
        </div>
      </div>
    </>
  )
}

export default MenteeList