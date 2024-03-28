import { IOptions } from "@/redux/types";
import { ChangeEvent, FC, useState } from "react";

type SearchProps = {
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	options: IOptions;
};

export const Search: FC<SearchProps> = ({ setOptions, options }) => {
	const [searchValue, setSearchValue] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleFetch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setOptions((prev) => ({
				...prev,
				type: "",
				sortType: "name",
				offset: 0,
				name: searchValue,
			}));
		}
	};

	return (
		<>
			<form
				className="mx-auto mb-10 flex flex-col items-center justify-center gap-3"
				onSubmit={(e) => {
					e.preventDefault();
					setOptions((prev) => ({
						...prev,
						type: "",
						sortType: "name",
						offset: 0,
						name: searchValue,
					}));
				}}
			>
				<div className="flex gap-3">
					<input
						type="text"
						name="search_text"
						className="input"
						onChange={handleChange}
						onKeyDown={handleFetch}
						placeholder="Enter pokemon's name"
					/>
					<button className="btn" type="submit">
						<span>Go!</span>
					</button>
				</div>
				<span className="mt-2 block">
					Your last search value: {options.name}
				</span>
			</form>
		</>
	);
};
