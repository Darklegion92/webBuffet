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
    carrousel: {
        position: 'absolute',
        top: -1,
        width: '100%',
        zIndex: 1,
        height: 550,
    },
    mark: {
        backgroundColor: 'rgba(255,255,255,0.35)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2,
        height: 550
    }
}))