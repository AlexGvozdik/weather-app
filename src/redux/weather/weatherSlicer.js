import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherAction = createAsyncThunk(
  "weather/fetchWeather",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `/weather?q=${payload}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      );

      return data;
    } catch (error) {
      toast.error("Please enter correct data!!!");
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const weatherSlices = createSlice({
  name: "weather",
  initialState: { weather: null, loading: false, error: null },
  reducers: {
    reset: (state, { payload }) => {
      state.weather = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.error = action?.payload;
      state.loading = false;
    });
  },
});
export const { reset } = weatherSlices.actions;
export default weatherSlices.reducer;
