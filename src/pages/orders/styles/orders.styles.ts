import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& .MuiInputBase-root::after': {
            display: 'none'
        },
        '& .MuiInputBase-root::before': {
            display: 'none'
        }
    },
    container: {
        minHeight: '90vh',
        padding: 20,

    },
    cardContainer: {
        padding: 20,
        margin: 10,
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
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(8),
        right: theme.spacing(3),
    },
}));

export default useStyles