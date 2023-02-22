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

const rootReducer = combineReducers({
  auth: Authreducer,
  products: productReducer,
  cart : cartReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);

