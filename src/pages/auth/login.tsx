import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCookie } from "@/lib/session";
import { redirectIfAuthenticated } from "@/lib/auth";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { actionsCreators as user } from '@/redux/actions/user';
import redirectTo from "@/lib/redirect";
import { object, string } from 'yup';
import SnackBar, { SnackBarProps } from "@/components/dialogs/SnackBar";
import {
  Formik,
  ErrorMessage,
  Form,
  Field,
} from 'formik';
import { useRouter } from "next/router";

const validationSchema = object().shape({
  user: string().email('*Correo no válido').required('*Correo es requerido'),
  password: string().required('*Contraseña es requerida'),
});

/**
 * States que maneja la clase Login.
 * error: Maneja los mensajes de error.
 * type: Se usa para cambiar el tipo password a text para que el usuario pueda ver su contraseña.
 */
const Login = () => {

  const [type, setType] = useState<String>('password')
  const [propsSnackBar, setPropsSnackBar] = useState<SnackBarProps>({
    open: false,
    title: '',
    message: '',
  })
  const [isSubmitting, setIsSummitting] = useState<boolean>(false)

  const dispatch: any = useDispatch()

  const router = useRouter()

  const { redirect } = router.query


  useEffect(() => {
    const token = getCookie('jwt')
    if (token) {
      if (router.query.redirect) {
        redirectTo(router.query.redirect)

      } else {
        redirectTo('/catalogo')
      }
    }
  })

  /**
   * @method showHide
   * @description Muestra u oculta la contraseña.
   * @param e: evento.
   */
  const showHide = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setType(type === 'text' ? 'password' : 'text')
  }


  /**
   * @method handleSubmit
   * @description Permite enviar las credenciales de validación para el inicio de sesión del usuario.
   * @param e: evento.
   */
  const handleSubmit = async (values: any) => {

    setIsSummitting(true)
    dispatch(user.login(values)).then(
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
        redirectTo(redirect || '/catalogo')
        setIsSummitting(false)
      }

    ).catch(e => {
      setPropsSnackBar({
        open: true,
        title: 'Error al ingresar',
        message: e.data.message,
        severity: 'error',
      })
      setIsSummitting(false)
    })

  };

  return (
    <div className={`${styles["bodyContent"]}`}>
      <Container component="main" maxWidth="xs">
        <div className={`${styles["headerDiv"]}`}>
          <img src="/assets/images/logoBlanco.png" />
          <p>Queremos ofrecerte las mejores prendas de nuestro catálogo, por favor ingresa tus datos de acceso</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/catalogo">
            <h1>INGRESA A NUESTRO CATÁLOGO</h1>
          </Link>
        </div>
        {isSubmitting ? <Grid style={{ marginBottom: 150 }} container justify='center' alignItems="center"><CircularProgress color="primary" /></Grid> : <Formik
          onSubmit={handleSubmit}
          initialValues={{ user: '', password: '' }}
          validationSchema={validationSchema}
        >
          <Form>
            <div className={`${styles["formDiv"]}`}>
              <label className={`${styles["formLabel"]}`}>Ingrese su correo electrónico</label>
              <Field
                className={`${styles["formInput"]}`}
                name="user"
                id="user"
              />
              <div className={`${styles["forgetLabel"]}`}><ErrorMessage name='user' /></div>
            </div>
            <label className={`${styles["formLabel"]}`}>Ingrese su contraseña de acceso</label>
            <div className={`${styles["passwordIL"]}`}>
              <Field
                name="password"
                id="password"
                type={type}
                className={`${styles["formInput"]}`}
              />
              <span className={`${styles["passShowButton"]}`} onClick={showHide}>{type === 'text' ? 'OCULTAR' : 'VER'}</span>
            </div>
            <div className={` ${styles["forgetLabel"]}`}> <ErrorMessage name='password' /></div>
            <span>
              <Link href="/auth/forgetPass">
                <a className={`${styles["forgetLabel"]}`}>¿Olvidó su contraseña?</a>
              </Link>
            </span>
            <Button
              className={`${styles["formButton"]}`}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ borderRadius: 50, opacity: 0.4, fontSize: 14 }}
              disabled={isSubmitting}
            >
              Ingresar
            </Button>
            <Link href={`/auth/register?redirect=${redirect}`}>
              <p className={`${styles["registerTextWhite"]}`}>Si no cuenta con usuario <strong className={`${styles["registerText"]}`}>Regístrese ahora</strong></p>
            </Link>
          </Form>
        </Formik>}
      </Container>
      <SnackBar
        {...propsSnackBar}
        handleClose={() => setPropsSnackBar({
          open: false,
          title: '',
          message: '',
        })}
      />
    </div>

  );
}


Login.getInitialProps = (ctx) => {

  if (redirectIfAuthenticated(ctx)) {
    return {};
  }
}

export default Login
