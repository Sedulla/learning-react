import { useContext, useEffect, useState } from 'react';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EditForm from './EditForm';

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleHidden = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleHidden();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act p-0"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}>
          <button
            className="btn text-danger p-0 btn-act"
            data-toggle="modal"
            onClick={() =>
              dispatch({ type: 'remove_emplooyee', id: employee.id })
            }
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleHidden}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
