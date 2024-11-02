import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import messageSliceReducer from './messageSlice';
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    message: messageSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
