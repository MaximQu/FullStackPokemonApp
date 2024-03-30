import { FC } from "react";

type AbilityProps = {
	data?: string[];
  className?: string
};

export const Ability: FC<AbilityProps> = ({ data,className }) => {
	return (
		<div className={className}>
			<span className="xs:mb-2 block text-2xl">Abilities:</span>
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
