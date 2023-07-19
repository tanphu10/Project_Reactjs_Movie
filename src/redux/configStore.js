import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slice/nguoiDungSlice";
import loadingSlice from "./slice/loadingSlice";

export const store = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice,
    loading: loadingSlice,
  },
});
