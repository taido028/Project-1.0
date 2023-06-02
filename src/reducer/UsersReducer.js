import { createSlice } from "@reduxjs/toolkit";

export const Update_User = (state, action) => {
  const newUser = action.payload;
  const oldUser = state[newUser.id];
  state[newUser.id] = { ...oldUser, ...newUser };
  return state;
};

export const UserSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    users_update: Update_User,
  },
});
export const UserActions = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
