import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
//redux
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators as customerAddress } from '@/redux/actions/customerAddress';
import { actionsCreators as cart } from '@/redux/actions/cart';

import styles from "@/styles/steps-buy.module.css";

import SnackBar, { SnackBarProps } from "@/components/dialogs/SnackBar";


// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneIcon from '@material-ui/icons/Done';
import { AccordionDetails, AccordionSummary, Card, Accordion, Container } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';

import Steps from '@/components/checkout/Steps'
import SummaryCart from '@/components/checkout/SummaryCart'
import FormAddress from "@/components/forms/FormAddress";
import CarriersList from "@/components/checkout/CarriersList";


interface ShipppingPageProps {
  configApp?: any;
}

export interface Carrier {
  _id: string;
  deliveryTimeType: string;
  isFree: boolean;
  shippingHandling: boolean;
  name: string;
  description: string;
  deliveryTime: number;
  shippingZones: ShippingZone[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  logo: Logo;
  active: boolean;
  totalCost: number;
  carrierId?: string;
}
export interface Logo {
  tags: any[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  path: string;
  imageSizes: { [key: string]: string };
}
export interface ShippingZone {
  active: boolean;
  _id: string;
  name: string;
  shippingZoneId: string;
  description: string;
}

const ShippingPage = (props: ShipppingPageProps) => {
  const { configApp } = props
  const dispatch: any = useDispatch()
  const cartData: any = useSelector((state: any) => state.cart.cartData)
  const currentUser: any = useSelector((state: any) => state.user.current)
  const currentUserLoading: any = useSelector((state: any) => state.user.loading)
  const currentUserIsLogged: any = useSelector((state: any) => state.user.isLogged)
  const customerAddressList: any = useSelector((state: any) => state.customerAddress.list)
  const { summary = {} } = cartData
  const { deliveryAddress } = cartData
  const [alertMessage, setAlertMessage] = useState<any>({ show: false, title: '', message: '' })
  const [currentDeliveryAddress, setCurrentDeliveryAddress] = useState<any>({})

  const [snackBarProps, setSnackBarProps] = useState<SnackBarProps>({});

  const [expandAddress, setExpandAddress] = useState(false)
  const [expandNewAddress, setExpandNewAddress] = useState(true)

  useEffect(() => {

    if (currentUserIsLogged) {
      getCartCustomer()
      getCustomerAddress()
      if (!currentUser.wholesale.active) {
        setAlertMessage({ show: true, title: 'Cuenta de mayorista no está activa', message: currentUser.wholesale.message })
      }
    } else if (!currentUserLoading) {
      Router.push('/auth/login?redirect=/checkout/shipping')
    }
  }, [currentUserLoading])

  useEffect(() => {
    if (cartData._id && !deliveryAddress.addressId) {
      if (customerAddressList?.data?.length > 0) {
        const selectedAddress = customerAddressList?.data?.find(address => address.by_default)
        setDeliveryAddress(selectedAddress._id)
      } else {
        setExpandAddress(true)
      }
    }

    if (cartData.id && !cartData?.products?.length) {
      Router.push('/checkout/cart')
    }
  }, [cartData])

  useEffect(() => {
    if (currentDeliveryAddress._id) {
      setExpandAddress(false)
      setExpandNewAddress(true)
    }
    else if (currentDeliveryAddress.openNew) {
      setExpandAddress(false)
      setExpandNewAddress(true)
    }
    else if (!currentDeliveryAddress._id && deliveryAddress) {
      setExpandNewAddress(false)
      setCurrentDeliveryAddress(deliveryAddress)
    }

  }, [currentDeliveryAddress, deliveryAddress])

  const openNewAddress = () => {
    setCurrentDeliveryAddress({ openNew: true })
  }

  const handleCloseSnackBar = () => {
    setSnackBarProps({ ...snackBarProps, open: false })
  }


  const getCustomerAddress = () => dispatch(customerAddress.find())
  const getCartCustomer = async () => {
    const guestId = localStorage.getItem('guestId')
    dispatch(cart.get(`${guestId}?getCarrier=true`))
  }


  /**
   * @method setDeliveryAddress
   * @description asigna la dirección de entrega al carrito
   * @param addressId
   */
  const setDeliveryAddress = (addressId: number) => {
    dispatch(cart.patch(cartData._id,
      {
        action: "setDeliveryAdress",
        addressId
      })).then((response: any) => {
        setExpandAddress(false)
        getCustomerAddress()
        getCartCustomer()
      })
  }



  /**
   * @method handleSubmitAddress
   * @description Guarda las direcciones de entrega
   * @param e:evento.
   */
  const handleSubmitAddress = (values: any, callback: any) => {
    if (currentDeliveryAddress._id) {
      dispatch(customerAddress.patch(currentDeliveryAddress._id, values)).then((response: any) => {
        setDeliveryAddress(response._id)
        setSnackBarProps({ open: true, title: 'Dirección Actualizada', message: 'La dirección ha sido actualziada' })
        setCurrentDeliveryAddress({})
        if (typeof callback == 'function') {
          callback()
        }
      })
    } else {
      dispatch(customerAddress.create(values)).then((response: any) => {
        setDeliveryAddress(response._id)
        setSnackBarProps({ open: true, title: 'Dirección creada', message: 'La dirección ha sido registrada' })
        setCurrentDeliveryAddress({})
        if (typeof callback == 'function') {
          callback()
        }
      })

    }
  }

  const canPay = () => {

    if (!currentUser?.wholesale?.active && summary.subtotal < configApp.minimalFee) {
      return false
    }
    return cartData.deliveryAddress?.addressId && cartData.carrier?.carrierId ? true : false;
  }

  const renderAddressLabel = () => {
    const { address, address1, city, state, country, firstName, lastName } = cartData.deliveryAddress
    return (address ? <Typography style={{ fontWeight: 'bold' }} >
      {address}
      {address1}, &nbsp;{firstName} {lastName}<br />
      {city} /&nbsp;{state} / {country}
    </Typography> : customerAddressList.length > 0 ? <Typography>Debes seleccionar una dirección para continuar</Typography> : <Typography>Debes crear una dirección para continuar</Typography>)

  }

  const sentPayment = async () => {
    Router.push('/checkout/payment')
  }

  const sentShipping = async (carrier: Carrier) => {
    const data = {
      carrierId: carrier._id,
      action: 'setCarrier',
    }
    const response = await dispatch(cart.patch(`${cartData._id}`, data))

    if (response.error) {
      setAlertMessage({ show: true, title: 'Error al guardar', message: response.error })
    }
  }

  return (<Grid container>
    <SnackBar {...snackBarProps} handleClose={handleCloseSnackBar} />
    <Container maxWidth={'md'} >
      <Steps activeStep={1} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={styles["title-payment"]}>
            Dirección de envío
          </Typography>
          <Accordion
            onChange={() => setExpandAddress(!expandAddress)}
            expanded={expandAddress}
            className={`${styles["box-shadow-product"]} ${styles["background-card"]} ${styles["fix-details"]}`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles["editLabel"]} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={styles["addressSummary"]}>
                {cartData.deliveryAddress && renderAddressLabel()}
                {!cartData.deliveryAddress && customerAddressList?.data?.length > 0 && <Typography>Seleccione una dirección</Typography>}
                {!cartData.deliveryAddress && customerAddressList?.data?.length == 0 && <Alert severity='error' >Por vafor registre la dirección de entrega</Alert>}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container className={styles["addressContainer"]}>
                <Typography className={styles["title-payment"]}>
                  Mis direcciones
                </Typography>
                <Grid item className={styles["addressColumnCards"]}>
                  {customerAddressList?.data?.map(address => (
                    <div className={styles["addressCards"]}>
                      <div className={styles["addressSummary"]} >
                        <p className={styles["titleSummary"]}>{address.address} {address.address1} : {address.firstName} {address.lastName}</p>
                        <p className={styles["subtitleSummary"]}>{address.city} / {address.state} / {address.country}</p>
                      </div>
                      <div className={styles["groupOptions"]}>
                        <div className={styles["deleteButton"]}
                          key={address._id}
                          onClick={(e: any) =>
                            [setExpandNewAddress(false),
                            setCurrentDeliveryAddress({ ...address, region: `${address.city} / ${address.state} / ${address.country}` })]}>
                          Editar
                        </div>
                        {address._id == deliveryAddress?.addressId ?
                          <DoneIcon className={styles["deleteButton"]} /> :
                          <div className={styles["deleteButton"]} key={address._id} onClick={(e) => setDeliveryAddress(address._id)} >Usar</div>}
                      </div>
                    </div>
                  ))}
                </Grid>
                <Grid item style={{ textAlign: 'right' }}>
                  <Button color='primary' variant='contained' onClick={openNewAddress}>
                    Nueva dirección
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {expandNewAddress && <Grow in={expandNewAddress} timeout={200}>
          <Grid item xs={12}>
            <Typography className={styles["title-payment"]}>
              {!currentDeliveryAddress._id ? 'Agregar una nueva dirección' : 'Actualizar dirección'}
            </Typography>
            <Accordion
              expanded={expandNewAddress}
              className={`${styles["box-shadow-product"]} ${styles["background-card"]} ${styles["fix-details"]} ${styles["mt-5"]}`}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel2a-header"
              >
                <div className={styles["addressSummary"]}>
                  <p className={styles["titleSummary"]}>Ingrese los datos de la dirección</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles["inputForms"]}>
                  {currentDeliveryAddress._id && <FormAddress onSubmit={handleSubmitAddress} address={currentDeliveryAddress} onCancel={() => [setExpandNewAddress(false), setExpandAddress(true), setCurrentDeliveryAddress({})]} />}
                  {currentDeliveryAddress.openNew && <FormAddress onSubmit={handleSubmitAddress} onCancel={() => [setExpandNewAddress(false), setExpandAddress(true), setCurrentDeliveryAddress({})]} />}
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grow>}
        <Grid item xs={12}>
          <Typography className={styles["title-payment"]}>
            Metodos de entrega
          </Typography>
          <CarriersList carriers={cartData.carriers} current={cartData.carrier} setCurrent={sentShipping} />
        </Grid>
        <Grid item xs={12}>
          {cartData.carriers ? <SummaryCart
            currentUser={currentUser}
            summary={summary}
            alertMessageProps={alertMessage}
            configApp={configApp}
          /> : <Card style={{ padding: 15, marginTop: 15 }}>
            <Typography>Debes seleccionar una dirección primero</Typography>
          </Card>}
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: 20 }}
        alignContent='space-around'
        justify='center'
      >
        <Link href="/checkout/cart">
          <Button
            className={styles["btn-buy-again"]}
            // variant="outlined"
            color="secondary"

          >
            Revisar los productos
          </Button>
        </Link>
        &nbsp;

        &nbsp;
        <Button
          className={canPay() && styles["btn-continue"]}
          variant="outlined"
          disabled={!canPay()}
          onClick={() => sentPayment()}
        >
          Continuar con el Pago
        </Button>
      </Grid>
    </Container>
  </Grid>);
}
export default ShippingPage