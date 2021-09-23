import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    carousel: {
        marginBottom: 400,
        [theme.breakpoints.down("md")]: {
            marginBottom: 220,
        }
    },
    container: {
        marginBottom: 25,
    }
}
));