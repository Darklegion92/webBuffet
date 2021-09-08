import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DC9F95', contrastText: "#fff"
    },
    secondary: {
      main: '#000000', contrastText: "#fff"
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      fontSize: 12,
    }
  },
  overrides: {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    },
    MuiOutlinedInput: {
      root: {
        //borderRadius: "50px 50px 50px 50px",
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
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.1em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  }

});

export default theme;