import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../state";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
    reducer: {
      global: globalReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});