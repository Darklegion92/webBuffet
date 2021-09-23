import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        bottom: 0,
        zIndex: 99,
        padding: '0 100px',
        [theme.breakpoints.down("md")]: {
            padding: '0 20px',

        }
    },
    text: {
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down("md")]: {
            "&.MuiTypography-h4": {
                fontSize: 20,
            },
            "&.MuiTypography-subtitle2": {
                fontSize: 10,
            },
        },
    },
    icon: {
        fontSize: 30,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },
    logo: {
        width: '200px',
        [theme.breakpoints.down("md")]: {
            width: '100px',
        }
    }
}
));