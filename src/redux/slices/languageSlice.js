import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  langs: [],
};

const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default languageSlice.reducer;
