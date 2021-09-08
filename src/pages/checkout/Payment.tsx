import { useState, useEffect } from "react";
import styles from "@/styles/steps-buy.module.css";
import Router from "next/router";
import Steps from "@/components/checkout/Steps";
import SummaryCart from '@/components/checkout/SummaryCart'
import DialogPaymentMethod from '@/components/checkout/DialogPaymentMethod'
import SnackBar, { SnackBarProps } from '@/components/dialogs/SnackBar'

// Material UI\
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import SanitizedHTML from 'react-sanitized-html';


//Redux
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators as order } from '@/redux/actions/orders';

interface PaymentPageProps {
    configApp?: any;
}

const PaymentPage = (props: PaymentPageProps) => {
    const { configApp } = props

    const dispatch: any = useDispatch()
    const currentUser: any = useSelector((state: any) => state.user.current)
    const currentUserLoading: any = useSelector((state: any) => state.user.loading)
    const [submittingOrder, setSubmittingOrder] = useState<boolean>(false)
    const [snackBarData, setSnackBarData] = useState<SnackBarProps>({})
    const cartData: any = useSelector((state: any) => state.cart.cartData)
    const [alertMessage, setAlertMessage] = useState<any>({ show: false, title: '', message: '' })

    const { paymentMethods = [] } = configApp
    const { summary = {} } = cartData


    const [openDialogPayment, setOpenDialogPayment] = useState(false)
    const [messageInfo, setMessageInfo] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(null)

    useEffect(() => {
        if (currentUser.id) {
            if (!currentUser.wholesale.active) {
                setAlertMessage({ show: true, title: 'Cuenta de mayorista no está activa', message: currentUser.wholesale.message })
            }
        }
        else if (!currentUserLoading) {
            Router.push('/')
        }
    }, [currentUser, currentUserLoading])

    useEffect(() => {
        if (!cartData?.products?.length) {
            Router.push('/checkout/cart')
        }
    }, [cartData])

    /**
     * @method openDialog
     * @description abre el cuadro de diálogo de confirmar pedido
     * @param id: se envia el id del método de pago.
     * @param message: el mensaje del método de pago (instrucciones).
     * @param namePayment: el nombre del método de pago.
     */
    const openDialog = (message, namePayment) => {
        setOpenDialogPayment(true)
        setMessageInfo(message)
        setPaymentMethod(namePayment)
    };



    const createOrder = () => {
        setSubmittingOrder(true)
        const { _id: cartId } = cartData

        dispatch(order.create({ cartId, paymentMethod }))
            .then((response: any) => {
                localStorage.removeItem('guestId')
                Router.push(`/checkout/orderConfirmation?orderId=${response._id}`)
            }).catch((error: any) => {
                setSnackBarData({ open: true, title: 'Error al procesar el pedido', message: error.data.message, severity: 'error' })
                setTimeout(() => {
                    setSubmittingOrder(false)
                    if (error.data.data.productsError) {
                        console.log(error.data.data.productsError)
                        Router.push('/checkout/cart')
                    }
                }, 2000);
            })
    }

    return (
        <Container maxWidth='md' >
            <SnackBar {...snackBarData} />
            <Steps activeStep={2} />
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={styles["title-payment"]}>
                        Selecciona el medio de pago
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {paymentMethods.map((item: any) => {
                        if (!item.carrier || item.carrier.carrierId === cartData?.carrier?.carrierId) {
                            return <Accordion
                                className={`${styles["box-shadow-product"]} ${styles["background-card"]} ${styles["fix-details"]} ${styles["mt-5"]}`}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    key={item._id}
                                >
                                    <Typography className={styles["bold-title"]} variant="body1">
                                        {item.title}
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className={`${styles["paymentMethodContent"]}`}>
                                        <Typography>
                                            <SanitizedHTML html={item.description} />
                                        </Typography>
                                        <Button
                                            className={`${styles["btn-continue"]} `}
                                            type="submit" id="btnSelectPaymentMethods"
                                            name="btnSelectPaymentMethods"
                                            variant="contained" color="secondary"

                                            onClick={() => openDialog(item.paymentInstructions, item.name)}>Seleccionar</Button>
                                    </div>

                                </AccordionDetails>
                            </Accordion>;
                        }
                        return <></>
                    })}
                    <DialogPaymentMethod
                        open={openDialogPayment}
                        handleCloseDialog={() => setOpenDialogPayment(false)}
                        instructionsInfo={messageInfo}
                        handleConfirmPayment={createOrder}
                        submitting={submittingOrder}
                    />


                </Grid>
                <Grid item xs={12}>
                    <SummaryCart
                        currentUser={currentUser}
                        summary={summary}
                        configApp={configApp}
                        alertMessageProps={alertMessage}
                    />
                </Grid>

            </Grid>

        </Container>
    );
}
export default PaymentPage