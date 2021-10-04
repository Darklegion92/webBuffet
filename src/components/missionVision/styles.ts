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
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 250,
    },
    text: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },
    paragraph: {
        textAlign: 'justify',
        [theme.breakpoints.down("md")]: {
            fontSize: 12,
        }
    },
    icon: {
        fontSize: 50,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    }
}
));