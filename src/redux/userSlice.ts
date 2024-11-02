import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import profile from '@assets/profile.png';
import { UserInterface } from '@interface/UserInterface';

const mainUser: UserInterface = {
  id: 'abc',
  userName: '이희원',
  profileImg: profile,
  isOnline: true,
};

const initialState = {
  mainUser,
  currentUser: mainUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleUser: (state, action: PayloadAction<UserInterface>) => {
      state.currentUser =
        state.currentUser.id === state.mainUser.id
          ? action.payload
          : state.mainUser;
    },
  },
});

export const { toggleUser } = userSlice.actions;
export default userSlice.reducer;
