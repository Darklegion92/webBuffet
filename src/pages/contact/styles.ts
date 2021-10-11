import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '80vh',
        padding: '0 25%',
        paddingTop: 430,
    },
    card: {
        marginBottom: 20,
    },
    cardArea: {
        display: 'flex',
        flexDirection: 'row',
    },
    cardMedia: {
        width: '30%'
    },
    cardContent: {
        width: '70%'
    }
}
));