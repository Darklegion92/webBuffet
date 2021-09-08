
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from './theme';


const AppLayout = (props: any) => {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      {props.children}
    </MuiThemeProvider>
  )
}


export default AppLayout