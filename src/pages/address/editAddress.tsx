import React, { useState, useEffect } from 'react'
import { Card, Container, Typography, Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles/address.styles'
import { Address as AddressModel } from '@/models/address.model'
import SnackBar, { SnackBarProps } from "@/components/dialogs/SnackBar";
import FormAddress, { FormAddressProps } from '@/components/forms/FormAddress';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

//redux
import { request } from '@/redux/util'
import { useDispatch } from 'react-redux';
import { actionsCreators as customerAddress } from '@/redux/actions/customerAddress';
import { getCookie } from '@/lib/session';

const api_url = process.env.REACT_APP_API_URL

const EditAddress: NextPage = () => {
    const [propsSnackBar, setPropsSnackBar] = useState<SnackBarProps>({
        open: false,
        title: '',
        message: '',
    })
    const [address, setAddress] = useState<AddressModel>()

    const classes = useStyles()

    const dispatch: any = useDispatch()

    const router = useRouter()

    useEffect(() => {
        const { id } = router.query
        if (id && id !== 'new') {
            getAddress(id as string)
        }
    }, [router])

    useEffect(() => {
        const jwt = getCookie('jwt')
        if (!jwt) router.push(`/auth/login?redirect=${router.asPath}`)
    }, [])


    /**
     * @description se encarga de consultar los datos de la direccion seleccionada
     * @param id indice de la direccion
     */
    const getAddress = async (id: string) => {
        await request({
            url: `${api_url}/customer-address/${id}`,
            method: "GET",
            callback: (response?: any) => {
                if (!response.error) {
                    setAddress(response)
                }
            },
        })
    }

    /**
     * @description encargado de crear o actualizar la direccion
     * @param values campos a para actualizar o crear
     * @param callBack
     */
    const onSubmit = (values: any, callBack: any) => {
        const { id } = router.query
        if (id !== 'new') {
            dispatch(customerAddress.patch(id as string, values)).then((e) => {
                setPropsSnackBar({
                    open: true,
                    title: 'Correcto',
                    message: 'Datos Actualizados correctamente',
                    severity: 'success',
                })
                setTimeout(() => {
                    router.push('/account-user/address')
                    callBack(false)
                }, 1000)
            }).catch((e) => {
                setPropsSnackBar({
                    open: true,
                    title: 'Error al guardar',
                    message: e.data.message,
                    severity: 'error',
                })
                callBack(true)
            })
        } else {
            dispatch(customerAddress.create(values)).then((e) => {
                setPropsSnackBar({
                    open: true,
                    title: 'Correcto',
                    message: 'Dirección registrada correctamente',
                    severity: 'success',
                })
                setTimeout(() => {
                    router.push('/account-user/address')
                    callBack(false)
                }, 1000)
            }).catch((e) => {
                setPropsSnackBar({
                    open: true,
                    title: 'Error al registrar',
                    message: e.data.message,
                    severity: 'error',
                })
                callBack(true)
            })
        }
    }

    /**
     * @description redirecciona al listado de direcciones
     */
    const onCancel = () => {
        router.push('/account-user/address')
    }


    if (!address && router.query.id !== 'new') {
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
     * @description propiedades componentes de formulario de direcciones
     */
    const propsFormAddress: FormAddressProps = {
        address: {
            ...address,
            region: address ? `${address?.city} / ${address?.state} / ${address?.country}` : '',
        },
        onSubmit,
        onCancel,
    }

    return (
        <Container className={classes.container} maxWidth="xs">
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h6" >{address ? 'EDITAR DIRECCIÓN' : 'NUEVA DIRECCIÓN'}</Typography>
            </Grid>
            <Card className={classes.cardContainer}>
                <FormAddress {...propsFormAddress} />
            </Card>
            <SnackBar
                {...propsSnackBar}
                handleClose={() => setPropsSnackBar({
                    open: false,
                    title: '',
                    message: '',
                })}
            />
        </Container>
    )
}

export default EditAddress
