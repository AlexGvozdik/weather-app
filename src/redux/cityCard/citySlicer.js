import { createSlice } from "@reduxjs/toolkit";

const deleteCity = (arr, name) => {
  return arr.filter((el) => name !== el);
};

const citySlices = createSlice({
  name: "cities",
  initialState: {
    arr: [],
    error: null,
    loading: false,
  },
  reducers: {
    addCity: (state, { payload }) => {
      state.arr = !state.arr.includes(payload)
        ? [...state.arr, payload]
        : state.arr;
    },
    removeCity: (state, { payload }) => {
      state.arr = [...deleteCity(state.arr, payload)];
    },
  },
});

export const { addCity, removeCity } = citySlices.actions;
export default citySlices.reducer;
