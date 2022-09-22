import React from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar";

const AddMentee = () => {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar/>
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
                  <label className="mb-3 xl:text-base">Email address</label>
                  <input
                    className="border border-[#CCCCCC] rounded-lg  pl-2 h-10 xl:w-[838px] xl:h-14"
                    placeholder="Email address"
                  ></input>
                </form>
              </div>
              <div className="mx-10 mt-3">
                <h1 className="font-semibold mb-6 pt-6 text-xl">
                  Emergency Data
                </h1>
                <form className="flex flex-col xl:text-base">
                  <label className="mb-3">Full name</label>
                  <input
                    className="border border-[#CCCCCC] rounded-lg mb-6  pl-2 h-10  xl:w-[838px] xl:h-14"
                    placeholder="Full name"
                  ></input>
                  <label className="mb-3">Phone</label>
                  <input
                    className="border border-[#CCCCCC] rounded-lg mb-4  pl-2 h-10 xl:w-[838px] xl:h-14"
                    placeholder="+6281392882293"
                  ></input>
                </form>
              </div>
              <div className="mx-10 mt-10">
                <h1 className="font-semibold mb-6 text-xl">Education Data</h1>
                <div className="flex">
                  <p className="font-medium text-lg">Type</p>
                  <form className="xl:text-lg ml-6 mt-1">
                    <input
                      type="radio"
                      name="payment"
                      // onClick={(value) => handleMentee(value)}
                      // value="Credit Card"
                    />
                    <label className="mr-6 ml-1 font-medium">Informatics</label>
                    <input
                      type="radio"
                      name="payment"
                      value="Debit Card"
                      // onClick={(value) => handleMentee(value)}
                    />
                    <label className="mr-6 ml-1 font-medium">
                      Non Informatics
                    </label>
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
