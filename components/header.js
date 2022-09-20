import React from "react";
import Img from "next/image";

const Header = () => {
  return (
    <>
      <header className="flex gap-8 mb-4">
        <div>
          <h3 className="font-semibold text-xl mt-1">Dashboard</h3>
        </div>
        <div className="flex gap-6 ml-[580px]">
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              class="block py-2.5 pl-10 px-2 w-full text-sm text-gray-600 bg-gray-100 rounded-lg border-gray-300"
              placeholder="Search..."
            />
          </div>
          <div className="flex mt-1.5">
            <div>
              <Img
                className="bg-gray-400 rounded-2xl"
                width={30}
                height={30}
                src=""
              />
            </div>
            <div className="ml-3 mt-0.5">
              <p>Hai, Jhen Chang</p>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
