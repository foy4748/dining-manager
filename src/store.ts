import { configureStore } from "@reduxjs/toolkit";
import testCounterSlice from "./Slices/testCounterSlice";

export const store = configureStore({
  reducer: {
    counter: testCounterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred ype: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatcht;
