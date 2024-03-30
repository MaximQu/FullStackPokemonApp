import { IOptions } from "@/types/types";
import { ArrowIcon } from "@/ui/icons";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SortProps = {
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	sortType: { name: string; direction: number };
};

export const Sort: FC<SortProps> = ({ setOptions, sortType }) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const btnValue = (e.target as HTMLButtonElement).innerText;

		setOptions((prev) => ({
			...prev,
			offset: 0,
			sortType: {
				direction:
					prev.sortType.name === btnValue
						? prev.sortType.direction === 1
							? -1
							: 1
						: 1,
				name: btnValue,
			},
		}));
	};

	return (
		<div className="mb-4 flex flex-wrap items-center gap-2 sm:justify-start">
			<span className="text-xl sm:text-3xl">Sort by:</span>
			<div className="flex gap-1.5 text-primary xs:gap-2">
				{["name", "weight", "height"].map((item) => (
					<button
						key={item}
						type="button"
						onClick={handleClick}
						className={twMerge(
							"flex items-center gap-2 rounded-lg bg-blue p-2 text-white duration-150 hover:-translate-y-1 hover:bg-secondary",
							sortType.name === item && "bg-lightPeach text-primary",
						)}
					>
						{item}
						{sortType.name === item && (
							<ArrowIcon
								direction={sortType.direction === 1 ? "toTop" : "toBottom"}
								width={10}
								height={10}
							/>
						)}
					</button>
				))}
			</div>
		</div>
	);
};
