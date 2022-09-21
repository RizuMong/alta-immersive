import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TableUser = (props) => {
  return (
    <div>
      <div className="mt-15 ml-20">
        <div className='container text-right'>
          <div className='row justify-content-between'>
            <div className='col p-4 mb-4 text-sm'>
              <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={props.handleShow}>Add New Class
              </button>
              <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    New Users
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="nama"
                        placeholder="Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group>
                      <div className='Container'>
                        <Row>
                          <Col xs={10} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                              <Form.Label>Team
                              </Form.Label>
                              <DropdownButton variant="success pl-10 " id="dropdown-basic-button responsive-1" title="Academy">
                                <Dropdown.Item href="#/action-1">Academy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">People</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Placement</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Admision</Dropdown.Item>
                              </DropdownButton>
                            </Form.Group>
                          </Col>
                          <Col xs={8} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Role</Form.Label>
                              <DropdownButton variant="success pl-10 " id="dropdown-basic-button responsive-1" title="Admin">
                                <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Default</Dropdown.Item>
                              </DropdownButton>
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Status</Form.Label>
                      <DropdownButton variant="success pl-10 " id="dropdown-basic-button responsive-1" title="Active">
                        <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Non-Active</Dropdown.Item>
                      </DropdownButton>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={props.onHide}> Decline </Button>
                  <Button variant="primary" onClick={props.onHide}> Save Changes </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <div className="mt-15 ml-20">
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
              <tbody>
                <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
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

                <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3
                  </th>
                  <td className="py-4 px-6">
                    Rizki
                  </td>
                  <td className="py-4 px-6">
                    rizki@gmail.com
                  </td>
                  <td className="py-4 px-6">
                    Placement
                  </td>
                  <td className="py-4 px-6">
                    Admin
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
                <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    4
                  </th>
                  <td className="py-4 px-6">
                    Yoga
                  </td>
                  <td className="py-4 px-6">
                    yoga@gmail.com
                  </td>
                  <td className="py-4 px-6">
                    Admision
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
                <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    5
                  </th>
                  <td className="py-4 px-6">
                    Fatah
                  </td>
                  <td className="py-4 px-6">
                    fatah@gmail.com
                  </td>
                  <td className="py-4 px-6">
                    Placement
                  </td>
                  <td className="py-4 px-6">
                    Default
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
                <tr className="bg-white border border-slate-300 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    6
                  </th>
                  <td className="py-4 px-6">
                    Asri
                  </td>
                  <td className="py-4 px-6">
                    asri@gmail.com
                  </td>
                  <td className="py-4 px-6">
                    Academy
                  </td>
                  <td className="py-4 px-6">
                    Admin
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
              </tbody>
            </table>
          </div>

          <div className="container text-right">
            <div className='row justify-content-between'>
              <div className='col ml-10 my-4 pt-15 text-sm'>
                {/* <!-- Previous Button --> */}
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </a>

                {/* <!-- Next Button --> */}
                <a href="#" className="inline-flex items-center py-2 px-4 ml-10 text-sm font-medium text-[#FFFFFF] bg-[#266663] rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TableUser