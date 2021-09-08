import { useState, useEffect } from 'react'
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators as cart } from '@/redux/actions/cart';

import Link from 'next/link'

import styles from "@/styles/steps-buy.module.css";
import ProductCart from "@/components/checkout/ProductCart";
import SnackBar, { SnackBarProps } from "@/components/dialogs/SnackBar";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CartFooter from '@/components/checkout/CartFooter';
import { Container } from '@material-ui/core';
import Steps from '@/components/checkout/Steps';
import DialogCart from '@/components/dialogs/DialogCart';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles/cart.styles';
import { Product } from '@/models/product.model';

interface CartPageProps {
  configApp?: any;
}

const CartPage = (props: CartPageProps) => {
  const [loadingCart, setLoadingCart] = useState(false);
  const [snackBarProps, setSnackBarProps] = useState<SnackBarProps>();
  const [dialogCartData, setDialogCartData] = useState({ open: false, title: '', message: '', severity: 'default' });
  const dispatch: any = useDispatch()
  const cartData = useSelector((state: any) => state.cart.cartData)
  const cartLoading = useSelector((state: any) => state.cart.loading)
  const { products = [], summary: { total } } = cartData
  const classes = useStyles()

  useEffect(() => {
    const guestId = localStorage.getItem('guestId')
    if (guestId) {
      dispatch(cart.get(`${guestId}?checkInventory=true`))
    }
    if (cartData.error) {

    }
  }, [])

  const deleteProduct = (product_id: number) => {
    setLoadingCart(true)
    dispatch(cart.patch(cartData._id, {
      product_id,
      action: "delete",
    })).then(() => {
      setLoadingCart(false)
      setSnackBarProps({ open: true, title: 'Carrito actualizado', message: 'Producto eliminado' })

    })

  }

  const changeProductQty = async (product_id: number, quantity: number) => {
    setLoadingCart(true)
    dispatch(cart.patch(cartData._id, {
      product_id,
      quantity,
      action: "add",
    }))
      .then(e => {
        setLoadingCart(false)
        setSnackBarProps({ open: true, title: 'Carrito actualizado', message: 'Producto actualizado' })
      })
      .catch((err: any) => {
        setLoadingCart(false)
        setDialogCartData({ open: true, message: err.data.message, title: 'Error al actualizar el carrito', severity: 'error' })
        console.log({ err })
      })

  }
  // static propTypes = {
  //   authenticated: PropTypes.bool
  // };

  // static async getInitialProps(ctx) {

  //   if (redirectIfNotAuthenticated(ctx)) {
  //     return {};
  //   }

  //   const jwt = getJwt(ctx);

  //   return {
  //     authenticated: !!jwt,
  //   };
  // }

  const handleClose = () => {
    setDialogCartData({ ...dialogCartData, open: false })
  }

  const handleCloseSnackBar = () => {
    setSnackBarProps({ ...snackBarProps, open: false })
  }

  const totalUnit = () => {
    let total = 0
    cartData?.products?.forEach(product => {
      total += product.quantity
    });
    return total
  }

  const totalReference = () => {
    return cartData?.products?.length

  }

  const selectProductError = (product?: Product) => {
    return cartData?.error?.productsError.find(productError => productError.product_id === product.product_id)

  }

  return (
    <Grid container className={classes.root}>
      <SnackBar {...snackBarProps} handleClose={handleCloseSnackBar} />
      <DialogCart {...dialogCartData} handleClose={handleClose} />
      <Container maxWidth='md' className={classes.container}>
        <Grid
          container
        >
          <Grid item xs={12}>
            <Steps activeStep={0} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {products.map((product: any, key: number) => {
            return (
              <Grid item xs={12} sm={4} key={key}>
                <ProductCart
                  product={product}
                  key={product._id}
                  deleteProduct={deleteProduct}
                  changeProductQty={changeProductQty}
                  loading={loadingCart}
                  errorProduct={selectProductError(product)}
                />
              </Grid>
            );
          })}

          {cartLoading && <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography>
              Cargando los productos
            </Typography>
            <CircularProgress />
          </Grid>}

          {!cartLoading && !products.length && <Grid item xs={12} style={{ textAlign: 'center', margin: '40px 0' }}>
            <Typography variant='h4'>
              No hay productos
            </Typography>
            <ShoppingCartIcon style={{ fontSize: '8rem' }} />
          </Grid>}

        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs style={{ textAlign: 'center', marginTop: 20, marginBottom: cartData?.error ? 100 : 'initial' }}>
            <Link as='/catalogo' href='/catalogo'>
              <Button
                component='a'
                className={styles["btn-continue"]}
                variant="outlined"
                color="secondary"
              >
                Regresar al catálogo
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <CartFooter productsError={cartData?.error?.message} totalToPay={total} totalReference={totalReference()} totalUnit={totalUnit()} />
    </Grid>
  );
}

export default CartPage
