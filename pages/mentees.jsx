import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
// import Cookies from "js-cookie";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getClass = () => {
    axios
      .get("https://altaproject.online/classes", {
        headers: { Authorization: "Bearer " },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getClass();
  }, []);

  // const handleAddNewUser = (e) => {
  //   e.preventDefault();
  //   setFullName("");
  //   setEmail("");
  //   setRole("");
  //   setPassword("");
  //   setId("");
  //   axios
  //     .post("https://altaproject.online/users", {
  //       headers: { Authorization: "Bearer " },
  //       data: {
  //         full_name: fullName,
  //         email: email,
  //         password: password,
  //         role: role,
  //         id_team: id,
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
      <div className="flex h-screen ">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-10 mx-auto">
              <Header />
              <label className="block mt-4 text-sm mb-4">
                <div className=" text-gray-500 flex justify-end">
                  <button
                    type="button"
                    className=" block px-6 text-sm py-2 font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] border border-none rounded-md active:bg-[#276562] hover:bg-[#368581] focus:outline-none focus:shadow-outline-purple"
                    onClick={() => setShowModal(true)}
                  >
                    Add New
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-100 text-[#303030] bg-gray-200">
                        <th className="px-4 py-3">Number</th>
                        <th className="px-4 py-3">Full Name</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Education Type</th>
                        <th className="px-4 py-3">Gender</th>
                        <th className="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200 bg-gray-50">
                      {users.map((user) => {
                        return (
                          <>
                            <tr className="text-[#1B1B1B] " key={user.id}>
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  <p className="font-semibold">{user.full_name}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">{user.email}</td>
                              <td className="px-4 py-3 text-sm">{[user.team.name]}</td>
                              <td className="px-4 py-3 text-sm">{user.role}</td>
                              <td className="px-4 py-3">
                                <div className="flex items-center space-x-4 text-sm">
                                  <button className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                    <PencilSquareIcon className="w-5 h-5" />
                                  </button>
                                  <button className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-red-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                                    <TrashIcon className="w-5 h-5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-gray-500 flex justify-end mt-6 gap-4">
                <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] border border-none rounded-md active:bg-[#276562] hover:bg-[#368581] focus:outline-none focus:shadow-outline-purple">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#266663] border border-none rounded-md active:bg-[#276562] hover:bg-[#368581] focus:outline-none focus:shadow-outline-purple">
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg px-8 relative flex flex-col w-full bg-gray-50  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded">
                  <h3 className="text-xl text-[#303030] font-semibold">Add New User</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col text-gray-400 gap-2">
                    <label>Full Name</label>
                    <input
                      className="col px-4 py-2 rounded-lg text-sm border border-gray-400 bg-gray-50 focus:border-green-800  focus:outline-none  text-gray-600 focus:shadow-outline-gray"
                      value={fullName}
                      placeholder="Enter your name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                      className=" w-full px-4 py-2 rounded-lg text-sm border border-gray-400 bg-gray-50 focus:border-green-800  focus:outline-none  text-gray-600 focus:shadow-outline-gray"
                      value={email}
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <label>Team</label>
                    <input
                      className=" w-full px-4 py-2 rounded-lg text-sm border border-gray-400 bg-gray-50 focus:border-green-800  focus:outline-none  text-gray-600 focus:shadow-outline-gray"
                      // value={team}
                      placeholder="Academy..."
                      // onChange={(e) => setTeam(e.target.value)}
                    /> */}
                    <label>Role</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-400 bg-gray-50 focus:border-green-800  focus:outline-none  text-gray-600 focus:shadow-outline-gray"
                      placeholder="Admin"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-400 bg-gray-50 focus:border-green-800  focus:outline-none  text-gray-600 focus:shadow-outline-gray"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                  <button
                    className="text-black background-transparent border font-semibold px-6 py-2 text-base outline-none focus:outline-none rounded mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#266663] text-white active:bg-green-700 font-semibold text-base px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAddNewUser(e)}
                  >
                    Create User
                  </button>
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