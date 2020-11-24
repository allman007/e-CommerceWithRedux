//Second
//Handle all the state or it respresent d overall reducer base on all reducer pull i.

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

//Before persist-Reducer
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });

//For localStorage(After Persist-Reducer)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

//For localStorage(After Persist-Reducer)
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//For localStorage(After Persist-Reducer)
export default persistReducer(persistConfig, rootReducer);
