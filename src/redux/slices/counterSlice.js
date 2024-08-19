/*
    ! createSlice:
    * Hem reducerı hem reducerın aksiyonları createSlice metodu ile tek seferde tanımlarız.

    todo slide oluşturma:
    * 1.adım: import { createSlice } from "@reduxjs/toolkit"; import edilir
    * 2.adım:
    * - name: slice ismi >> string
    * - initialState: başlangıç state i
*/

import { createSlice } from "@reduxjs/toolkit";

 const  counterSlice = createSlice({
 name: "counter",
 initialState: {count:0, isDarkTheme: true},
 reducers: {
    increase: (state) => {
        state.count++;
    },
    decrease: (state) => {
        state.count--;
    },
    setCount: (state, action) => {
     state.count = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//* Slice'ın oluşturduğu reducer fonksiyonunu store'a tanıtmak için export ettik
export default counterSlice.reducer;

export const { increase, decrease, setCount, toggleTheme } = counterSlice.actions;