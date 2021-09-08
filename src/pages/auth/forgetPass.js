import React from "react";
import { Button } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import styles from "./login.module.css";
import { Formik } from "formik";

const ForgetPass = () => {


  const handleSubmit = () => {
    //TODO: pendiente implementar recuperacion de contraseña
  }

  return (

    <div className={`${styles["bodyContent"]}`}>
      <Container component="main" maxWidth="xs">
        <div className={`${styles["headerDiv"]}`} style={{ marginTop: '30%' }}>
          <img src="/assets/images/logoBlanco.png" />
          <h1>¿Olvidó su contraseña?</h1>
        </div>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: '' }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = '*Correo no puede estar vacío';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = '*Correo Invalido';
            }

            return errors;
          }}
        >
          {(
            {
              handleSubmit,
              handleBlur,
              handleChange,
              errors,
              values,
              isSubmitting,
              touched,
            }) => (
            <form onSubmit={handleSubmit}>
              <div className={`${styles["formDiv"]}`}>
                <label className={`${styles["formLabel"]}`}>Ingrese su correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className={`${styles["formInput"]}`}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className={`${styles["forgetLabel"]}`}>
                  {errors.email && touched.email && errors.email}
                </div>
                <Button
                  disabled={isSubmitting}
                  className={`${styles["formButton"]}`}
                  type="submit"
                  id="btnRegister"
                  name="btnRegister"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 50, opacity: 0.4, fontSize: 14 }}
                >
                  Restaurar Contraseña
                </Button>
              </div>
            </form>

          )}
        </Formik>
      </Container>
    </div>
  );
}

export default ForgetPass