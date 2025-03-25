import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
  cartService: Cookies.get('cartService')
    ? JSON.parse(Cookies.get('cartService'))
    : { cartServiceItems: [], shippingAddress: {}, paymentMethod: '' },
    appointment: Cookies.get('appointment')
    ? JSON.parse(Cookies.get('appointment'))
    : { appointmentItems: [], shippingAddress: {}, paymentMethod: '' },
accomodation: Cookies.get('accomodation')
    ? JSON.parse(Cookies.get('accomodation'))
    : { 
       accomodationItems: [],
       accomodationAppItems: [],
       shippingAddress: {},
       paymentMethod: '' },
business: Cookies.get('business')
       ? JSON.parse(Cookies.get('business'))
       : { 
        businessItems: [],
        businessAppItems: [],
        shippingAddress: {},
        paymentMethod: '' },  
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_RESET':
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: '',
        },
      };
    case 'CART_CLEAR_ITEMS':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    
    case 'CART_SERVICE_ADD_ITEM': {
        const newItem = action.payload;
        const existItem = state.cartService.cartServiceItems.find(
          (item) => item.slug === newItem.slug
        );
        const cartServiceItems = existItem
          ? state.cartService.cartServiceItems.map((item) =>
              item.name === existItem.name ? newItem : item
            )
          : [...state.cartService.cartServiceItems, newItem];
        Cookies.set('cartService', JSON.stringify({ ...state.cartService, cartServiceItems }));
        return { ...state, cartService: { ...state.cartService, cartServiceItems } };
      }
      case 'CART_SERVICE_REMOVE_ITEM': {
        const cartServiceItems = state.cartService.cartServiceItems.filter(
          (item) => item.slug !== action.payload.slug
        );
        Cookies.set('cartService', JSON.stringify({ ...state.cartService, cartServiceItems }));
        return { ...state, cartService: { ...state.cartService, cartServiceItems } };
      }
      case 'CART_SERVICE_RESET':
        return {
          ...state,
          cartService: {
            cartServiceItems: [],
            shippingAddress: { location: {} },
            paymentMethod: '',
          },
        };
      case 'CART_SERVICE_CLEAR_ITEMS':
        return { ...state, cartService: { ...state.cartService, cartServiceItems: [] } };
  
      case 'SAVE_SERVICE_SHIPPING_ADDRESS':
        return {
          ...state,
          cartService: {
            ...state.cartService,
            shippingAddress: {
              ...state.cartService.shippingAddress,
              ...action.payload,
            },
          },
        };
      case 'SAVE_SERVICE_PAYMENT_METHOD':
        return {
          ...state,
          cartService: {
            ...state.cartService,
            paymentMethod: action.payload,
          },
        };
        
    
    
          case 'CART_ACC_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.accomodation.accomodationItems.find(
              (item) => item.slug === newItem.slug
            );
            const accomodationItems = existItem
              ? state.accomodation.accomodationItems.map((item) =>
                  item.name === existItem.name ? newItem : item
                )
              : [...state.accomodation.accomodationItems, newItem];
            Cookies.set('accomodation', JSON.stringify({ ...state.accomodation, accomodationItems }));
            return { ...state, accomodation: { ...state.accomodation, accomodationItems } };
          }
          case 'CART_ACC_REMOVE_ITEM': {
            const accomodationItems = state.accomodation.accomodationItems.filter(
              (item) => item.slug !== action.payload.slug
            );
            Cookies.set('accomodation', JSON.stringify({ ...state.accomodation, accomodationItems }));
            return { ...state, accomodation: { ...state.accomodation, accomodationItems } };
          }
          case 'CART_ACC_RESET':
            return {
              ...state,
              accomodation: {
                accomodationItems: [],
                accomodationAppItems: [],
                shippingAddress: { location: {} },
                paymentMethod: '',
              },
            };
          case 'CART_ACC_CLEAR_ITEMS':
            return { ...state, accomodation: { ...state.accomodation, accomodationItems: [] } };
    
            case 'CART_ACC_APP_ADD_ITEM': {
              const newItem = action.payload;
              const existItem = state.accomodation.accomodationAppItems.find(
                (item) => item.slug === newItem.slug
              );
              const accomodationAppItems = existItem
                ? state.accomodation.accomodationAppItems.map((item) =>
                    item.name === existItem.name ? newItem : item
                  )
                : [...state.accomodation.accomodationAppItems, newItem];
              Cookies.set('accomodation', JSON.stringify({ ...state.accomodation, accomodationAppItems }));
              return { ...state, accomodation: { ...state.accomodation, accomodationAppItems } };
            }
            case 'CART_ACC_APP_REMOVE_ITEM': {
              const accomodationAppItems = state.accomodation.accomodationAppItems.filter(
                (item) => item.slug !== action.payload.slug
              );
              Cookies.set('accomodation', JSON.stringify({ ...state.accomodation, accomodationAppItems }));
              return { ...state, accomodation: { ...state.accomodation, accomodationAppItems } };
            }
      
            case 'CART_ACC_APP_CLEAR_ITEMS':
              return { ...state, accomodation: { ...state.accomodation, accomodationAppItems: [] } };
        
        case 'SAVE_APP_SHIPPING_ADDRESS':
          return {
            ...state,
            appointment: {
              ...state.appointment,
              shippingAddress: {
                ...state.appointment.shippingAddress,
                ...action.payload,
              },
            },
          };
        case 'SAVE_APP_PAYMENT_METHOD':
          return {
            ...state,
            appointment: {
              ...state.appointment,
              paymentMethod: action.payload,
            },
          };
          case 'ACC_RESET':
            return {
              ...state,
              accomodation: {
                accomodationItems: [],
                accomodationAppItems: [],
                shippingAddress: { location: {} },
                paymentMethod: '',
              },
            };
        case 'SAVE_ACC_SHIPPING_ADDRESS':
          return {
            ...state,
            accomodation: {
              ...state.accomodation,
              shippingAddress: {
                ...state.accomodation.shippingAddress,
                ...action.payload,
              },
            },
          };
        case 'SAVE_ACC_PAYMENT_METHOD':
          return {
            ...state,
            accomodation: {
              ...state.accomodation,
              paymentMethod: action.payload,
            },
          };
        
    
          case 'SAVE_BUS_SHIPPING_ADDRESS':
            return {
              ...state,
              business: {
                ...state.business,
                shippingAddress: {
                  ...state.business.shippingAddress,
                  ...action.payload,
                },
              },
            };
          case 'SAVE_BUS_PAYMENT_METHOD':
            return {
              ...state,
              business: {
                ...state.business,
                paymentMethod: action.payload,
              },
            };
      
          case 'CART_BUS_ADD_ITEM': {
              const newItem = action.payload;
              const existItem = state.business.businessItems.find(
                (item) => item.slug === newItem.slug
              );
              const businessItems = existItem
                ? state.business.businessItems.map((item) =>
                    item.name === existItem.name ? newItem : item
                  )
                : [...state.business.businessItems, newItem];
              Cookies.set('business', JSON.stringify({ ...state.business, businessItems }));
              return { ...state, business: { ...state.business, businessItems } };
            }
          case 'CART_BUS_REMOVE_ITEM': {
              const businessItems = state.business.businessItems.filter(
                (item) => item.slug !== action.payload.slug
              );
              Cookies.set('business', JSON.stringify({ ...state.business, businessItems }));
              return { ...state, business: { ...state.business, businessItems } };
            }
          case 'CART_BUS_RESET':
              return {
                ...state,
                business: {
                  businessItems: [],
                  businessAppItems: [],
                  shippingAddress: { location: {} },
                  paymentMethod: '',
                },
              };
          case 'CART_BUS_CLEAR_ITEMS':
              return { ...state, business: { ...state.business, businessItems: [] } };
      
          case 'CART_BUS_APP_ADD_ITEM': {
                const newItem = action.payload;
                const existItem = state.business.businessAppItems.find(
                  (item) => item.slug === newItem.slug
                );
                const businessAppItems = existItem
                  ? state.business.businessAppItems.map((item) =>
                      item.name === existItem.name ? newItem : item
                    )
                  : [...state.business.businessAppItems, newItem];
                Cookies.set('business', JSON.stringify({ ...state.business, businessAppItems }));
                return { ...state, business: { ...state.business, businessAppItems } };
              }
          case 'CART_BUS_APP_REMOVE_ITEM': {
                const businessAppItems = state.business.businessAppItems.filter(
                  (item) => item.slug !== action.payload.slug
                );
                Cookies.set('business', JSON.stringify({ ...state.business, businessAppItems }));
                return { ...state, business: { ...state.business, businessAppItems } };
              }
        
          case 'CART_BUS_APP_CLEAR_ITEMS':
                return { ...state, business: { ...state.business, businessAppItems: [] } };
          
    


      default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
