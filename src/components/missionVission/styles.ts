import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 30,
        [theme.breakpoints.down("md")]: {
            padding: '30px 20px',
        }
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'solid 1px #e7e4e3',
        "-webkit-box-shadow": "13px 13px 16px -3px rgba(0,0,0,0.22);-moz-box-shadow: 13px 13px 16px -3px rgba(0,0,0,0.22);box-shadow: 13px 13px 16px -3px rgba(0,0,0,0.22);",
        borderBottomRightRadius: '100px',
        borderTopLeftRadius: '100px',
        width: 550,
        minHeight: 550,
        padding: 50,
        [theme.breakpoints.down("md")]: {
            padding: 30,
            minHeight: 500,
            justifyContent: 'center',
        }
    },
    cardLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'solid 1px #e7e4e3',
        "-webkit-box-shadow": "13px -5px 16px -3px rgba(0,0,0,0.22);        -moz-box-shadow: 13px -5px 16px -3px rgba(0,0,0,0.22);        box-shadow: 13px -5px 16px -3px rgba(0,0,0,0.22);",
        borderBottomLeftRadius: '100px',
        borderTopRightRadius: '100px',
        width: 550,
        minHeight: 550,
        padding: 50,
        [theme.breakpoints.down("md")]: {
            padding: 30,
            minHeight: 500,
            justifyContent: 'center',
        }
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