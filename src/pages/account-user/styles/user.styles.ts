import { makeStyles, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& .MuiInputBase-root::after': {
            display: 'none'
        },
        '& .MuiInputBase-root::before': {
            display: 'none'
        },
        //minHeight: '100vh',
    },
    container: {
        minHeight: '100vh',
        padding: 20,
    },
    cardContainer: {
        padding: 20,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        border: 'solid 1px #9d9d9d94',
        borderRadius: 40,
        padding: 10,
        position: 'relative',
        color: '#3C3939',
        fontWeight: 'bold',
        outline: 'none',
    },
    label: {
        fontSize: '1rem',
        color: '#3C3939'
    }
}));



export const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },

    }),
)(Badge);

export const StyledBadgeError = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: 'red',
            color: 'red',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },

    }),
)(Badge);
export default useStyles