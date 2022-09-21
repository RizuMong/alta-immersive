import React from "react";
import { IoIosAdd } from "react-icons/io";

const MenteeLog = () => {
  return (
    <>
      <div className="">
        <div className="mt-4 flex justify-end">
          <button
            // onClick={() => toAddProductPage()}
            className=" bg-[#266663] px-4 py-2 rounded-lg mb-6 font-medium text-white text-base flex"
          >
            <IoIosAdd className="text-2xl" />
            Add Product
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
    </>
  );
};

export default MenteeLog;
