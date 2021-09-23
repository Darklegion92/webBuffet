import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Grid, Icon, IconButton, Menu, MenuItem, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Header = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container className={classes.root}>
            <img src="/logo.png" className={classes.img} />
            <Grid item xs={3} lg={2} className={classes.container}>

            </Grid>
            <Grid item xs={7} lg={4} className={`${classes.container} ${classes.centerVertical}`}>
                <Typography variant="subtitle2" component="h2" className={classes.hiddenMovil}>
                    COLECTIVO DE ABOGADOS
                </Typography>
                <Typography variant="h5" component="h2" className={classes.hiddenMovil}>
                    GARCIA & ASOCIADOS
                </Typography>
                <Typography variant="caption" component="text" className={classes.hiddenDesktop}>
                    COLECTIVO DE ABOGADOS
                </Typography>
                <Typography variant="caption" component="text" className={classes.hiddenDesktop}>
                    GARCIA & ASOCIADOS
                </Typography>
            </Grid>
            <Grid item xs={2} lg={6} className={classes.container}>
                <IconButton
                    className={`${classes.container} ${classes.hiddenDesktop}`}
                    onClick={handleClick}
                >
                    <Icon>{open ? 'close' : 'reorder'}</Icon>
                </IconButton>
                <BottomNavigation
                    showLabels
                    className={`${classes.container} ${classes.hiddenMovil}`}
                >
                    <BottomNavigationAction classes={{ label: classes.label }} label="INICIO" />
                    <BottomNavigationAction classes={{ label: classes.label }} label="QUIENES SOMOS" />
                    <BottomNavigationAction classes={{ label: classes.label }} label="SERVICIOS" />
                    <BottomNavigationAction classes={{ label: classes.label }} label="PROFESIONALES" />
                </BottomNavigation>
            </Grid>
            <Menu
                anchorEl={anchorEl}
                open={open}
                className={`${classes.paper} ${classes.hiddenDesktop}`}
                onClose={handleClose}
                anchorOrigin={{ horizontal: 100, vertical: 100 }}
            >
                <MenuItem className={classes.text}>
                    INICIO
                </MenuItem>
                <MenuItem className={classes.text}>
                    QUIENES SOMOS
                </MenuItem>
                <MenuItem className={classes.text}>
                    SERVICIOS
                </MenuItem>
                <MenuItem className={classes.text}>
                    PROFESIONALES
                </MenuItem>
            </Menu>
        </Grid >
    )
}

export default Header
