import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import staysSlice from "./staysSlice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer, stays: staysSlice.reducer },
});

export default store;
