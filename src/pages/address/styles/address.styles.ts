import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& .MuiInputBase-root::after': {
            display: 'none'
        },
        '& .MuiInputBase-root::before': {
            display: 'none'
        },
        minHeight: '100vh',
    },
    container: {
        minHeight: '100vh',
        padding: 20,

    },
    cardContainer: {
        padding: 20,
        margin: 10,
    },
    byDefault: {
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        right: '-97%',
        borderEndStartRadius: 10,
        top: -20,
        width: 'auto',
        padding: '1px 3px',
        marginBottom: -36,
    }
}));

export default useStyles