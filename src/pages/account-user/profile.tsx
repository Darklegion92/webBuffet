import React, { useState, useEffect } from "react";
import { redirectIfNotAuthenticated } from "@/lib/auth";
import { DatePicker } from '@material-ui/pickers'
import { Container, Avatar, TextField, Card, Grid, CircularProgress, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import useStyles, { StyledBadge, StyledBadgeError } from './styles/user.styles';
import EditTwoTone from '@material-ui/icons/EditTwoTone';
import SaveIcon from '@material-ui/icons/Save';
import numeral from 'numeral'
import { Form, Field, Formik, FormikErrors, FormikTouched, FormikValues } from "formik";
import SnackBar, { SnackBarProps } from "@/components/dialogs/SnackBar";

//redux
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as user } from '@/redux/actions/user';
import { ReduxState } from "@/models/redux.model";
import { User as UserModel } from "@/models/user.model";
import { NextPage } from "next";
import { getCookie } from "@/lib/session";
import router from "next/router";
import moment from "moment";

const User: NextPage = () => {
  const [edit, setEdit] = useState(false)
  const [passwordText, setPasswordText] = useState('password')
  const [confirmPasswordText, setConfirmPasswordText] = useState('password')
  const [propsSnackBar, setPropsSnackBar] = useState<SnackBarProps>({
    open: false,
    title: '',
    message: '',
  })

  const classes = useStyles()
  const currentUser = useSelector((state: ReduxState) => state.user.current as UserModel)
  const dispatch: any = useDispatch()

  useEffect(() => {
    const jwt = getCookie('jwt')
    if (!jwt) router.push(`/auth/login?redirect=${router.asPath}`)
  }, [])

  if (!currentUser?.name) {
    return <Container className={classes.container} maxWidth="xs">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <CircularProgress />
      </Grid>
    </Container>

  }

  /**
   * @description se encarga de crear campo tipo field para formik
   * @param touched efecto formik
   * @param errors efecto formik
   * @param values valores de formik
   * @param handleChange funcion de formik para el cambio
   * @param name nombre del campo
   * @param fieldName nombre visible para el campo
   * @param required si el campo es o no obligatorio
   * @param type tipo de campo si es text o si es password
   * @returns componente para formik
   */
  const fieldForm = (
    touched: FormikTouched<any>,
    errors: FormikErrors<any>,
    values: FormikValues,
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
    },
    name: string,
    fieldName: string,
    required: boolean,
    type?: string,
  ) => {
    return <Grid item xs={12}>
      <TextField
        name={name}
        id={name}
        type={type || 'text'}
        required={required}
        error={touched[name] && errors[name] ? true : false}
        label={fieldName}
        helperText={touched[name] && errors[name]}
        classes={{ root: classes.root }}
        InputLabelProps={{
          shrink: true,
          className: classes.label
        }}
        inputProps={{ className: classes.input }}
        value={values[name]}
        onChange={handleChange}
      />
    </Grid>
  }

  /**
   * @description se encarga de crear un componente estilizado para la
   * seleccion de las fechas
   * @param params campos requeridos para conformar el compoennte
   * @returns componente tipo fecha para formik
   */
  const DatePickerField = ({ field, form, ...other }) => {
    return (
      <Grid item xs={12}>
        Fecha de cumpleaños
        <DatePicker
          disableFuture
          openTo="year"
          format="DD/MM/yyyy"
          views={["year", "month", "date"]}
          className={classes.root}
          name={field.name}
          InputLabelProps={{
            shrink: true,
            className: classes.label
          }}
          inputProps={{ className: classes.input }}
          value={field.value}
          onChange={date => form.setFieldValue(field.name, date, false)}
          {...other}
        />
      </Grid>
    );
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Card className={classes.cardContainer}>
        {!edit && <Grid
          container
          justify="flex-end"
        >
          <Button
            color="primary"
            startIcon={<EditTwoTone />}
            onClick={() => setEdit(!edit)}
          >
            Editar
          </Button>
        </Grid>}
        {edit ? <Grid container>
          <Formik
            onSubmit={(values, helper) => {
              const { lastName, newPassword, phone, identification, firstName, birthDate: birth_date, email } = values
              const params = {
                firstName,
                lastName,
                birth_date,
                email,
                identification,
                password: newPassword,
                phone,
              }
              dispatch(user.patch(currentUser?.id, params)).then(() => {
                setPropsSnackBar({
                  open: true,
                  title: 'Correcto',
                  message: 'Datos Actualizados correctamente',
                  severity: 'success',
                })
                setEdit(false)
              }).catch(e => {
                setPropsSnackBar({
                  open: true,
                  title: 'Error al guardar',
                  message: e.data.message,
                  severity: 'error',
                })
                helper.setSubmitting(false)
              })

            }}
            initialValues={currentUser.customer}
            validate={(values) => {
              let errors = {}
              if (!values.firstName) {
                errors['firstName'] = 'Este campo es obligatorio'
              }
              if (!values.lastName) {
                errors['lastName'] = 'Este campo es obligatorio'
              }
              if (!values.identification) {
                errors['identification'] = 'Este campo es obligatorio'
              }
              if (!values.email) {
                errors['email'] = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors['email'] = 'Correo no válido';
              }

              if (values?.phone && Number.isNaN(values?.phone.replace(' ', ''))) {
                errors['phone'] = 'Debe ingresar un número correctos'
              } else if (values?.phone && values.phone.replace(' ', '').length < 10) {
                errors['phone'] = 'Debe ingresar un número correcto'
              }

              if (values.newPassword) {
                if (values.newPassword.length < 6) {
                  errors['newPassword'] = 'Debe contener mínimo 6 caracteres'
                } else if (!values.confirmPassword) {
                  console.log("revisando");
                  errors['confirmPassword'] = 'Debe confirmar la contraseña'
                } else if (values.newPassword !== values.confirmPassword) {
                  errors['confirmPassword'] = 'Contraseña no coincide'
                }
              }

              return errors;
            }
            }
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
              }) => (<Form>
                <Grid
                  container
                  justify="flex-end"
                >
                  <Button
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={() => handleSubmit()}
                    disabled={isSubmitting}
                  >
                    Guardar
                  </Button>
                </Grid>
                <Grid container spacing={2}>
                  {fieldForm(touched, errors, values, handleChange, 'firstName', 'Nombres', true)}
                  {fieldForm(touched, errors, values, handleChange, 'lastName', 'Apellidos', true)}
                  {fieldForm(touched, errors, values, handleChange, 'identification', 'Número de identificación', true)}
                  {fieldForm(touched, errors, values, handleChange, 'email', 'Email', true)}
                  {fieldForm(touched, errors, values, handleChange, 'phone', 'Teléfono', false)}
                  <Field name="birth_date" component={DatePickerField} onBlur={handleBlur} />
                  {fieldForm(touched, errors, values, handleChange, 'newPassword', 'Contraseña', false, passwordText)}
                  {fieldForm(touched, errors, values, handleChange, 'confirmPassword', 'Confirmar Contraseña', false, confirmPasswordText)}
                </Grid>
              </Form>)
            }
          </Formik>
        </Grid> : <Grid
          container
          direction='column'

        >
          <Grid
            container
            justify='center'
          >
            {currentUser.wholesale?.active ? <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                alt={currentUser.name}
                src="/broken-image.jpg"
                className={classes.large}
              />
            </StyledBadge> : <StyledBadgeError
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                alt={currentUser.name}
                src="/broken-image.jpg"
                className={classes.large}
              />
            </StyledBadgeError>}
          </Grid>
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            {currentUser.name}
          </Typography>
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            C.C. {currentUser.identification}
          </Typography>
          <Grid
            container
            direction='column'
            justify="flex-start"
          >
            <List disablePadding>
              <ListItem>
                <ListItemText >
                  Tienda: {currentUser.shop?.name}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Email: {currentUser.email}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Teléfono: {currentUser.customer.phone}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Usuario: {currentUser.user}
                </ListItemText>
              </ListItem>
              <ListItem divider >
                <ListItemText style={{ textAlign: 'center' }}>
                  Estado Cuenta Mayorista: <br />{currentUser.wholesale?.active ? <>Activa  <StyledBadge
                    overlap="circle"
                    style={{ marginLeft: 10 }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                    color="error"
                  /></> : <>Inactiva  <StyledBadgeError
                    overlap="circle"
                    style={{ marginLeft: 10 }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                    color="error"
                  /></>}
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Typography variant="h6" style={{ marginTop: 20, textAlign: 'center' }}>
            Última Compra
          </Typography>
          {currentUser.wholesale?.lastOrder?.status ?
            <List disablePadding>
              <ListItem>
                <Typography variant="body2">
                  Estado: {currentUser.wholesale?.lastOrder?.status?.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Total: {numeral(currentUser.wholesale?.lastOrder?.totalPaid).format('$ 0,0')}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Fecha de compra: {moment(currentUser.wholesale?.lastOrder?.createdAt).format('DD/MM/YYYY')}
                </Typography>
              </ListItem>
            </List> :
            <Typography variant="body2" color="primary">
              No han realizado compras aún
            </Typography>}
          <Typography variant="subtitle2" color="primary" style={{ marginTop: 20 }}>
            *{currentUser.wholesale?.message}
          </Typography>
        </Grid>}
      </Card>
      <SnackBar
        {...propsSnackBar}
        handleClose={() => setPropsSnackBar({
          open: false,
          title: '',
          message: '',
        })}
      />
    </Container >
  );
}

User.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }
}

export default User