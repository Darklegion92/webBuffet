import '@/styles/style.css'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline';
import { GTMPageView } from '../src/utils/gtm'
import AppLayout from '../src/layouts/AppLayout'
import moment from 'moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

//redux
import { Provider } from 'react-redux'
import { useStore } from '../src/redux/store'
import MomentUtils from '@date-io/moment';



const MyApp = (props) => {
  const { Component, pageProps } = props;
  let store = useStore(pageProps.initialReduxState);
  const [configApp, setConfigApp] = useState({})

  
  useEffect(async () => {
    const api_url = process.env.REACT_APP_API_URL
    const configAppReq = await fetch(`${api_url}/app-config`)
    const configApp = await configAppReq.json()
    setConfigApp(configApp)

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const handleRouteChange = (url) => GTMPageView(url);
    // Router.events.on('hashChangeComplete', url => console.log('render hashChangeComplete', url));
    // Router.events.on('routeChangeComplete', url => console.log('render url', url));
    // Router.events.on('routeChangeStart', url => console.log('render url routeChangeStart', url));
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  
  moment.updateLocale('es', {
    weekdays: [
      "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"
    ]
  })
  pageProps['configApp'] = configApp

  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale={'es'}>
        <Head>
          <meta key="viewport" name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <AppLayout>
          <CssBaseline />
          <Component {...pageProps}  />
        </AppLayout>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default MyApp
