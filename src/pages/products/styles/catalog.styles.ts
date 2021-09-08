import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '100vh',
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            minHeight: '83vh',
        }
    },
    container: {
        //minHeight: '90vh',
    },
    title: {
        fontSize: '1.5rem'
    },
    noProducts: {
        paddingTop: '17%',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            paddingTop: '40%',
        }
    }
}));

export default useStyles