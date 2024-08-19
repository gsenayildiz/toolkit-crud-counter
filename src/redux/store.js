import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";





/*
 * configureStore - createStore farkları
 * 1) Verilen reducerları otomatik olarak birleştirir.
 * 2) Varsayılan olarak thunk kurulu gelir.
 * 3) devTools eklentisi kurulu gelir
 */

export default configureStore({
    reducer: {  counterReducer, crudReducer },
});