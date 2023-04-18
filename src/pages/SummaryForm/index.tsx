import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTcChecked(e.target.checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={checkboxChangeHandler}
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
