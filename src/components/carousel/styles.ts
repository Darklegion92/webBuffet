import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
        height: 550,
        [theme.breakpoints.down("md")]: {
            height: 300,
        }
    }
}
));