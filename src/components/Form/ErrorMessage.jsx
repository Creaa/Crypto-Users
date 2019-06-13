import React from "react";
import { withStyles, createStyles } from "@material-ui/core";

export const styles = createStyles({
  errorMessage: {
    width: "40%",
    position: "relative",
    margin: "0",
    minWidth: "150px",
    height: "15px",
    padding: "10px",
    marginLeft: "20px",
    fontSize: "12px",
    textAlign: "center",
    borderRadius: "3%",
    backgroundColor: "rgba(255,0,0,0.1)",
    color: "red",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "5px",
      height: "5px",
      borderTop: "2px solid",
      borderLeft: "2px solid",
      left: "-4px",
      top: "40%",
      color: "rgba(255,0,0,0.1)",
      transform: "rotate(-45deg)"
    }
  }
});

const ErrorMessage = ({ error, touched, classes }) => {
  return (
    <>
      {error && touched && (
        <span className={classes.errorMessage}>{error}</span>
      )}
    </>
  );
};

export default withStyles(styles)(ErrorMessage);
