import { IOptions } from "@/types/types";
import { PaginationBtn } from "@/ui";
import { ArrowIcon } from "@/ui/icons";
import React, { ElementRef, FC, useEffect, useRef } from "react";
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
		btnRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
	};

	useEffect(() => {
		btnRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
	}, []);

	const handlePrevPage = () => {
		setOptions((prev) => ({
			...prev,
			offset: Math.max(0, prev.offset - 20),
		}));
		btnRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
	};

	const handleNextPage = () => {
		if (count) {
			setOptions((prev) => ({
				...prev,
				offset: Math.min(count - (count % 20), prev.offset + 20),
			}));
		}
		btnRef.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
	};
	return (
		<div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-full max-w-[31.25rem] items-center justify-center gap-3 overflow-hidden rounded-xl bg-black/40 p-2 md:w-fit ">
			<PaginationBtn
				disabled={offset === 0 ? true : false}
				onClick={handlePrevPage}
			>
				<ArrowIcon direction="toLeft" width={20} height={20} />
			</PaginationBtn>
			<div
				className={twMerge(
					"flex w-full gap-2",
					paginationArr.length >= 3 && "overflow-x-auto pb-2",
				)}
			>
				{paginationArr.map((item, idx) => {
					return idx * 20 === offset ? (
						<button
							ref={btnRef}
							type="button"
							onClick={() => handleSelectPage(idx)}
							key={item}
							className={twMerge(
								"flex h-8 min-w-8 items-center justify-center rounded-full bg-white/25 text-center text-white duration-200 hover:bg-slate-400",
								idx * 20 === offset && "bg-secondary",
							)}
						>
							{item}
						</button>
					) : (
						<button
							type="button"
							onClick={() => handleSelectPage(idx)}
							key={item}
							className={twMerge(
								"flex h-8 min-w-8 items-center justify-center rounded-full bg-white/25 text-center text-white duration-200 hover:bg-slate-400",
								idx * 20 === offset && "bg-secondary",
							)}
						>
							{item}
						</button>
					);
				})}
			</div>
			<PaginationBtn
				disabled={offset + 20 > count ? true : false}
				onClick={handleNextPage}
			>
				<ArrowIcon direction="toRight" />
			</PaginationBtn>
		</div>
	);
};
