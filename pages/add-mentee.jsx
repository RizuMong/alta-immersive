import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sideBar";

const AddMentee = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
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
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your status"
                    ></input>
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
                    <input
                      className="border border-[#CCCCCC] rounded-lg mt-2 pl-2 h-10 xl:w-[838px] xl:h-14"
                      placeholder="Enter your status"
                    ></input>
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
