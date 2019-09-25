import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({
  value: selected,
  onChange,
  dateFormat,
  placeholderText,
  showToday: todayButton
}) => (
  <DatePicker
    selected={selected}
    onChange={onChange}
    dateFormat={dateFormat}
    todayButton={todayButton}
    placeholderText={placeholderText}
    showPopperArrow={false}
  />
);

DatePickerInput.defaultProps = {
  dateFormat: "dd/MM/yyyy",
  placeholderText: "Click to select a date",
  todayButton: false
};

export default DatePickerInput;
