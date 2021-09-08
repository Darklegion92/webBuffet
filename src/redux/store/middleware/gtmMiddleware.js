import {
  order as orderAct, cart as cartAct, product as productAct
} from '../../actions/actionsTypes';
// const productAct = product
const sendEvents = (...events) => {
    const dataLayer = window.dataLayer || [];
    dataLayer.push(...events);
    window.dataLayer = dataLayer;
}

const gtmMiddleware = ({ getState }) => {
    return (next) => (action) => {
      let returnValue = next(action)
      // const {product : {product}, cart : {cartData}} =  getState()
      // let products = []
      // switch(action.type){
      //     case cartAct.addItem :
      //         sendEvents({event : 'addToCart',
      //         ecommerce: {
      //           'currencyCode': 'COP',
      //           'add': {                                // 'add' actionFieldObject measures.
      //             'products': [{                        //  adding a product to a shopping cart.
      //               'name': product.texto1,
      //               'id': product.material,
      //               'price': product.precio,
      //               'quantity': action.data.quantity
      //             }]
      //           }
      //         }
      //       })

      //         break;
      //     case productAct.get:
      //         sendEvents({
      //           event : 'productView',
      //           'ecommerce': {
      //             'detail': {
      //               // 'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
      //               'products': [{
      //                 'name': product.texto1,         // Name or ID is required.
      //                 'id': product.material,
      //                 'price': product.precio,
      //                 // 'category': 'Apparel',
      //                 // 'variant': 'Gray'
      //               }]
      //             }
      //           }
      //         })

      //         break;
      //     case orderAct.checkout :
      //         if(!cartData.products){
      //           break;
      //         }
      //         products = cartData.products.map(({data : {id, texto1, precio}, quantity}) => ({id, name : texto1, price : precio, quantity}))
      //         sendEvents({event : 'checkout',
      //         ecommerce: {
      //           'checkout': {
      //               'actionField': {'step': 2, 'option': ''},
      //               products
      //           }
      //         }
      //       })

      //         break;
      //     case cartAct.get :
      //       if( cartData.products && ['/carrito','/pedido'].includes(location.pathname) ){
              
      //         products = cartData.products.map(({data : {material, texto1, precio}, quantity}) => ({id: material, name : texto1, price : precio, quantity}))
      //           sendEvents({event : 'checkout',
      //           ecommerce: {
      //             'checkout': {
      //                 'actionField': {'step': 1, 'option': ''},
      //                 products 
      //             }
      //           }
      //         })
      //       }

      //         break;
      //     case orderAct.setPaymentMethod :
            
      //         sendEvents({event : 'checkoutOption',
      //         ecommerce: {
      //           'checkout': {
      //               'actionField': {'step': 1, 'option': action.data},
                    
      //           }
      //         }
      //       })
      //     case orderAct.get :
      //       if(action.data.purchase){
      //           const {id, orderId, orderDetail, totalPaid} = action.data
      //           const orderProducts = orderDetail.map(({data : {material, texto1, precio}, quantity}) => ({id : material, name : texto1, price : precio, quantity}))
      //           const tax = totalPaid - (totalPaid/1.19)
      //           sendEvents({
      //             event : 'purchase',
      //             ecommerce: {
      //               'purchase': {
      //                   'actionField': {
      //                     id: orderId,                         // Transaction ID. Required for purchases and refunds.
      //                     'affiliation': 'Tienda en linea',
      //                     revenue: totalPaid,                     // Total transaction value (incl. tax and shipping)
      //                     tax,
      //                     shipping: 0,
                          
      //                   },
      //                   'products': orderProducts
      //               }
      //               }
      //           })
      //       }

      //         break;
      // }
      // Llama al siguiente método dispatch en la cadena de middlewares
      
  
      // Este seguramente sera la acción, excepto
      // que un middleware anterior la haya modificado.
      return returnValue
    }
  }
  

  export default gtmMiddleware