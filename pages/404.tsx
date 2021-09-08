import { Grid, Typography, Container } from '@material-ui/core'
import React from 'react'

const Error404 = () => {
    return (
        <Container style={{ minHeight: '83vh' }}>
            <Grid container alignContent="center" justify="center" style={{ paddingTop: '50%' }}>
                <Grid item justify="center" style={{ display: 'flex', marginBottom: 10 }}>
                    <img
                        width="20%"
                        src="/assets/images/flor.png"
                    />
                </Grid>
                <Typography variant="h5" align="center">
                    Lo sentimos, recurso no disponible
                </Typography>
            </Grid>
        </Container>
    )
}

export default Error404
