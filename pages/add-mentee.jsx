import React, { useState } from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar";
import Dropdown from "../components/dropdown";

const AddMentee = () => {
  const [showStatus, setShowStatus] = useState(false);
  const handleClick = () => {
    setShowStatus(!showStatus);
  };

  const options = ["Orang tua", "Kakek", "Nenek", "Saudara orang tua"];
  const status = ["Active", "Placement", "Eliminate"];
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="ml-8 mt-9">
          <Header />
          <div>
            <div className="bg-gray-50 text-[#1B1B1B] md:w-[700px] lg:w-[800px] xl:auto xl:w-[918px] ">
              <div className="mx-10 mt-10">
                <h1 className="font-semibold mb-6 pt-6 text-xl">
                  Contact Information
                </h1>
                <form className="flex flex-col">
                  <div className="mb-3">
                    <label className=" xl:text-base">Name</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Email</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your email"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Address</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your address"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Home Address</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your home address"
                    ></input>
                  </div>
                  <div className="flex my-4">
                    <p className="font-medium mt-1">Gender</p>
                    <form className="ml-6 mt-1">
                      <input
                        type="radio"
                        name="payment"
                        // onClick={(value) => handleMentee(value)}
                        // value="Credit Card"
                      />
                      <label className="mr-6 ml-1 font-medium">Male</label>
                      <input
                        type="radio"
                        name="payment"
                        value="Debit Card"
                        // onClick={(value) => handleMentee(value)}
                      />
                      <label className="mr-6 ml-1 font-medium">Female</label>
                    </form>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Phone</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your phone"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mt-3 xl:text-base">Telegram</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your telegram"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Status</label>
                    <div>
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            onClick={handleClick}
                            type="button"
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 w-800 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                          >
                            Active
                            <svg
                              className="-mr-1 ml-2 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        {showStatus && (
                          <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabindex="-1"
                          >
                            <div className="py-1" role="none">
                              {status &&
                                status.map((status) => (
                                  <a
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="menu-item-0"
                                  >
                                    {status}
                                  </a>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mx-10 mt-3">
                <h1 className="font-semibold mb-6 pt-6 text-xl">
                  Emergency Data
                </h1>
                <form className="flex flex-col xl:text-base">
                  <div className="mb-3">
                    <label className=" xl:text-base">Name</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Phone</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your phone"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Status</label>
                    <Dropdown options={options} />
                  </div>
                </form>
              </div>
              <div className="mx-10 mt-10">
                <h1 className="font-semibold mb-6 text-xl">Education Data</h1>
                <div className="flex">
                  <p className="font-medium text-lg">Type</p>
                  <form>
                    <div className="xl:text-lg ml-6 mt-1">
                      <input
                        type="radio"
                        name="payment"
                        // onClick={(value) => handleMentee(value)}
                        // value="Credit Card"
                      />
                      <label className="mr-6 ml-1 font-medium">
                        Informatics
                      </label>
                      <input
                        type="radio"
                        name="payment"
                        value="Debit Card"
                        // onClick={(value) => handleMentee(value)}
                      />
                      <label className="mr-6 ml-1 font-medium">
                        Non Informatics
                      </label>
                    </div>
                  </form>
                </div>
                <form className="flex flex-col mt-5">
                  <div className="mb-3">
                    <label className=" xl:text-base">Major</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Your Major"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="mb-3 xl:text-base">Graduate</label>
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Your Graduate"
                    ></input>
                  </div>
                </form>
              </div>
              <div className="text-center sm:text-end pb-10 mb-20 xl:mb-36">
                <button
                  className="font-medium text-[#266663] border-[#266663] border px-2 sm:px-8 py-2.5 rounded-lg m-3"
                  // onClick={() => handleCancel()}
                  // value="Canceled"
                >
                  Cancel
                </button>
                <button
                  className="bg-[#266663] font-medium text-white mr-6 px-4 sm:px-11 py-3 rounded-lg"
                  // onClick={() => handleSave()}
                  // value="Success"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMentee;
