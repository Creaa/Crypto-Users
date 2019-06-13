import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = ({ message, handler }) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => handleClickOpen(), [message]);
  function handleClickOpen() {
    if (message.text.length > 0) setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const confirmDel = () => {
    handler(message.id, true);
    handleClose();
  };
  const denyDel = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogTitle id="alert-dialog-title">{message.text}</DialogTitle>
        </DialogContent>
        <DialogActions style={{ marginRight: "30%" }}>
          <Button onClick={denyDel} color="primary">
            No
          </Button>
          <Button onClick={confirmDel} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
