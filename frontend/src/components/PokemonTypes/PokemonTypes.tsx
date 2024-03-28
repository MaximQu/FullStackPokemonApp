import { useGetPokemonTypesQuery } from "@/redux/api/api";
import { IOptions } from "@/redux/types";
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
		<div className="mb-6 flex flex-wrap justify-center gap-3">
			<span className="text-3xl">Types:</span>
			{data?.types.map((item) => (
				<button
					type="button"
					key={item}
					onClick={handleClick}
					className={twMerge(
						"w-20 min-w-12 rounded-lg bg-blue p-2 text-white duration-150 hover:-translate-y-1 hover:bg-secondary sm:w-fit",
						options.type === item && " bg-lightPeach text-primary",
					)}
				>
					{item}
				</button>
			))}
			<button
				className="rounded-lg bg-red-400 p-2 duration-150 hover:bg-red-500"
				onClick={() => setOptions((prev) => ({ ...prev, type: "" }))}
				type="button"
			>
				Reset type
			</button>
		</div>
	);
};
