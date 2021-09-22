import { BottomNavigation, BottomNavigationAction, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Header = () => {
    const classes = useStyles()
    return (
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
    )
}

export default Header
