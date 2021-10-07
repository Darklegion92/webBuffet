import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '30px 10px',
        [theme.breakpoints.down("md")]: {
            padding: '30px 10px',
        }
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30,
    },
    title: {
        textAlign: 'center',
        marginBottom: 25,
        color: theme.palette.primary.main,
    }
}
));