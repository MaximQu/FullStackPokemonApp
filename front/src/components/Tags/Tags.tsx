import { FC } from "react";

type TagsProps = { data?: string[] };

export const Tags: FC<TagsProps> = ({ data }) => {
	return (
		<div className="mb-3">
			<h3 className="mb-2 text-2xl font-normal">Types:</h3>
			<ul className="flex flex-wrap gap-2">
				{data?.map((item: string, idx: number) => (
					<li
						key={idx}
						className="w-fit rounded-md bg-primary p-1 px-2 capitalize text-white"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
