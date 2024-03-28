import { IPokemon } from "@/redux/types";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type FavoritesProps = {
	favorites: Pick<IPokemon, "name" | "photo">[];
	setFavorites: React.Dispatch<
		React.SetStateAction<Pick<IPokemon, "name" | "photo">[]>
	>;
	setActiveFav: React.Dispatch<React.SetStateAction<boolean>>;
	setShowFavorite: React.Dispatch<React.SetStateAction<boolean>>;
	showFavorite: boolean;
};

export const Favorites: FC<FavoritesProps> = ({
	favorites,
	setFavorites,
	setActiveFav,
	setShowFavorite,
	showFavorite,
}) => {
	const listRef = useRef<ElementRef<"div">>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const removeItem = (name: string) => {
		setActiveFav(false);
		setFavorites((prev) => prev.filter((item) => item.name !== name));
	};

	const changeActiveState = (e: MouseEvent) => {
		if (listRef.current) {
			const { left, right, top, bottom } =
				listRef.current.getBoundingClientRect();
			if (
				(e.clientX > right ||
					e.clientX < left ||
					e.clientY < top ||
					e.clientY > bottom) &&
				showFavorite
			) {
				setShowFavorite(false);
			}
		}
	};

	useEffect(() => {
		if (isLoaded) {
			document.addEventListener("click", changeActiveState);
		} else {
			setIsLoaded(true);
		}
		return () => {
			document.removeEventListener("click", changeActiveState);
		};
	}, [isLoaded]);

	if (favorites.length === 0) {
		return (
			<div className="fixed right-4 top-24 z-10 flex max-w-[32rem] flex-wrap items-center justify-center gap-4 rounded-lg bg-slate-400 p-4">
				<button
					className=" block h-6 w-6 rounded-full border border-primary duration-150 hover:rotate-90"
					type="button"
					onClick={() => setShowFavorite(false)}
				>
					×
				</button>
				<p>No favorites pokemon 😒</p>
			</div>
		);
	}

	return (
		<div
			ref={listRef}
			className="showFav fixed top-0 z-[100] sm:inset-auto inset-0 flex h-full w-full sm:max-w-[30rem] flex-wrap justify-center gap-4 bg-white text-primary sm:right-4 sm:top-24 sm:h-auto sm:rounded-lg"
		>
			<button
				className="absolute left-2 top-2 z-10 block w-7 text-3xl leading-none duration-150 hover:rotate-90 hover:scale-105"
				type="button"
				onClick={() => setShowFavorite(false)}
			>
				×
			</button>
			<ul
				className={twMerge(
					"grid h-full w-full auto-rows-min grid-cols-2 gap-2 gap-x-3 rounded-lg p-4 xs:grid-cols-3 sm:max-h-[31.25rem]",
					favorites.length > 6 && "overflow-y-scroll",
				)}
			>
				{favorites.map((item) => {
					return (
						<li
							className="relative flex h-full max-h-48 flex-col items-center pt-2.5"
							key={item.name}
						>
							<Link
								className="flex h-full flex-col justify-end"
								to={`pokemon/${item.name}`}
							>
								<span className="mb-2 block text-center">{item.name}</span>
								<div className="h-30 w-30 mx-auto duration-150 hover:scale-105">
									<img
										className="w-32 rounded-lg"
										src={
											item.photo ? item.photo : "https://place-hold.it/160x160"
										}
										alt={item.name}
									/>
								</div>
							</Link>
							<button
								type="button"
								className="absolute -right-2 -top-1 block h-6 w-6 rounded-full border border-red-400 text-xl leading-4 text-red-400 duration-150 hover:rotate-90 hover:scale-105"
								onClick={() => removeItem(item.name)}
							>
								×
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
