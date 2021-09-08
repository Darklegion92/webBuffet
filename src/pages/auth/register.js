import React, { useState } from "react";
import { redirectIfAuthenticated } from "@/lib/auth";
import theme from '@/styles/theme';
import { Button, CircularProgress, Switch, Grid, Container, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import styles from "./login.module.css";
import { Formik, Field } from "formik";
import { DatePicker } from '@material-ui/pickers'
import moment from "moment";
import SnackBar from "@/components/dialogs/SnackBar";
import { useRouter } from "next/router";

//redux
import { actionsCreators as user } from '@/redux/actions/user';
import { useDispatch } from "react-redux";

/**
 * States que maneja la clase Register.
 * error: Maneja los mensajes de error.
 * type: Se usa para cambiar el tipo password a text para que el usuario pueda ver su contraseña.
 * checked: Maneja el estado de términos y condiciones.
 * openDialogTerms: Abre ventana de términos y condiciones,
 * day: Almacena el día seleccionado.
 * month: Almacena el mes seleccionado.
 * year: Almacena el año seleccionado.
 */


const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#DC9F95',
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#DC9F95',
      },
      dayDisabled: {
        color: '#DC9F95',
      },
      current: {
        color: '#DC9F95',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#DC9F95',
      },
    },
    MuiInput: {
      input: {
        margin: 0,
        backgroundColor: '#9d9d9d94',
        border: 'solid 1px white',
        borderRadius: '40px',
        padding: ' 10px 10px',
        color: 'white',
        outline: 'none',
      },
    },
    MuiButton: {
      textPrimary: { color: '#DC9F95' },
    },
    MuiTypography: {
      colorPrimary: { color: '#DC9F95' },
    },
    MuiPickersMonth: {
      monthSelected: { color: '#DC9F95' }
    }

  }
});

const DatePickerField = ({ field, form, ...other }) => {
  return (
    <DatePicker
      disableFuture
      openTo="year"
      format="DD/MM/yyyy"
      views={["year", "month", "date"]}
      className={styles.borderNone}
      name={field.name}
      value={field.value}
      onChange={date => form.setFieldValue(field.name, date, false)}
      {...other}
    />
  );
};

