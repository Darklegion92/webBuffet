import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    header: {
        position: 'absolute',
        top: -1,
        left: 0,
        width: '100%',
        zIndex: 1,
        height: 550,
        overflow: 'hidden',
        '& .react-player': {
            width: '100%!important',
            height: '550px!important',
        }
    },
}
));