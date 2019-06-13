import React, { useState } from "react";
import Input from "./Input";
import { Button } from "@material-ui/core";
import { Formik } from "formik";
import ErrorMessage from "./ErrorMessage";
import addUser from "../../services/addUser";
import { withStyles, Grid } from "@material-ui/core";
import * as Yup from "yup";
import isEmpty from "is-empty";
import formStyles from "./FormContainerStyles";
import Alert from "./Alert";

const FormContainer = ({ classes }) => {
  const inputValues = { name: "", email: "", ipAdress: "" };
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const requiredErrorMessaege = "This field is required";
  const emailErrorMessaege = "Wrong Email Adress";
  const [alertToDisplay, setAlertToDisplay] = useState({
    text: "",
    type: undefined
  });
  const formValidation = Yup.object().shape({
    name: Yup.string().required(requiredErrorMessaege),
    email: Yup.string()
      .required(requiredErrorMessaege)
      .email(emailErrorMessaege),
    ipAdress: Yup.string()
      .required(requiredErrorMessaege)
      .matches(ipRegex, "Invalid adress IP")
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={inputValues}
        validationSchema={formValidation}
        onSubmit={async (values, { resetForm }) => {
          addUser(values)
            .then(data => setAlertToDisplay({ text: data, type: "success" }))
            .catch(data => setAlertToDisplay({ text: data, type: "error" }));
          resetForm(inputValues);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container alignItems="center">
              <Grid item xs={6} lg={2}>
                <Input
                  classes={classes.input}
                  name="name"
                  handler={handleChange}
                  label="Nickname"
                  blur={handleBlur}
                  value={values.name}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <ErrorMessage error={errors.name} touched={touched.name} />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={6} lg={2}>
                <Input
                  classes={classes.input}
                  name="email"
                  handler={handleChange}
                  label="Email"
                  blur={handleBlur}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <ErrorMessage error={errors.email} touched={touched.email} />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={6} lg={2}>
                <Input
                  classes={classes.input}
                  name="ipAdress"
                  handler={handleChange}
                  label="IP adress"
                  blur={handleBlur}
                  value={values.ipAdress}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <ErrorMessage
                  error={errors.ipAdress}
                  touched={touched.ipAdress}
                />
              </Grid>
            </Grid>
            <Button
              disabled={!isEmpty(errors) || isEmpty(touched) || isSubmitting}
              className={classes.submitButton}
              type="submit"
              variant="contained"
              size="large"
            >
              Add user
            </Button>
          </form>
        )}
      </Formik>
      <Alert message={alertToDisplay} />
    </React.Fragment>
  );
};

export default withStyles(formStyles)(FormContainer);
