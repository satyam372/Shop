import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      const { id, name, address, email, phone } = action.payload || {};
      state.user = { id, name, address, email, phone };
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;