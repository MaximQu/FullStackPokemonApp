import { StarIcon } from "@/ui/icons";
import React, { FC, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type FavoritesBtnProps = {
	setShowFavorite: React.Dispatch<SetStateAction<boolean>>;
	showFavorite: boolean;
};

export const FavoritesBtn: FC<FavoritesBtnProps> = ({
	setShowFavorite,
	showFavorite,
}) => {
	useEffect(() => {
		if (showFavorite && window.innerWidth <= 575) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showFavorite]);

	return (
		<button
			type="button"
			className={twMerge(
				"fixed right-0 top-4 z-10 flex w-full max-w-12 items-center justify-center gap-1 rounded-l-3xl border bg-blue p-2 duration-150 border-transparent hover:bg-purple sm:max-w-36",
				showFavorite &&
					"max-w-12 justify-start border-primary bg-lightPeach duration-150  sm:max-w-28",
			)}
			onClick={() => setShowFavorite((prev) => !prev)}
		>
			<StarIcon fill="#ffffff" />
			<span className="hidden sm:block">Favorites</span>
		</button>
	);
};
