import { useStyles } from './styles'
import React from 'react'
import { Grid } from '@material-ui/core'

const lawyers = [
    {
        image: '',
        name: '',
        description: '',
    }
]

const CardLawyer = () => {
    const classes = useStyles()
    return (
        <Grid container justifyContent="center" className={classes.container} spacing={6}>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
            <Grid item xs={6} lg={3} className={classes.item}>
                <img src="/assets/images/lawyer1.png" className={classes.card} />
            </Grid>
        </Grid>
    )
}

export default CardLawyer
