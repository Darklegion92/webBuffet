import { BottomNavigation, BottomNavigationAction, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import Carousel from 'react-material-ui-carousel'
import React from 'react'

const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container className={classes.root}>
                <img src="/logo.png" width="150px" className={classes.img} />
                <Grid item xs={2} className={classes.container}>

                </Grid>
                <Grid item xs={4} className={`${classes.container} ${classes.centerVertical}`}>
                    <Typography variant="subtitle2" component="h2">
                        COLECTIVO DE ABOGADOS
                    </Typography>
                    <Typography variant="h5" component="h2">
                        GARCIA & ASOCIADOS
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <BottomNavigation
                        showLabels
                        className={classes.container}
                    >
                        <BottomNavigationAction classes={{ label: classes.label }} label="INICIO" />
                        <BottomNavigationAction classes={{ label: classes.label }} label="QUIENES SOMOS" />
                        <BottomNavigationAction classes={{ label: classes.label }} label="SERVICIOS" />
                        <BottomNavigationAction classes={{ label: classes.label }} label="PROFESIONALES" />
                    </BottomNavigation>
                </Grid>
            </Grid>
            <div className={classes.mark}></div>
            <Carousel
                className={classes.carrousel}
                navButtonsAlwaysInvisible
                stopAutoPlayOnHover={false}
                interval={4000}
                timeout={700}
                indicators={false}
            >
                <img src="/assets/images/slider1.jpg" width="100%" />
                <img src="/assets/images/slider1.jpg" width="100%" />
            </Carousel>
        </div>
    )
}

export default Header
