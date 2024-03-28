import { FC } from "react";

type AbilityProps = {
	data?: string[];
};

export const Ability: FC<AbilityProps> = ({ data }) => {
	return (
		<div>
			<span className="mb-2 block text-2xl">Abilities:</span>
			<ul className="flex flex-wrap gap-2 text-primary">
				{data?.map((item) => (
					<li
						key={item}
						className="w-fit rounded-md bg-primary p-1 px-2 capitalize text-white"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
