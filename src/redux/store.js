import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Auth/auth.reducer";
import { reducer as productReducer } from "./Products/products.reducer";
import {reducer as cartReducer} from './Cart/cart.reducer';
import { reducer as Adminreducer } from "./Admin/admin.reducer";
import { reducer as singleProductreducer } from "./SingleProduct/single.reducer";

const rootReducer = combineReducers({
  auth: Authreducer,
  products: productReducer,
  cart: cartReducer,
  admin: Adminreducer,
  singleProduct: singleProductreducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);

