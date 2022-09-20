import React from 'react'

const TableClass = () => {
  return (

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Nomor
            </th>
            <th scope="col" class="py-3 px-6">
              Name Class
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
            <th scope="col" class="py-3 px-6">
              Edit
            </th>
            <th scope="col" class="py-3 px-6">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          
        <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td class="py-4 px-6">
              Front End Engineering Batch 8
            </td>
            <td class="py-4 px-6">
              Non-Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
          
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-5 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              2
            </th>
            <td class="py-4 px-6">
              Front End Engineering Batch 9
            </td>
            <td class="py-4 px-6">
              Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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

          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              3
            </th>
            <td class="py-4 px-6">
              Back End Engineering Batch 10
            </td>
            <td class="py-4 px-6">
              Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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

          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              4
            </th>
            <td class="py-4 px-6">
              Back End Engineering Batch 11
            </td>
            <td class="py-4 px-6">
              Non-Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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

          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              5
            </th>
            <td class="py-4 px-6">
              Quality Assurance Batch 4
            </td>
            <td class="py-4 px-6">
              Non-Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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

          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              6
            </th>
            <td class="py-4 px-6">
              Quality Assurance Batch 5
            </td>
            <td class="py-4 px-6">
              Active
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <svg
                  class="w-6 h-6"
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
      </table>
    </div>

  )
}

export default TableClass