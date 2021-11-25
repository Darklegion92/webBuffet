import { createTheme } from '@mui/material/styles';
const primaryColor = '#8d292b'
export const MuiTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "#fff",
            light: 'rgba(141,41,43,0.31)',
        },
        secondary: {
            main: '#fc2a35', contrastText: "#fff"
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
    /*overrides: {
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
                    color: "#8d292b",
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
    }*/
})