import { useStyles } from './styles'
import { Grid, Typography, Icon } from '@material-ui/core'
import React from 'react'
const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item lg={10} xs={9}>
                <Typography variant="h4" component="h2" className={classes.text}>
                    CONTACTAR <Icon className={classes.icon} >whatsapp</Icon>
                </Typography>
                <Typography variant="subtitle2" component="text" className={classes.text}>
                    PRINCIPAL: C.C. LECS SEGUNDO PISO OFICINA 226<br />
                </Typography>
                <Typography variant="subtitle2" component="text" className={classes.text}>
                    SEDE: AV 4 NO. 11-17 EDIFICIO BEN-HUR<br />
                </Typography>
                <Typography variant="subtitle2" component="text" className={classes.text}>
                    CÚCUTA - NORTE DE SANTANDER
                </Typography>
            </Grid>
            <Grid item xs={3} lg={2}>
                <img src="/logo.png" className={classes.logo} />
            </Grid>


        </Grid>
    )
}

export default Footer
