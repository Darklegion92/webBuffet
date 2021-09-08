import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        height: 550,
        width: '100%',
        top: 0,
        zIndex: 99,
        [theme.breakpoints.down("md")]: {
            padding: '0 5%',
        }
    },
    action: {
        color: 'white',
    },
    cart: {
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
        paddingTop: 12,
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }

    },
    logo: {
        width: 130,
        [theme.breakpoints.down("md")]: {
            width: 120,

        }
    }
}
));