import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
// RiArrowDropDownLine

export default function MenteeLog({ label, img, ...rest }) {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {
    console.log("feedback: ", feedback);
  };
  const onClick = () => {
    console.log(dropdownNavbar);
  };
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
            onClick={() => setShowModal(true)}
          >
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
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <h3 className="text-2xl text-black-400 font-semibold">
                    New Log
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col text-black-400 gap-2">
                    <label className="mt-5">Status</label>
                    <button
                      id="dropdownDefault"
                      data-dropdown-toggle="dropdown"
                      class="text-black bg-white-700 hover:bg-[#E6E6E6] border border-gray-200 bg-white-700 focus:border-gray-400 focus:ring-4 focus:outline-none focus:ring-[#E6E6E6] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#E6E6E6]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Active{" "}
                      <RiArrowDropDownLine className="ml-[480px] text-gray-500 text-2xl"/>
                    </button>

                    <div
                      id="dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                      >
                        <li>
                          <a
                            href="#/action-1"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Active
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/action-2"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Non-Active
                          </a>
                        </li>
                      </ul>
                    </div>

                    <label>Upload File</label>
                    <div className="upload">
                      {img && (
                        <img className="preview" src={img} alt="preview" />
                      )}
                      <input type="file" {...rest} />
                    </div>
                    <label>Feedback</label>
                    <input
                      className="col  px-4 py-2 h-20 rounded-lg text-sm border bg-white-700 focus:border-gray-400  focus:outline-none  text-gray-00 focus:shadow-outline-gray"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="Feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:bg-gray-200 border rounded mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <div class="flex items-center p-6 space-x-2 rounded-b">
                    <button
                      data-modal-toggle="bottom-right-modal"
                      type="button"
                      className="text-white bg-[#266663] border font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none rounded mr-3 mb-1 ease-linear transition-all duration-150"
                      onClick={onSubmit}
                    >
                      Save Changes
                    </button>
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
}
