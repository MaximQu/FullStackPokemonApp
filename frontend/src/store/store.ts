import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { pokemonApi } from "../api/pokemonApi";

export const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();