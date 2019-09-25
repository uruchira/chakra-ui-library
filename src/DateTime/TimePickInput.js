import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TimePickInput = ({
  value: selected,
  onChange,
  dateFormat,
  timeFormat,
  timeCaption,
  timeIntervals
}) => (
  <DatePicker
    showTimeSelect
    showTimeSelectOnly
    selected={selected}
    onChange={onChange}
    dateFormat={dateFormat}
    timeFormat={timeFormat}
    timeCaption={timeCaption}
    timeIntervals={timeIntervals}
    showPopperArrow={false}
  />
);

TimePickInput.defaultProps = {
  selected: new Date(),
  dateFormat: "h:mm aa",
  timeFormat: "HH:mm",
  timeCaption: "Time",
  timeIntervals: 15
};

export default TimePickInput;
