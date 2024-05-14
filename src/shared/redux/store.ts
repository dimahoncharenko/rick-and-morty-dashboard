import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { characterApi } from "../api/characterApi";
import { episodeApi } from "../api/episodeApi";
import { locationApi } from "../api/locationApi";

export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
        [episodeApi.reducerPath]: episodeApi.reducer,
        [locationApi.reducerPath]: locationApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(characterApi.middleware)
          .concat(episodeApi.middleware)
          .concat(locationApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;