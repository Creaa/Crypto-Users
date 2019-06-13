import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  success: { backgroundColor: green[600] },
  error: { backgroundColor: red[600] }
}));
const Alert = ({ message }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  useEffect(() => handleClick(), [message]);

  function handleClick() {
    if (message.text.length > 0) setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={
            message.type === "success" ? classes.success : classes.error
          }
          message={<span id="message-id">{message.text}</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </Snackbar>
    </div>
  );
};
export default Alert;
