import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonAll, IPokemonAllTypes } from "../types";

export const pokemonApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/",
	}),
	endpoints: (builder) => ({
		getPokemons: builder.query<
			IPokemonAll,
			{ offset?: number; type?: string; name?: string; sortType: string }
		>({
			query: ({ offset = 0, type = "", name = "", sortType = "" }) =>
				`pokemon?offset=${offset}${type ? `&type=${type}` : ""}${name ? `&name=${name}` : ""}${sortType ? `&sortType=${sortType}` : ""}`,
		}),
		getPokemonTypes: builder.query<IPokemonAllTypes, void>({
			query: () => `type`,
		}),
		getPokemonInfo: builder.query<IPokemon, string>({
			query: (name) => `pokemon/${name}`,
		}),
	}),
});

export const {
	useGetPokemonsQuery,
	useLazyGetPokemonsQuery,
	useGetPokemonInfoQuery,
	useGetPokemonTypesQuery,
} = pokemonApi;
