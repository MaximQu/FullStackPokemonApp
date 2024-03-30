import { useGetPokemonTypesQuery } from "@/api/pokemonApi";
import { IOptions } from "@/types/types";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type PokemonTypesTypes = {
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	options: IOptions;
};

export const PokemonTypes: FC<PokemonTypesTypes> = ({
	setOptions,
	options,
}) => {
	const { data } = useGetPokemonTypesQuery();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const btnValue = (e.target as HTMLButtonElement).innerText;
		setOptions((prev) => ({
			...prev,
			offset: 0,
			type: btnValue,
		}));
	};

	return (
		<div className="mb-4 flex flex-wrap gap-2">
			<span className="text-xl sm:text-3xl">Types:</span>
			<div className="flex gap-2 flex-wrap">
				<div className="flex max-w-[54.5rem] flex-wrap xs:gap-2 gap-1.5">
					{data?.types.map((item) => (
						<button
							type="button"
							key={item}
							onClick={handleClick}
							className={twMerge(
								"w-20 min-w-20 rounded-lg bg-blue px-1 py-2 text-white duration-150 hover:-translate-y-1 hover:bg-secondary",
								options.type === item && "bg-lightPeach text-primary",
							)}
						>
							{item}
						</button>
					))}
				</div>
				<button
					className="rounded-lg h-fit bg-red-400 p-2 duration-150 hover:bg-red-500 active:bg-red-400"
					onClick={() => setOptions((prev) => ({ ...prev, type: "" }))}
					type="button"
				>
					Reset type
				</button>
			</div>
		</div>
	);
};
