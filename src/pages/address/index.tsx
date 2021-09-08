import React, { useEffect, useState } from 'react'
import { Card, Container, Typography, Grid, Button, CircularProgress, Tooltip, CardActionArea, CardContent, CardMedia, Icon } from '@material-ui/core'
import EditTwoTone from '@material-ui/icons/EditTwoTone';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles/address.styles'
import Link from 'next/dist/client/link';
import { Address as AddressModel } from '@/models/address.model'
import { NextPage } from 'next';
import StarIcon from '@material-ui/icons/Star';
//redux
import { request } from '@/redux/util'
import { getCookie } from '@/lib/session';
import { useRouter } from 'next/router';

const api_url = process.env.REACT_APP_API_URL

const Address: NextPage = () => {
    const [addresses, setAddresses] = useState<AddressModel[] | []>([])
    const classes = useStyles()
    const router = useRouter()
    useEffect(() => {
        getAddresses()
        const jwt = getCookie('jwt')
        if (!jwt) router.push(`/auth/login?redirect=${router.asPath}`)
    }, [])


    /**
     * @description obtiene el listado de direcciones del usuario
     */
    const getAddresses = () => {
        request({
            url: `${api_url}/customer-address/?$sort[by_default]=-1`,
            method: "GET",
            callback: (response?: any) => {
                if (!response.error) {
                    setAddresses(response.data)
                }
            },
        })
    }

    if (!addresses) {
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


    return (
        <Container className={classes.container} maxWidth="xs">
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h6" >DIRECCIONES</Typography>
            </Grid>
            {addresses.map((address: AddressModel) => (
                <Card className={classes.cardContainer}>
                    {address.by_default ? <div className={classes.byDefault}>
                        <StarIcon style={{ color: 'white' }} />
                    </div> : <></>}
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography variant="subtitle2">
                                {address.firstName} {address.lastName}
                            </Typography>
                            <Typography variant="subtitle2">
                                {address.address} {address.address2}
                            </Typography>
                            <Typography variant="subtitle2">
                                {address.city}-{address.state}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            xs={2}
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Tooltip title="Editar" aria-label="edit">
                                <Link href={`/account-user/address/${address._id}`}>
                                    <Button
                                        color="primary"
                                        startIcon={<EditTwoTone />}
                                    />
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Card>
            ))}
            <Grid
                container
                xs={12}
                justify="center"
                alignItems="center"
            >
                <Link href="/account-user/address/new">
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <AddIcon /> Agregar dirección
                    </Button>
                </Link>
            </Grid>
        </Container >
    )
}

export default Address
