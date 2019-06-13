import React from "react";
import FormContainer from "./components/Form/FormContainer";
import UsersList from "./components/UsersListView/UsersList";
import { Grid, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid item xs={12}>
        <Typography
          style={{
            marginLeft: "5vw",
            marginTop: "3vw",
            color: "navy",
            fontSize: "2rem",
            fontWeight: "600"
          }}
        >
          Crypto users
        </Typography>
        <FormContainer />
        <UsersList />
      </Grid>
    </div>
  );
}

export default App;
