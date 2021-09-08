import { createMuiTheme } from '@material-ui/core/styles';
const primaryColor = '#DC9F95'
export const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "#fff",
            light: 'rgba(220,159,149,0.31)',

        },
        secondary: {
            main: '#000000', contrastText: "#fff"
        },
        background: {
            default: '#ffff'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        button: {
            fontSize: 12,
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '::-webkit-scrollbar': {
                    width: ' 6px',
                },
                '::-webkit-scrollbar-track ': {
                    background: '#f1f1f1',
                },
                '::-webkit-scrollbar-thumb ': {
                    background: 'gray',
                    borderRadius: '5px',
                },
                '::-webkit-scrollbar-thumb:hover ': {
                    background: primaryColor,
                },
                html: {
                    WebkitFontSmoothing: 'auto',

                },
                '.MuiCard-root': {
                    boxShadow: '0 2px 5px #04000617 !important',
                    borderRadius: '6px !important'
                },
                a: {
                    textDecoration: 'none',
                }
            },
        },

        MuiBottomNavigationAction: {
            root: {
                color: "white",
                "&$selected": {
                    color: "#DC9F95",
                    boxShadow: "none",
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: "50px 50px 50px 50px",
                background: '#9D9D9D',
                opacity: '0.4',
                borderColor: 'white',
                '& $notchedOutline': {
                    borderColor: 'white',
                },
            },
            input: {
                color: "white",
            }
        },
        MuiInputLabel: {
            outlined: {
                color: "white",
                "&$focused": {
                    color: "white"
                },
                ".MuiFormControl-root:hover &:not($focused)": {
                    color: "#fff"
                }
            }
        },

        MuiButton: {
            root: {
                // backgroundColor: '#E0ABA1',
                textTransform: 'initial',
                borderRadius: 20,
                // min-width: max-content,
                // "&$disabled": {
                //     "backgroundColor": "#dedede",
                //     "color": "#fff"
                // }
            },
        }
    }
})