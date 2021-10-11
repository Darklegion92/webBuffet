import { useStyles } from './styles'
import { Grid, Typography, Icon } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item lg={10} xs={9}>
                <Link href='/contact'>
                    <a>
                        <Typography variant="h4" component="h2" className={classes.text}>
                            CONTACTAR <Icon className={classes.icon} >whatsapp</Icon>
                        </Typography>
                    </a>
                </Link>
                <Typography variant="subtitle2" component="text" className={classes.text}>
                    PRINCIPAL: AV 4 NO.11-17 EDIFICIO BEN-HUR<br />
                </Typography>
                <Typography variant="subtitle2" component="text" className={classes.text}>
                    CÚCUTA - NORTE DE SANTANDER
                </Typography>
            </Grid>
            <Grid item xs={3} lg={2}>
                <Link href='/'>
                    <a>
                        <img src="/logo.png" className={classes.logo} />
                    </a>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Footer
