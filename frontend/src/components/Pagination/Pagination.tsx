import { IOptions } from "@/redux/types";
import React, { ElementRef, FC, useRef } from "react";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
	count: number;
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	offset: number;
};

export const Pagination: FC<PaginationProps> = ({
	count,
	setOptions,
	offset,
}) => {
	const paginationArr = Array.from(
		{ length: Math.ceil(count! / 20) },
		(_, index) => index + 1,
	);
	const btnRef = useRef<ElementRef<"button">>(null);

	const handleSelectPage = (idx: number) => {
		setOptions((prev) => ({
			...prev,
			offset: idx * 20,
		}));
	};

	const handlePrevPage = () => {
		setOptions((prev) => ({
			...prev,
			offset: Math.max(0, prev.offset - 20),
		}));
	};

	const handleNextPage = () => {
		if (count) {
			setOptions((prev) => ({
				...prev,
				offset: Math.min(count - (count % 20), prev.offset + 20),
			}));
		}
	};
	return (
		<div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit max-w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-black/40 p-2 backdrop-blur-lg">
			<button
				type="button"
				onClick={handlePrevPage}
				className="rounded-full bg-lightPeach p-2 duration-200 hover:bg-secondary disabled:cursor-default disabled:bg-primary"
				disabled={offset === 0 ? true : false}
			>
				<svg
					viewBox="0 0 512 512"
					width={25}
					height={25}
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z" />
				</svg>
			</button>
			<div
				className={twMerge(
					"flex w-full gap-2",
					paginationArr.length >= 3 && "overflow-x-auto pb-2",
				)}
			>
				{paginationArr.map((item, idx) => (
					<button
						ref={btnRef}
						type="button"
						onClick={() => handleSelectPage(idx)}
						key={item}
						className={twMerge(
							"flex h-8 min-w-8  items-center justify-center rounded-full bg-white/25 text-center text-white duration-200 hover:bg-slate-400",
							idx * 20 === offset && "bg-secondary",
						)}
					>
						{item}
					</button>
				))}
			</div>
			<button
				type="button"
				onClick={handleNextPage}
				className="rounded-full bg-lightPeach p-2 duration-200 hover:bg-secondary disabled:cursor-default disabled:bg-primary"
				disabled={offset + 20 > count ? true : false}
			>
				<svg
					viewBox="0 0 512 512"
					width={25}
					height={25}
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z" />
				</svg>
			</button>
		</div>
	);
};
