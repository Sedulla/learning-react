import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const EditForm = (theEmployee) => {
  const { dispatch } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'update_employee', id, updatedEmployee });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Button variant="success w-100" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
