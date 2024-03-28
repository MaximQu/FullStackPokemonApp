import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, Loading, Photo, Stats, Tags } from "..";
import { Link } from "react-router-dom";
import { IPokemon } from "@/redux/types";

type PokemonItemProps = {
	data: IPokemon;
	favorites: Pick<IPokemon, "name" | "photo">[];
	setFavorites: React.Dispatch<
		React.SetStateAction<Pick<IPokemon, "name" | "photo">[]>
	>;
	activeFav: boolean;
	isLoading: boolean;
};

export const PokemonItem: FC<PokemonItemProps> = ({
	data,
	setFavorites,
	favorites,
	activeFav,
	isLoading,
}) => {
	const isActiveFav = favorites.some((fav) => data.name === fav.name);

	const handleSetFavorites = (name: string) => {
		const isFavorite = favorites.some((item) => item.name === name);

		if (isFavorite) {
			setFavorites((prev) => prev.filter((item) => item.name !== name));
		} else {
			setFavorites((prev) => [
				...prev,
				{
					name: data.name,
					photo: data.photo,
					favorite: activeFav,
				},
			]);
		}
	};
	if (isLoading) return <Loading />;

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<>
				<Link
					className="peer absolute h-full w-full"
					to={`pokemon/${data.name}`}
				></Link>
				<div className="flex h-full flex-col justify-between rounded-lg bg-lightPeach px-4 pb-3 pt-6 text-primary duration-150 peer-hover:bg-secondary">
					<h2 className="mb-4 p-1 text-center text-2xl font-medium capitalize">
						{data.name}
					</h2>
					<div className="mx-auto mb-3">
						<Photo data={data.photo} />
					</div>
					<Tags data={data.types} />
					<Stats weight={data.weight} height={data.height} />
				</div>
				<button
					type="button"
					className="hover: absolute right-0 top-0 rounded-lg duration-150"
					onClick={() => handleSetFavorites(data.name)}
				>
					<svg
						viewBox="0 0 512 512"
						width={40}
						height={40}
						className="duration-150 hover:fill-blue active:scale-110"
						fill={`${isActiveFav ? "#F8719D" : "#283959"}`}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M370.24,425.59a14.89,14.89,0,0,1-7-1.72L257,368,150.74,423.87A15,15,0,0,1,129,408.06l20.3-118.32-86-83.8a15,15,0,0,1,8.31-25.59l118.81-17.26L243.55,55.43a15,15,0,0,1,26.9,0l53.13,107.66,118.8,17.26a15,15,0,0,1,8.32,25.59l-86,83.8L385,408.06a15,15,0,0,1-14.78,17.53ZM106,205.67l69.85,68.09A15,15,0,0,1,180.17,287l-16.49,96.14L250,337.78a15,15,0,0,1,14,0l86.34,45.39L333.83,287a15,15,0,0,1,4.31-13.27L408,205.67l-96.53-14a15,15,0,0,1-11.29-8.2L257,96l-43.17,87.47a15,15,0,0,1-11.3,8.2Z" />
					</svg>
				</button>
			</>
		</ErrorBoundary>
	);
};
