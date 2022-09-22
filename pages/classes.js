import TableClass from '../components/table_class';
import React from 'react';
import Sidebar from "../components/sidebar";

const ClassList = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-row">
          <TableClass
          show={modalShow}
          onHide={() => setModalShow(false)}
          onShow={() => setModalShow(true)}
          />


        </div>
      </div>
    </>
  );
}

export default ClassList