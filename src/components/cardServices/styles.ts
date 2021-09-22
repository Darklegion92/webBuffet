import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
    },
    card: {
        height: 400,
        padding: 10,
        textAlign: 'center',
    },
    head: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '20%'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '70%',
        overflowY: 'hidden',
    },
    footer: {
        height: '10%'
    },
}
));