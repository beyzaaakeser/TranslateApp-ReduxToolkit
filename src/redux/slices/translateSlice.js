import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: null,
  answer: '',
};

const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {},
});

export default translateSlice.reducer;
