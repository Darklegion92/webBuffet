import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from 'moment';
import numeral from 'numeral'
import { v4 as uuid } from 'uuid'

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators as order } from '@/redux/actions/orders';

import Steps from '@/components/checkout/Steps';

// Material UI
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import { AccordionDetails, AccordionSummary, Accordion, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import styles from "./orderDetails.module.css";
import { useRouter } from "next/router";
import { actionsCreators as cart } from '@/redux/actions/cart';

interface QueryType {
    orderId?: string
}

const apiRest = process.env.REACT_APP_CDN_URL

const OrderDetails = () => {
    const [orderData, setOrderData] = useState<any>({})
    const [loadingOrder, setLoadingOrder] = useState(true)
    const { customer, products, deliveryAddress, payments, summary, status } = orderData
    const [productsExpanded, setProductsExpanded] = useState(false)


    const dispatch: any = useDispatch()
    const router = useRouter()
    const currentUser = useSelector((state: any) => state.user.current)
    const currentCart: any = useSelector((state: any) => state.cart.cartData)
    const { orderId }: QueryType = router.query

    useEffect(() => {
        if (orderId) {
            dispatch(order.get(orderId))
                .then((response: any) => {
                    if (currentCart?._id === response.cartId) {
                        const guestId = uuid()
                        localStorage.setItem('guestId', guestId)
                        dispatch(cart.get(guestId))
                    }
                    setOrderData(response)
                    setLoadingOrder(false)
                })
        }
    }, [orderId])


    if (loadingOrder) {
        return <Container maxWidth={'md'}>
            <Steps activeStep={3} />
            <Grid container spacing={8} style={{ textAlign: 'center', marginTop: 20 }}>
                <Grid item xs={12} >
                    <Typography variant='h4'>
                        Cargando datos del pedido
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                    <CircularProgress color='primary' />

                </Grid>

            </Grid>
        </Container>
    }

    return (
        <Container maxWidth="md">
            <Steps activeStep={4} />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent >
                            <label className={`${styles["internalFont"]}`}>Nº de Pedido </label>
                            <label className={`${styles["colorDecoration1"]}`}>
                                {orderData.code}</label>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <EventAvailableIcon />
                                {moment(orderData.createdAt).format('YYYY-MM-DD | HH:MM:SS')}
                            </div>
                            <label className={`${styles["internalFont"]}`}>Estado </label>
                            <label className={`${styles["colorDecoration2"]}`}>
                                {status?.name}
                            </label>

                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12}>
                    <Card className={`${styles["margin-card"]} ${styles["margin-catalog"]}`} >
                        <CardHeader title={'Registrado en la cuenta de mayorista'} />
                        <CardContent>
                            <label className={`${styles["internalFont"]}`}>Nombres:  </label>
                            <label className={`${styles["lblSize"]}`}>
                                {customer.firstName} {customer.lastName}</label>
                            <br />
                            <label className={`${styles["internalFont"]}`}>Número de Contacto:  </label>
                            <label className={`${styles["lblSize"]}`}>
                                {customer.phone}</label>
                            <br />
                            <label className={`${styles["internalFont"]}`}>Correo Electrónico:  </label>
                            <label className={`${styles["lblSize"]}`}>
                                {currentUser.email}</label>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card className={`${styles["margin-card"]} ${styles["margin-catalog"]}`} >
                        <CardHeader title={'Dirección de entrega'} />
                        <Grid item xs={12}>
                            <CardContent>
                                <label className={`${styles["lblSize"]}`}>
                                    {deliveryAddress.firstName} {deliveryAddress.lastName}
                                </label>
                                <br />
                                <label className={`${styles["lblSize"]}`}>
                                    {deliveryAddress.address} {deliveryAddress.address2}
                                </label>
                                <br />
                                <label className={`${styles["lblSize"]}`}>
                                    {deliveryAddress.phone}
                                </label>
                                <br />
                                <label className={`${styles["lblSize"]}`}>
                                    {deliveryAddress.city + " , " + deliveryAddress.state}
                                </label>
                            </CardContent>
                        </Grid>
                    </Card>

                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={'Resumen de tu compra'} />
                        <Grid item xs={12}>
                            <Accordion onClick={() => setProductsExpanded(!productsExpanded)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className={styles["editLabel"]} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <CardContent
                                        style={{ paddingLeft: 0 }}
                                    >
                                        <label className={`${styles["internalFont"]}`}>
                                            Total de productos:{' '}
                                        </label>
                                        <label className={`${styles["lblSize"]}`}>
                                            {products?.length}
                                        </label>
                                    </CardContent>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        {products.map((product) => (
                                            <Grid item xs={12}>
                                                <Card className={`${styles["mr-10C"]}`}>
                                                    <CardContent>
                                                        <Grid container>
                                                            <Grid item xs={6} xl={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                                <img width="100px" src={`${apiRest}${product.cover.jpg.S150x217}`} alt="img" />
                                                            </Grid>
                                                            <Grid item xs={6} xl={6}>
                                                                <div className={`${styles["order-PrContent"]}`}>
                                                                    <label>Descripción : {product.description}</label>
                                                                    <label>Referencia : {product.reference}</label>
                                                                    <label>Color : {product.color.name}</label>
                                                                    <label>Talla :  {product.size.value}</label>
                                                                    <label>Cantidad :  {product.quantity}</label>
                                                                    <label>Precio :  {numeral(product.wholesale_price).format('$ 0,0')}</label>
                                                                </div>
                                                            </Grid>
                                                        </Grid>

                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <CardContent>
                                <label className={`${styles["internalFont"]}`}>
                                    Costo de Envío  </label>
                                <label className={`${styles["lblSize"]}`}>
                                    {numeral(summary.shipping).format('$ 0,0')}</label>
                            </CardContent>
                            <CardContent>
                                <label className={`${styles["internalFont"]}`}>
                                    Total de tu compra  </label>
                                <label className={`${styles["lblSize"]}`}>
                                    {numeral(summary.total).format('$ 0,0')}
                                </label>
                            </CardContent>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={'Pagos al pedido'} />
                        <Grid item xs={12}>
                            <CardContent>
                                {payments.map((payment: any) => (
                                    <div>
                                        <label className={`${styles["paymentMethodTitle"]}`}>{payment.paymentData["title"]}</label>
                                        <label className={`${styles["lblSize"]}`}><span dangerouslySetInnerHTML={{ __html: payment.paymentData.paymentInstructions }} /></label>
                                    </div>
                                ))}
                            </CardContent>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
            <Grid spacing={2} >
                <Grid>
                    <Button
                        className={`${styles["btn-continue"]} ${styles["mb-10"]}`}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        style={{ borderRadius: 50, fontSize: 14 }}>
                        <Link href="/account-user/orders"><a className={`${styles["aLink"]}`}>Ver Historial de Pedidos</a></Link>
                    </Button>
                </Grid>

            </Grid>
        </Container>
    );
}

export default OrderDetails