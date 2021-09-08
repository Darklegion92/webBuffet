import React, { useEffect, useState } from "react";
import styles from "@/styles/catalog.module.css";
import ProductCatalog from "@/components/products-catalog";
import Router, { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

// Material UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as catalogRedux } from '@/redux/actions/catalog';
import useStyles from './styles/catalog.styles';
/**
 * States que maneja la clase Catalog.
 * products: "".
 * toggleWrap: Para usar el menú dentro del catálogo.
 * limit: Utilizado para la paginación automática del catálogo.
 * filtersByCat: Se usa para realizar los filtros.
 * search: Se usa para la búsqueda.
 * error: Manejo de alguns errores.
 * carBasketState: Se llena con la información que llega en el método getDataAddress.
 * snackbaropen:Maneja el estado de abrir y cerrar una alerta.
 * snackbarmessage: Maneja el mensaje que se va a enviar a las alertas.
 * snackbarseverity: El tipo de alerta que se maneja: info para información, success para correcto y 
 * error para errores.
 * snackbartypealert: Mensaje de acuerdo al tipo de alerta que se está enviando.
 */


const Catalog = () => {

  const [search, setSearch] = useState(true)
  const [$skip, set$skip] = useState(0)
  const classes = useStyles()

  const router = useRouter()
  const dispatch: any = useDispatch()
  const currentCatalog = useSelector((state: any) => state.catalog.current)


  let loadingDiv: any = {};

  useEffect(() => {
    loadingDiv = document.getElementById("loadingDivId");
  }, [])


  useEffect(() => {
    if (router.isReady || Router.router?.isReady) {
      const newParams = { $skip: 0, ...Router.router.query, ...router.query }
      loadingDiv.hidden = false;
      getCatalogProducts(newParams)
    }
  }, [router])



  const fetchMoreData = () => {
    set$skip($skip + 10)
    getCatalogProducts({ $skip: $skip + 10 })
  }

  const getCatalogProducts = (props) => {
    const newParams = { ...props, ...Router.router.query, ...router.query }
    if (newParams.reference) {
      newParams["$or[0][reference][$search]"] = `${newParams.reference}`
      newParams["$or[1][description][$search]"] = `${newParams.reference}`
      newParams["$or[2][products.barcode][$search]"] = `${newParams.reference}`
      delete newParams.reference
    }

    dispatch(catalogRedux.get(newParams)).then((resp) => {
      loadingDiv.hidden = true;
      setSearch(false)
    })
  }
  const hasMore = () => {
    return $skip + 10 < currentCatalog.total
  }


  return (

    <Container maxWidth={'md'} className={classes.root}>
      <div id="loadingDivId">
        <div className={`${styles["loadingContainer"]}`} >
          <div className={`${styles["loadingDiv"]}`} >
            <img src="/assets/images/loading.png" />
          </div>
        </div>
      </div>
      {search && <div className={styles["paddingExpander"]}></div>}
      {currentCatalog?.data?.length > 0 ?
        <InfiniteScroll
          dataLength={currentCatalog?.data.length}
          next={fetchMoreData}
          hasMore={hasMore()}
          loader={<Grid container justify='center' alignItems="center"><CircularProgress color="primary" /></Grid>}
          style={{ overflow: 'hidden' }}
          scrollThreshold={1}
        >
          <Grid container spacing={4} >
            {currentCatalog?.data?.map((products: any) => <ProductCatalog product={products} key={products.reference} />)}
          </Grid>
        </InfiniteScroll> :
        <Grid container alignContent="center" justify="center" className={classes.noProducts}>
          <Grid item justify="center" style={{ display: 'flex', marginBottom: 10 }}>
            <img
              width="20%"
              src="/assets/images/flor.png"
            />
          </Grid>
          <Typography variant="h5">
            Sin resultados para su busqueda
          </Typography>
        </Grid>}
    </Container>
  );
}

export default Catalog
