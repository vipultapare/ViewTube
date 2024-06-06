import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../ReduxStore/userSlice';
import appSlice from '../ReduxStore/appSlice';

const appStore= configureStore(
  {
    reducer:{
        user:userReducer,
        app:appSlice,
    }
  }
)

export default appStore;