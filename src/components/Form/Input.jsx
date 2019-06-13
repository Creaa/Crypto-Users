import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
const Input = ({ name, handler, label, blur, classes, value }) => {
  return (
    <React.Fragment>
      <TextField
        className={classes}
        name={name}
        label={label}
        onChange={handler}
        onBlur={blur}
        value={value}
      />
    </React.Fragment>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
  label: PropTypes.string,
  blur: PropTypes.func,
  classes: PropTypes.string
};

export default Input;
