import { configureStore } from "@reduxjs/toolkit";
import HandleReducer from "./Reducers/HandleReducer";

const Store = configureStore({
  reducer: {
    addCart: HandleReducer,
  },
});

export default Store;
