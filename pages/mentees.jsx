import React from 'react'
import TableMentee from '../components/table_mentee'
import Sidebar from "../components/sidebar"

const MenteeList = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-row">
          <TableMentee
          show={modalShow}
          onHide={() => setModalShow(false)}
          onShow={() => setModalShow(true)}
          />


        </div>
      </div>
    </>
  );
}

export default MenteeList