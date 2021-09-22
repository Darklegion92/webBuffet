import { useStyles } from './styles'
import { Grid, Typography, Icon } from '@material-ui/core'
import React from 'react'
const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item xs={10}>
                <Typography variant="h4" component="h2" className={classes.text}>
                    CONTACTAR <Icon className={classes.icon} >whatsapp</Icon>
                </Typography>
                <Typography variant="subtitle2" component="h2" className={classes.text}>
                    PRINCIPAL: C.C. LECS SEGUNDO PISO OFICINA 226
                </Typography>
                <Typography variant="subtitle2" component="h2" className={classes.text}>
                    SEDE: AV 4 NO. 11-17 EDIFICIO BEN-HUR
                </Typography>
                <Typography variant="subtitle2" component="h2" className={classes.text}>
                    CÚCUTA - NORTE DE SANTANDER
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <img src="/logo.png" width="200px" />
            </Grid>


        </Grid>
    )
}

export default Footer
