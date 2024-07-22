import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});

export default Store;
