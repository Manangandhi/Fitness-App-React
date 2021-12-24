import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import middleware from "./middleware";

const persistConfig = {
  key: "reducer",
  storage: storage,
  //   whitelist: ["ui", "user"], // only this list will be persisted
  // blacklist: [""], // this list will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configStore = (initialState = {}) => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };
