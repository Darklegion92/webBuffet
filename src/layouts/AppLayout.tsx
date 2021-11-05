import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import Header from '@/components/header';
import VideoPlayer from '@/components/videoPlayer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from './theme';


const AppLayout = (props: any) => {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <Header />
      <VideoPlayer />
      {/*<Carousel />*/}
      {props.children}
      <Footer />
    </MuiThemeProvider>
  )
}


export default AppLayout