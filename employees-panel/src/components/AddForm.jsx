import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const AddForm = () => {
  const { dispatch } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add_employee',
      employee: {
        name,
        email,
        address,
        phone,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          required
          value={name}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => onInputChange(e)}
          name="email"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          value={address}
          onChange={(e) => onInputChange(e)}
          name="address"
          rows={3}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Button variant="success w-100" type="submit">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
