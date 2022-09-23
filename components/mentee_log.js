import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

export default function MenteeLog({ label, img, ...rest }) {
  const [showStatus, setShowStatus] = useState(false);
  const handleClick = () => {
    setShowStatus(!showStatus);
  };

  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const status = ["Active", "Placement", "Eliminate"];

  const onSubmit = () => {
    console.log('feedback: ', feedback)
  }

  return (
    <>
      <div className="input-wrapper">
        <p className="label">{label}</p>
        <input className="input" {...rest} />
      </div>

      <div className="">
        <div className="mt-4 flex justify-end">
          <button
            // onClick={() => toAddProductPage()}
            className=" bg-[#266663] px-4 py-2 rounded-lg mb-6 font-medium text-white text-base flex"
            onClick={() => setShowModal(true)}>
            <IoIosAdd className="text-2xl" />
            Add New
          </button>
        </div>
        <div className="bg-gray-50 mb-4 p-6 flex divide-x">
          <div className="w-1/6">
            <p>Bagas Dhitya</p>
            <p>Sep 20, 2022</p>
            <p>
              <span className="font-semibold">Status</span>: Join Class
            </p>
          </div>
          <div className="w-11/12 pl-4">
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F8F8F8] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                  <h3 className="text-3xl text-black-400 font-semibold">New Log</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col text-black-400 gap-2">
                    <label className="mt-5">Status</label>
                    <div className="relative inline-block text-left">
                      <div>
                        <button onClick={handleClick} type="button" className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 w-800 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                          Active
                          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      {showStatus && (
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div className="py-1" role="none">
                            {status &&
                              status.map((status) => (
                                <a className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">
                                  {status}</a>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                  <form className="flex flex-col text-black-400 gap-2 ">
                    <label>Upload File</label>
                    <div className="upload">
                      {img && <img className="preview" src={img} alt="preview" />}
                      <input type="file" {...rest} />
                    </div>
                    <label>Feedback</label>
                    <input
                      className="col  px-4 py-2 h-20 text-black rounded-lg text-sm border border-gray-600 bg-white-700 focus:border-gray-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="Feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-gray-500 rounded mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>Close
                  </button>
                  <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="bottom-right-modal" type="button" className="text-black bg-[#266663] rounded-lg border border-gray-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-gray-500 rounded mr-3 mb-1 ease-linear transition-all duration-150" onClick={onSubmit}>I accept</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};