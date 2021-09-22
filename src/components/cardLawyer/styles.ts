import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 25,
    },
    item:{
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        borderRadius: '50%',
        border: 'solid 1.5px',
        borderColor: theme.palette.primary.main,
        width: 200,
        height: 200,
    }
}));