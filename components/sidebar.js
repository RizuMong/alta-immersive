import React from "react";
import { RiDashboardLine } from "react-icons/ri";
// BsPeople
// AiOutlineUser
// MdOutlineClass
// CgLogOut

const SideBar = () => {
  return (
    <>
      <div>
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 h-screen bg-gray-50 dark:bg-gray-800">
            <a href="#img" className="flex items-center pl-2.5 mb-5">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Alta Immersive
              </span>
            </a>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <RiDashboardLine className="text-xl"/>
                  <span className="ml-3"> Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <span className="flex-1 ml-3">Mentee</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Class</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mt-12 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
