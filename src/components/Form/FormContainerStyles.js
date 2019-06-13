import { createStyles } from "@material-ui/core";
const styles = createStyles({
  form: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "5vw"
  },
  input: {
    width: "100%"
  },
  formContentContainer: {
    width: "100vw"
  },
  submitButton: {
    backgroundColor: "#00E1BB",
    color: "white",
    borderRadius: "25px",
    boxShadow: "0px 3px 14px rgba(0, 143, 211, 0.7)",
    "&:hover": {
      backgroundColor: "rgb(0,143, 213)"
    }
  }
});

export default styles;
