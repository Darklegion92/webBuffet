import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Grid, Icon, IconButton, List, ListItemText, Menu, MenuItem, ListItemIcon, Typography, Collapse } from '@material-ui/core'
import { ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useStyles } from './styles'

const Header = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMovilSub, setOpenMovilSub] = useState(null);
    const [anchorElMovil, setAnchorElMovil] = useState(null);
    // const openMovilSub = Boolean(anchorElMovilSub);
    const openMovil = Boolean(anchorElMovil);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickMovil = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElMovil(event.currentTarget);
    };

    const handleCloseMovil = () => {
        setAnchorElMovil(null);
    };

    const handleClickMovilSub = () => {
        setOpenMovilSub(!openMovilSub);
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
                    <BottomNavigationAction classes={{ label: classes.label }} label="SERVICIOS" onClick={handleClickMovil} />
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
            <Menu
                id="lock-menu"
                anchorEl={anchorElMovil}
                open={openMovil}
                className={`${classes.paperMenu} ${classes.hiddenMovil}`}
                onClose={handleCloseMovil}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>

                        <ListItemText primary="SERVICIO 1" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="SERVICIO 2" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleClickMovilSub()}>
                        <ListItemText primary="SERVICIO 3" />
                        {openMovilSub ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openMovilSub} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="SUBSERVICIO 1" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="SUBSERVICIO 2" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Menu>
        </Grid >
    )
}

export default Header
