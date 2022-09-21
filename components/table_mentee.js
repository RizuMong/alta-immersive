import React, { useState } from 'react';
import MenteeList from "../pages/mentees";


const TableMentee = () => {
  return (
    <>
      <div>
        <div className="mt-15 ml-20">
          <div className='container text-right'>
            <div className='row justify-content-between'>
              <div className='col p-4 ml-10 text-sm'>

                <div className='col text-sm'>
                  <button id="class" data-dropdown-toggle="dropdown" className=" inline-flex items-center py-2 px-4 text-sm font-medium text-[#266663] bg-[#FFFFFF] rounded-lg border border-[#266663] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" type="button">Class <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="class">
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BE 7</a>
                      </li>
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FE 8</a>
                      </li>
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BE 9 </a>
                      </li>
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">QA 4</a>
                      </li>
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">QA 5</a>
                      </li>
                    </ul>
                  </div>


                  <button id="status" data-dropdown-toggle="dropdown" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#266663] bg-[#FFFFFF] rounded-lg border border-[#266663] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" type="button">Status <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" className="hidden ml-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="status">
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Academy</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">People</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Placement</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admision</a>
                      </li>
                    </ul>
                  </div>

                  <button id="category" data-dropdown-toggle="dropdown" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#266663] bg-[#FFFFFF] rounded-lg border border-[#266663] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" type="button">Category<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="category">
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">IT</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Non-IT</a>
                      </li>
                    </ul>
                  </div>

                  <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Filter Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-15 ml-20">
              <div className='container text-right'>
                <div className='row justify-content-between'>
                  <div className='col p-4 mb-4 text-sm'>
                    <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                        </path>
                      </svg>
                      Add New Class
                    </button>
                  </div>
                </div>
              </div>
              <div clasNames="overflow-x-auto relative">
                <thead className="text-xs text-gray-700 uppercase bg-[#E6E6E6] border border-slate-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Nomor
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Full Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Class
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Gender
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Edit
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1
                    </th>
                    <td className="py-4 px-6">
                      Bagas
                    </td>
                    <td className="py-4 px-6">
                      BE 8
                    </td>
                    <td className="py-4 px-6">
                      Academy
                    </td>
                    <td className="py-4 px-6">
                      IT
                    </td>
                    <td className="py-4 px-6">
                      Male
                    </td>
                    <td className="py-4 px-6">
                      <a href="#" className="font-medium text-black-600 dark:text-black-500 hover:underline">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round"
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
                          <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                          </path>
                        </svg>
                      </a>
                    </td>
                  </tr>

                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2
                    </th>
                    <td className="py-4 px-6">
                      Dhian
                    </td>
                    <td className="py-4 px-6">
                      BE 7
                    </td>
                    <td className="py-4 px-6">
                      People
                    </td>
                    <td className="py-4 px-6">
                      Non-IT
                    </td>
                    <td className="py-4 px-6">
                      Female
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

                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      3
                    </th>
                    <td className="py-4 px-6">
                      FE 8
                    </td>
                    <td className="py-4 px-6">
                      QA 5
                    </td>
                    <td className="py-4 px-6">
                      Placement
                    </td>
                    <td className="py-4 px-6">
                      IT
                    </td>
                    <td className="py-4 px-6">
                      Male
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
                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      4
                    </th>
                    <td className="py-4 px-6">
                      Yoga
                    </td>
                    <td className="py-4 px-6">
                      QA 4
                    </td>
                    <td className="py-4 px-6">
                      Admision
                    </td>
                    <td className="py-4 px-6">
                      Non-IT
                    </td>
                    <td className="py-4 px-6">
                      Male
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
                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      5
                    </th>
                    <td className="py-4 px-6">
                      Fatah
                    </td>
                    <td className="py-4 px-6">
                      FE 7
                    </td>
                    <td className="py-4 px-6">
                      Placement
                    </td>
                    <td className="py-4 px-6">
                      IT
                    </td>
                    <td className="py-4 px-6">
                      Male
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
                  <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      6
                    </th>
                    <td className="py-4 px-6">
                      Asri
                    </td>
                    <td className="py-4 px-6">
                      FE 8
                    </td>
                    <td className="py-4 px-6">
                      Academy
                    </td>
                    <td className="py-4 px-6">
                      IT
                    </td>
                    <td className="py-4 px-6">
                      Female
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
                </tbody>
              </div>

              <div className="container text-right">
                <div className='row justify-content-between'>
                  <div className='col ml-10 my-10 text-sm'>
                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Previous
                    </a>

                    <a href="#" className="inline-flex items-center py-2 px-4 ml-10 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      Next
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableMentee