import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid
} from "@material-ui/core/";
import renderList from "../../usersList";
import Alert from "../Form/Alert";
import Dialog from "./Dialog";

import deleteUser from "../../services/deleteUser";

const UsersList = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "50%",
      marginTop: theme.spacing(3),
      marginLeft: "5vw",
      overflowX: "auto"
    },
    table: {}
  }));
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchedData = setInterval(async () => {
      await setArray(renderList.slice());
    }, 100);
  }, []);

  const tableRows = ["Nickname", "Email", "IP Address"];
  const classes = useStyles();

  const deleteUserHandler = e => {
    setDialogToDisplay({
      text: "Do you confirm to remove?",
      open: true,
      id: e.currentTarget.id
    });
  };
  const checkUserDecision = (id, bool) => {
    if (bool) {
      deleteUser(id).then(data =>
        setAlertToDisplay({ text: data, type: "success" })
      );
    }
  };
  const [alertToDisplay, setAlertToDisplay] = useState({
    text: "",
    type: undefined
  });

  const [dialogToDisplay, setDialogToDisplay] = useState({
    text: "",
    open: false
  });

  return (
    <Grid container xs={12}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableRows.map((el, key) => {
                return (
                  <TableCell key={key} align="left">
                    {el}
                  </TableCell>
                );
              })}
              <TableCell align="left">{}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map(row => (
              <TableRow key={row.id}>
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.ipAdress}</TableCell>
                <TableCell id={row.id} align="left">
                  <Button>
                    <span
                      style={{ width: "100%", height: "100%" }}
                      id={row.id}
                      onClick={deleteUserHandler}
                    >
                      X
                    </span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Alert message={alertToDisplay} />
        <Dialog handler={checkUserDecision} message={dialogToDisplay} />
        {array.length > 0 ? (
          <Button
            id="deleteAll"
            variant="contained"
            color="secondary"
            style={{ marginLeft: "40%" }}
            onClick={deleteUserHandler}
          >
            Delete All
          </Button>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default UsersList;