const Register = () => {

  const [type, setType] = useState('password')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [propsSnackBar, setPropsSnackBar] = useState({
    open: false,
    title: '',
    message: '',
  })
  const dispatch = useDispatch()

  const router = useRouter()

  const { redirect } = router.query


  /**
   * @method showHide
   * @description Muestra u oculta la contraseña.
   * @param e: Evento.
   */
  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setType(type === 'text' ? 'password' : 'text')
  }

  /**
   * @method openDialog
   * @description abre el cuadro de dialogo de términos y condiciones
   */
  const openDialog = () => {
    router.push("/terms-conditions")
  };


  /**
  * @method handleSubmit
  * @description Guarda los datos de una nueva cuenta.
  * @param e: eventon.
  */
  const handleSubmit = async (values, callback) => {
    setIsSubmitting(true)
    const birth_date = values.birth_date.format("yyyy/MM/DD")
    dispatch(user.create({ ...values, birth_date })).then((response) => {
      setPropsSnackBar({
        open: true,
        title: 'Registro correcto',
        message: 'Cuenta creada correctamente!!',
        severity: 'success',
      })
      setTimeout(() => {
        dispatch(user.login({ password: values.password, user: values.email })).then(
          () => {
            let carritoVal = localStorage.getItem("carrito");
            if (carritoVal && carritoVal == "true") {
              localStorage.removeItem("carrito");
            }
            setPropsSnackBar({
              open: true,
              title: 'Ingreso Correcto',
              message: 'Bienvenido',
              severity: 'success',
            })
            router.push(redirect || '/catalogo')
            setIsSubmitting(false)
          }
        ).catch(e => {
          setIsSubmitting(false)
          setPropsSnackBar({
            open: true,
            title: 'Error al ingresar',
            message: e.data.message,
            severity: 'error',
          })
        })
      }, 1000)
    }).catch((e) => {
      setIsSubmitting(false)
      setPropsSnackBar({
        open: true,
        title: 'Error al crear cuenta',
        message: e.data.message,
        severity: 'error',
      })
    })
    callback.setIsSubmitting(false)
  };

  return (
    <>
      <div className={`${styles["bodyContent"]}`}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <div className={`${styles["headerDiv"]}`}>
              <img src="/assets/images/logoBlanco.png" />
              <h1>REGISTRE SUS DATOS PERSONALES</h1>
            </div>
            <Formik
              onSubmit={handleSubmit}
              initialValues={{
                firstName: '',
                lastName: '',
                typeDocument: '0',
                identification: '',
                checkedTerms: false,
                birth_date: moment(),
              }}
              validate={values => {
                const errors = {};

                if (!values.firstName) {
                  errors.firstName = '*Nombre no puede estar vacío'
                }

                if (!values.email) {
                  errors.email = '*Correo no puede estar vacío';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = '*Correo Invalido';
                }
                if (!values.password) {
                  errors.password = '*Contraseña no puede estar vacía'
                } else if (values.password.length < 6) {
                  errors.password = '*Contraseña tiene que tener 6 caracteres mínimo'
                }

                if (!values.birth_date || values.birth_date.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')) {
                  errors.birth_date = '*Fecha de cumpleaños no válida'
                }

                if (!values.lastName) {
                  errors.lastName = '*Apellido no puede estar vacío'
                }
                if (!values.identification) {
                  errors.identification = '*Documento no puede estar vacío'
                }

                if (!values.checkedTerms) {
                  errors.checkedTerms = '*Debe aceptar los términos y condiciones'
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
                  touched,
                }) => (
                <form onSubmit={handleSubmit}>
                  <div className={`${styles["formDiv"]}`}>
                    <label className={`${styles["formLabel"]}`}>Nombres</label>
                    <input
                      name="firstName"
                      type="text"
                      id="firstName"
                      maxLength="100"
                      className={`${styles["formInput"]}`}
                      value={values.firstName}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      onChange={handleChange}
                    />
                    <div className={`${styles["forgetLabel"]}`}>
                      {errors.firstName && touched.firstName && errors.firstName}
                    </div>
                    <label className={`${styles["formLabel"]}`}>Apellidos</label>
                    <input
                      name="lastName"
                      type="text"
                      id="lastName"
                      maxLength="100"
                      className={`${styles["formInput"]}`}
                      value={values.lastName}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      onChange={handleChange}
                    />
                    <div className={`${styles["forgetLabel"]}`}>
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <label className={`${styles["formLabel"]}`}>Número de Documento</label>
                    <input
                      name="identification"
                      id="identification"
                      className={`${styles["formInput"]}`}
                      value={values.identification}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      onChange={e => handleChange(e)}
                    />
                    <div className={`${styles["forgetLabel"]}`}> {errors.identification && touched.identification && errors.identification}</div>
                    <label className={`${styles["formLabel"]}`}>Número de Teléfono</label>
                    <input
                      name="phone"
                      id="phone"
                      className={`${styles["formInput"]}`}
                      value={values.phone}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      onChange={e => handleChange(e)}
                    />
                    <label className={`${styles["formLabel"]}`}>Fecha de nacimiento</label>
                    <ThemeProvider theme={materialTheme}>

                      <Field name="birth_date" component={DatePickerField} onBlur={handleBlur} disabled={isSubmitting} />
                    </ThemeProvider>
                    <div className={`${styles["forgetLabel"]}`}>
                      {errors.birth_date && touched.birth_date && errors.birth_date}
                    </div>
                    <label className={`${styles["formLabel"]}`}>Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      maxLength="256"
                      className={`${styles["formInput"]}`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      value={values.email}
                    />
                    <div className={`${styles["forgetLabel"]}`}>
                      {errors.email && touched.email && errors.email}
                    </div>
                    <label className={`${styles["formLabel"]}`}>Contraseña</label>
                    <div className={`${styles["passwordIL"]}`}>
                      <input
                        name="password"
                        type={type}
                        disabled={isSubmitting}
                        id="password"
                        className={`${styles["formInput"]}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span className={`${styles["passShowButton"]}`} onClick={showHide}>{type === 'text' ? 'OCULTAR' : 'VER'}</span>
                    </div>
                    <div className={`${styles["forgetLabel"]}`}>
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <div className={`${styles["acceptTermsContent"]}`}>
                    <label className={`${styles["acceptTermsLabel"]}`}>Acepto los <a href="/terms-conditions" className={`${styles["acceptTermsLabelPink"]}`} target="_blank">términos y condiciones</a></label>
                    <Switch
                      color="primary"
                      disabled={isSubmitting}
                      defaultChecked={false}
                      checked={values.checkedTerms}
                      id="checkedTerms"
                      name="checkedTerms"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className={`${styles["forgetLabel"]}`}>
                    {errors.checkedTerms && touched.checkedTerms && errors.checkedTerms}
                  </div>
                  {isSubmitting ? <Grid container justify='center' alignItems="center"><CircularProgress color="primary" /></Grid> : <Button
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
                    Registrarse
                  </Button>}
                </form>
              )}
            </Formik>
          </Container>
        </ThemeProvider>
        <SnackBar
          {...propsSnackBar}
          handleClose={() => setPropsSnackBar({
            open: false,
            title: '',
            message: '',
          })}
        />
      </div>
    </ >
  );
}


Register.getInitialProps = (ctx) => {
  redirectIfAuthenticated(ctx);

  return {};
}

export default Register