import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonAll, IPokemonAllTypes } from "../types/types";

export const pokemonApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/",
	}),
	endpoints: (builder) => ({
		getPokemons: builder.query<
			IPokemonAll,
			{
				offset?: number;
				type?: string;
				name?: string;
				sortType?: { name: string; direction: number };
			}
		>({
			query: ({
				offset = 0,
				type = "",
				name = "",
				sortType = { name: "name", direction: 1 },
			}) => {
				const queries = [
					`offset=${offset}`,
					`sortBy=${sortType.name}`,
					`sortDir=${sortType.direction}`,
				];
				if (type) queries.push(`type=${type}`);
				if (name) queries.push(`name=${name}`);
				return `pokemon?${queries.join("&")}`;
			},
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
