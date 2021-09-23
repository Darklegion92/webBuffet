import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        height: 150,
        top: 30,
        zIndex: 99,
        [theme.breakpoints.down("md")]: {
            height: 50,
        }
    },
    container: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: 80,
        [theme.breakpoints.down("md")]: {
            height: 40,
        }
    },
    centerVertical: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        position: 'absolute',
        left: 50,
        width: "150px",
        [theme.breakpoints.down("md")]: {
            width: "50px",
            left: 30,
        }
    },
    label: {
        "&.MuiBottomNavigationAction-label": {
            fontSize: '1rem',
        }
    },
    hiddenMovil: {
        [theme.breakpoints.down("md")]: {
            display: 'none',
        }
    },
    hiddenDesktop: {
        display: 'none',
        [theme.breakpoints.down("md")]: {
            display: 'flex',
        }
    },
    paper: {
        marginTop: 55,
        "& .MuiMenu-paper": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderBottomLeftRadius: 40,
        },

    },
    text: {
        display: 'flex',
        justifyContent: 'center ',
    }
}))