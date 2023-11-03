import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  userAvatar: "",
  isLogin: false,
  expirationTime: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    reducerLogin: (state, action) => {
      state.isLogin = true;
      state.username = action.payload.username;
      state.userAvatar = action.payload.userAvatar;
    },
    reducerLogout: (state) => {
      state.isLogin = false;
      state.expirationTime = null;
      state.username = "";
      state.userAvatar = "";
      localStorage.removeItem("token");
    },
    setExpirationTime: (state, action) => {
      state.expirationTime = new Date(action.payload);
    },
  },
});

export const { reducerLogin, reducerLogout, setExpirationTime } =
  userSlice.actions;
export default userSlice.reducer;
