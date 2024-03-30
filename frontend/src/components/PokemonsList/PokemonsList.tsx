import { IPokemon } from "@/types/types";
import { FC } from "react";
import { PokemonItem } from "..";

type PokemonsListProps = {
	data: IPokemon[];
	isLoading: boolean;
	favorites: Pick<IPokemon, "name" | "photo">[];
	setFavorites: React.Dispatch<
		React.SetStateAction<Pick<IPokemon, "name" | "photo">[]>
	>;
	activeFav: boolean;
};

export const PokemonsList: FC<PokemonsListProps> = ({
	data,
	setFavorites,
	favorites,
	activeFav,
	isLoading,
}) => {
	return (
		<ul className="mb-20 grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
			{data?.map((item: IPokemon) => (
				<li className="relative" key={item.name}>
					<PokemonItem
						data={item}
						isLoading={isLoading}
						activeFav={activeFav}
						setFavorites={setFavorites}
						favorites={favorites}
					/>
				</li>
			))}
		</ul>
	);
};
