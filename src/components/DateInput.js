import React from "react";
import DatePicker from "react-datepicker";
import { Button } from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
  <React.Fragment>
    Select a Date:
    <DatePicker selected={props.date} onChange={props.handleChange} />
    <Button floated="right" onClick={props.handleClick}>
      Random Photo
    </Button>
  </React.Fragment>
);

export default DateInput;
