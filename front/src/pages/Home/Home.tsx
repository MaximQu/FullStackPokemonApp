import {
	ErrorFallback,
	Favorites,
	FavoritesBtn,
	Loading,
	Pagination,
	PokemonTypes,
	PokemonsList,
	Search,
	Sort,
	ToTopBtn,
} from "@/components";
import { useLazyGetPokemonsQuery } from "@/redux/api/api";
import { IOptions, IPokemon } from "@/redux/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useMemo, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Home = () => {
	const [activeFav, setActiveFav] = useState<boolean>(false);
	const [showFavorite, setShowFavorite] = useState<boolean>(false);

	const storedOptionsData = localStorage.getItem("options");
	const optionsInitialState: IOptions =
		storedOptionsData !== null
			? (JSON.parse(storedOptionsData) as IOptions)
			: {
					type: "",
					name: "",
					sortType: "",
					offset: 0,
				};

	const [options, setOptions] = useState<IOptions>(optionsInitialState);

	const favoritesInitialState = useMemo<
		Pick<IPokemon, "name" | "photo">[]
	>(() => {
		const storedData = localStorage.getItem("favoritePokemon");
		return storedData !== null
			? (JSON.parse(storedData) as Pick<IPokemon, "name" | "photo">[])
			: [];
	}, []);
	const [favorites, setFavorites] = useState(() => favoritesInitialState);
	const [fetchTrigger, { data, isLoading, error }] = useLazyGetPokemonsQuery();
	const previousOptionsRef = useRef<IOptions>(optionsInitialState);

	useEffect(() => {
		localStorage.setItem("favoritePokemon", JSON.stringify(favorites));
		localStorage.setItem("options", JSON.stringify(options));
	}, [favorites, options]);

	useEffect(() => {
		if (
			JSON.stringify(options) !== JSON.stringify(previousOptionsRef.current)
		) {
			fetchTrigger(options);
			previousOptionsRef.current = options;
		}
	}, [options, fetchTrigger]);

	if (isLoading) return <Loading />;

	return (
		<main className="container relative font-madimi">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				{showFavorite && (
					<Favorites
						favorites={favorites}
						setActiveFav={setActiveFav}
						setFavorites={setFavorites}
						setShowFavorite={setShowFavorite}
						showFavorite={showFavorite}
					/>
				)}
				<FavoritesBtn
					setShowFavorite={setShowFavorite}
					showFavorite={showFavorite}
				/>
				<h1 className="mb-4 text-center text-4xl font-medium">
					Search your pokemon!
				</h1>
				<Search setOptions={setOptions} options={options} />
				<PokemonTypes setOptions={setOptions} options={options} />
				<Sort setOptions={setOptions} sortType={options.sortType} />
				{error ? (
					<ErrorFallback error={error as FetchBaseQueryError} />
				) : (
					<>
						{data && data.results.length > 0 ? (
							<>
								<PokemonsList
									data={data.results}
									isLoading={isLoading}
									activeFav={activeFav}
									setFavorites={setFavorites}
									favorites={favorites}
								/>
								<Pagination
									count={data.count}
									setOptions={setOptions}
									offset={options.offset}
								/>
							</>
						) : (
							<p className="text-center text-3xl">No pokemons</p>
						)}
					</>
				)}
			</ErrorBoundary>
			<ToTopBtn />
		</main>
	);
};
