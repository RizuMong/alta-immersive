import React, { useState } from 'react'
import Header from "../components/header";
import MenteeLog from '../components/mentee_log';
import MenteeProfile from '../components/mentee_profile';
import Sidebar from "../components/sidebar";

const MenteeDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="ml-8 mt-9">
          <Header />
          <MenteeProfile/>
          <MenteeLog 
          //input upload imgae
          onChange={(e) => onImageUpload(e)} img={imagePreview}

          //set modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onShow={() => setModalShow(true)}
          />
        </div>
      </div>
    </>
  );
};

export default MenteeDetails;