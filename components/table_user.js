import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
// import Cookies from "js-cookie";

export default function Users() {
  // const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [team, setTeam] = useState("");
  // const [role, setRole] = useState("");
  // const [status, setStatus] = useState("");
  // const [password, setPassword] = useState("");

  // const getUsers = () => {
  //   axios
  //     .get("https://tugas.website/users", {
  //       headers: { Authorization: "Bearer " + Cookies.get("token") },
  //     })
  //     .then((response) => {
  //       setUsers(response.data.data);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const handleAddNewUser = (e) => {
  //   e.preventDefault();
  //   setFullName("");
  //   setEmail("");
  //   setTeam("");
  //   setRole("");
  //   setStatus("");
  //   setPassword("");
  //   axios
  //     .post("https://tugas.website/admin", {
  //       headers: { Authorization: "Bearer " + Cookies.get("token") },
  //       data: {
  //         fullname: fullName,
  //         email: email,
  //         team: team,
  //         status: status,
  //         role: role,
  //         password: password,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setShowModal(false);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };
  return (
    <>
      <div className="flex h-screen bg-[#F8F8F8] ">
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-10 mx-auto">
              <label className="block mt-4 text-sm mb-4">
                <div className=" text-gray-500 focus-within:text-purple-600 flex justify-end">
                  <input
                    className="block w-48 py-2 mr-3 background-transparent text-sm text-gray-300 border-[#F8F8F8] bg-[#F8F8F8] focus:border-purple-400 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-gray form-input rounded-md placeholder:px-2"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className=" block px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] rounded-lg border border-gray-300 rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
                    onClick={() => setShowModal(true)} >Add New
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto overflow-x-auto relative border-solid-black">
                  <table className="w-full whitespace-no-wrap w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-[#E6E6E6] border border-slate-300 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          Nomor
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Full Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Email
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Team
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Role
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Edit
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-700 bg-gray-800">
                      <>
                        <tr className="bg-white border-[#E6E6E6] dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                          </th>
                          <td className="py-4 px-6">
                            Bagas
                          </td>
                          <td className="py-4 px-6">
                            bagas@gmail.com
                          </td>
                          <td className="py-4 px-6">
                            Academy
                          </td>
                          <td className="py-4 px-6">
                            Default
                          </td>
                          <td className="py-4 px-6">
                            Actice
                          </td>
                          <td className="py-4 px-6">
                            <a href="#" className="font-medium text-black-600 dark:text-black-500 hover:underline">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                </path>
                              </svg>
                            </a>
                          </td>
                          <td className="py-4 px-6">
                            <a href="#" className="font-medium text-black-600 dark:text-black-500 hover:underline">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                              </svg>
                            </a>
                          </td>
                        </tr>

                        <tr className="bg-white border-[#E6E6E6] dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2
                          </th>
                          <td className="py-4 px-6">
                            Dhian
                          </td>
                          <td className="py-4 px-6">
                            dhian@gmail.com
                          </td>
                          <td className="py-4 px-6">
                            People
                          </td>
                          <td className="py-4 px-6">
                            Admin
                          </td>
                          <td className="py-4 px-6">
                            Non-Actice
                          </td>
                          <td className="py-4 px-6">
                            <a href="#" className="font-medium text-black-600 dark:text-black-500 hover:underline">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                </path>
                              </svg>
                            </a>
                          </td>
                          <td className="py-4 px-6">
                            <a href="#" className="font-medium text-black-600 dark:text-black-500 hover:underline">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                              </svg>
                            </a>
                          </td>
                        </tr>
                      </>


                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-gray-500 focus-within:text-purple-600 flex justify-end mt-6 gap-4">
                <button className="flex px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] rounded-lg border border-gray-300 rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
                  <ChevronDoubleLeftIcon className="w-5 h-5" />
                  Previous
                </button>
                <button className="flex px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] rounded-lg border border-gray-300 rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
                  <ChevronDoubleRightIcon className="w-5 h-5" />
                  Next Pages
                </button>
              </div>
            </div>
          </main>
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
                  <h3 className="text-3xl text-black-400 font-semibold">Add New User</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col text-black-400 gap-2">
                    <label>Full Name</label>
                    <input
                      className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-white-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" placeholder="Your name" required
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                      className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-white-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" placeholder="name@flowbite.com" required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center h-5 pr-10">
                            <div ml-10 pr-10>
                              <label for="email" className="block mb-1 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Team</label>
                              <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-black bg-white-700 hover:bg-[#E6E6E6] border border-gray-600 bg-white-700 focus:border-purple-400 focus:ring-4 focus:outline-none focus:ring-[#E6E6E6] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#E6E6E6] dark:hover:bg-[#E6E6E6] dark:focus:ring-blue-800" type="button" onClick={() => setShowModal(false)}>Academy <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                  <li>
                                    <a href="#/action-1" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Academy</a>
                                  </li>
                                  <li>
                                    <a href="#/action-2" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">People</a>
                                  </li>
                                  <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Placement</a>
                                  </li>
                                  <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admision</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-right">
                            <div>
                              <div className=" pl-40">
                                <label for="email" className="block mb-1 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Role</label>
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-black bg-white-700 hover:bg-[#E6E6E6] border border-gray-600 bg-white-700 focus:border-purple-400 focus:ring-4 focus:outline-none focus:ring-[#E6E6E6] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#E6E6E6] dark:hover:bg-[#E6E6E6] dark:focus:ring-blue-800" type="button" onClick={() => setShowModal(false)}>Admin <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                      <a href="#/action-1" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
                                    </li>
                                    <li>
                                      <a href="#/action-2" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Default</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label className="mt-5">Status</label>
                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-black bg-white-700 hover:bg-[#E6E6E6] border border-gray-600 bg-white-700 focus:border-purple-400 focus:ring-4 focus:outline-none focus:ring-[#E6E6E6] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#E6E6E6] dark:hover:bg-[#E6E6E6] dark:focus:ring-blue-800" type="button" onClick={() => setShowModal(false)}>Active <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                          <a href="#/action-1" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Active</a>
                        </li>
                        <li>
                          <a href="#/action-2" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Non-Active</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-purple-500 rounded mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>Close
                  </button>
                  <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="bottom-right-modal" type="button" className="text-black bg-[#266663] rounded-lg border border-gray-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-purple-500 rounded mr-3 mb-1 ease-linear transition-all duration-150" onClick={(e) => handleAddNewUser(e)}>I accept</button>
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