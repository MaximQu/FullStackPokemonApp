import { FC } from "react";

type MovesProps = { data?: string[] };

export const Moves: FC<MovesProps> = ({ data }) => {
	return (
		<div>
			<h2 className="mb-2 text-2xl font-normal">Moves:</h2>
			<div className="flex flex-wrap gap-2">
				{data?.length === 0 ? (
					<p>No moves.</p>
				) : (
					<p className="text-sm md:text-lg">
						{data?.map((item) => item).join(", ")}.
					</p>
				)}
			</div>
		</div>
	);
};
