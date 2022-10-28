import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Textbox = (props) => {
  const { id, label, value, lineNumber, onChangeAction } = props;
  const [textValue, setTextValue] = useState(value);

  const handleChange = (event) => {
    event.preventDefault();
    const dato = event.target.value;
    setTextValue(dato);
    onChangeAction(dato);
  };

  return (
    <TextField
      data-testid={id}
      id={id}
      label={label}
      variant="outlined"
      size="small"
      className="mt-2 my-2"
      fullWidth
      value={textValue}
      onChange={handleChange}
      multiline
      rows={lineNumber}
    />
  );
};

Textbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  lineNumber: PropTypes.number,
  onChangeAction: PropTypes.func,
};

export default Textbox;
