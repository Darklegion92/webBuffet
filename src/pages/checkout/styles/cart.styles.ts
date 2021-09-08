import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
    },
    container: {
        minHeight: '100vh',
        paddingBottom: 140,
    },
    title: {
        fontSize: '1.5rem'
    }
}));

export default useStyles