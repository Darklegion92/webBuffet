import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: 99,
        padding: '0 100px',
    },
    text: {
        color: theme.palette.primary.contrastText,
    },
    icon: {
        fontSize: 30,
    }
}
));