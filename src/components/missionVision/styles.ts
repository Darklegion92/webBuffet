import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '30px 10px',
        [theme.breakpoints.up("md")]: {
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
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 350,
    },
    text: {
        color: theme.palette.primary.main,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        }
    },
    paragraph: {
        fontSize: 12,
        textAlign: 'justify',
        [theme.breakpoints.up("md")]: {
            fontSize: 12,
        }
    },
    icon: {
        fontSize: 50,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        }
    },
    cover: {
        width: 200,
        height: 350,
    }
}
));