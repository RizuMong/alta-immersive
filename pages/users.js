import TableUser from '../components/table_user'
import Sidebar from "../components/sidebar";
import Button from 'react-bootstrap/Button';
import React from 'react'

const User = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Button className="flex flex-row" variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div>
        </div>
        <div className="flex flex-row">
          <TableUser
          show={modalShow}
          onHide={() => setModalShow(false)}/>
        </div>
      </div>
    </>
  );
};

export default User;
