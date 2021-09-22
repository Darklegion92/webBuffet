import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        height: 150,
        top: 30,
        zIndex: 99,
    },
    container: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: 80,
    },
    centerVertical: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        position: 'absolute',
        left: 50,
    },
    label: {
        "&.MuiBottomNavigationAction-label": {
            fontSize: '1rem',
        }
    },
}))