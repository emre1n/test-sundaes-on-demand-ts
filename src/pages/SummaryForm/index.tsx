import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTcChecked(e.target.checked);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{' '}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
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
