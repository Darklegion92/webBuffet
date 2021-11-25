import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Grid, Icon, IconButton, List, ListItemText, Menu, MenuItem, ListItemIcon, Typography, Collapse } from '@material-ui/core'
import Link from 'next/link'
import { ListItemButton } from '@mui/material';
import { useRouter } from 'next/router'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { services } from '@/util/dataStorage'
import { useStyles } from './styles'

const Header = () => {
    const classes = useStyles()
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMovilSub, setOpenMovilSub] = useState('');
    const [anchorElMovil, setAnchorElMovil] = useState(null);
    const openMovil = Boolean(anchorElMovil);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickMovil = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()        
        setAnchorElMovil(event.currentTarget);
    };

    const handleCloseMovil = () => {
        setAnchorElMovil(null);
    };

    const handleClickMovilSub = (service: { name: string, subservices: string[] }) => {
        if (service.name === openMovilSub) {
            setOpenMovilSub('');
        } else {
            setOpenMovilSub(service.name);
        }

        if (service.subservices.length === 0) {
            onChangeLink(null, `/services/${service.name}`)
        }
    };


    const onChangeLink = (event: React.SyntheticEvent, newValue: string) => {
        setAnchorEl(null);
        setAnchorElMovil(null);
        router.push(newValue)
    }


    return (
        <Grid container className={classes.root}>
            <Link href='/'>
                <a className={classes.containerImg}> <img src="./logo.png" className={classes.img} /></a>
            </Link>
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
                    onChange={onChangeLink}
                >
                    <BottomNavigationAction
                        classes={{ label: classes.label }}
                        value="/"
                        label="INICIO"
                    />
                    <BottomNavigationAction classes={{ label: classes.label }} label="QUIENES SOMOS" />
                    <BottomNavigationAction classes={{ label: classes.label }} label="SERVICIOS" onClick={handleClickMovil} />
                    <BottomNavigationAction
                        classes={{ label: classes.label }}
                        value="/lawyers"
                        label="PROFESIONALES"
                    />
                </BottomNavigation>
            </Grid>
            <Menu
                anchorEl={anchorEl}
                open={open}
                className={`${classes.paper} ${classes.hiddenDesktop}`}
                onClose={handleClose}
                anchorOrigin={{ horizontal: 100, vertical: 100 }}
            >
                <Link href='/'>
                    <MenuItem key="0" className={classes.text} onClick={handleClose}>
                        INICIO
                    </MenuItem>
                </Link>
                <MenuItem key="1" className={classes.text} onClick={handleClose}>
                    QUIENES SOMOS
                </MenuItem>
                <MenuItem key="2" className={classes.text} onClick={handleClose}>
                    SERVICIOS
                </MenuItem>
                <Link href='/lawyers'>
                    <MenuItem key="3" className={classes.text} onClick={handleClose}>
                        PROFESIONALES
                    </MenuItem>
                </Link>
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
                    {services.map((service, key) =>
                        <>
                            <ListItemButton key={key} onClick={() => handleClickMovilSub(service)} key={service.name}>
                                <ListItemText primary={service.name} />
                                {service.subservices.length > 0 && (openMovilSub === service.name ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>
                            {service.subservices.length > 0 && <Collapse in={openMovilSub === service.name} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding key={service.name}>
                                    {service.subservices.map(subservice =>
                                        <ListItemButton key={subservice} sx={{ pl: 4 }} onClick={() => onChangeLink(null, `/services/${service.name}/${subservice}`)}>
                                            <ListItemText primary={subservice} />
                                        </ListItemButton>)}
                                </List>
                            </Collapse>}
                        </>
                    )}
                </List>
            </Menu>
        </Grid >
    )
}

export default Header
