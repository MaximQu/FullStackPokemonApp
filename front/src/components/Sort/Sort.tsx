import { IOptions } from "@/redux/types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SortProps = {
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	sortType: string;
};

export const Sort: FC<SortProps> = ({ setOptions, sortType }) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const btnValue = (e.target as HTMLButtonElement).innerText;
		setOptions((prev) => ({
			...prev,
			offset: 0,
			sortType: btnValue,
		}));
	};
	return (
		<div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
			<span className="text-3xl">Sort by:</span>
			<div className="flex gap-3 text-primary">
				{["name", "weight", "height"].map((item) => (
					<button
						key={item}
						type="button"
						onClick={handleClick}
						className={twMerge(
							"w-20 rounded-lg bg-blue p-2 text-white duration-150 hover:-translate-y-1 hover:bg-secondary",
							sortType === item && " bg-lightPeach text-primary",
						)}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};
