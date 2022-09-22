import TableUser from '../components/table_user'
import Sidebar from "../components/sidebar";
import React from 'react'

const User = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-row">
          <TableUser
          show={modalShow}
          onHide={() => setModalShow(false)}
          onShow={() => setModalShow(true)}
          />


        </div>
      </div>
    </>
  );
};

export default User;
