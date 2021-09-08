import React, { useEffect, useState } from 'react'
import { Card, Container, Typography, Chip, Grid, Button, Tooltip } from '@material-ui/core'
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import useStyles from './styles/orders.styles'
import Link from 'next/dist/client/link';
import { Order } from '@/models/order.model'
import { request } from '@/redux/util'
import numeral from 'numeral'
import moment from 'moment';

const api_url = process.env.REACT_APP_API_URL

const Orders = () => {
    const [orders, setOrders] = useState<Order[] | []>([])
    const classes = useStyles()

    useEffect(() => {
        getOrders()
    }, [])

    /**
 * lista las ordenes
 */
    const getOrders = () => {
        request({
            url: `${api_url}/app-order?$sort[createdAt]=-1`,
            method: "GET",
            callback: (response?: any) => {
                if (!response.error) {
                    setOrders(response.data)
                }
            },
        })
    }

    return (
        <Container className={classes.container} maxWidth="xs">
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h6" >ORDENES DE PEDIDO</Typography>
            </Grid>
            {orders.map((order: Order) => (
                <Card className={classes.cardContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography variant="subtitle2">
                                Pedido No. {order.code}
                            </Typography>
                            <Typography variant="subtitle2">
                                Estado: {order.status.name}
                            </Typography>
                            <Typography variant="subtitle2">
                                Total Pedido: {numeral(order.summary.total).format('$ 0,0')}
                            </Typography>
                            <Typography variant="subtitle2">
                                Dirección: {order.deliveryAddress.address} {order.deliveryAddress.address2}
                            </Typography>
                            <Typography variant="subtitle2">
                                Solicitado: {<>
                                    {moment(order.createdAt).format('YYYY-MM-DD')}
                                    <Chip label={moment(order.createdAt).fromNow()} variant="outlined" />
                                </>}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            xs={2}
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Tooltip title="Ver" aria-label="edit">
                                <Link href={`/account-user/orders/${order._id}`}>
                                    <Button
                                        color="primary"
                                        startIcon={<VisibilityTwoToneIcon />}
                                    />
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Card>
            ))
            }
            <Grid
                container
                xs={12}
                justify="center"
                alignItems="center"
            >
            </Grid>
        </Container >
    )
}

export default Orders
