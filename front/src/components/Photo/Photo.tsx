import { FC } from "react";

type PhotoProps = {
	data?: string;
	name?: string;
};

export const Photo: FC<PhotoProps> = ({ data, name }) => {
	return (
		<img
			className="max-w-60 w-full rounded-lg object-contain"
			src={data ? data : "https://place-hold.it/160x160"}
			alt={name}
		/>
	);
};
