import { IPokemon } from "@/types/types";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { ErrorFallback, Loading, Photo, Stats, Tags } from "..";
import { StarIcon } from "@/ui/icons";

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
					<div className="mx-auto">
						<Photo data={data.photo} />
					</div>
					<Tags data={data.types} />
					<Stats weight={data.weight} height={data.height} />
				</div>
				<button
					type="button"
					className="absolute right-0 top-0 rounded-lg duration-150"
					onClick={() => handleSetFavorites(data.name)}
				>
					<StarIcon
						width={40}
						height={40}
						className="duration-150 hover:fill-blue active:scale-110"
						fill={`${isActiveFav ? "#F8719D" : "#283959"}`}
					/>
				</button>
			</>
		</ErrorBoundary>
	);
};
