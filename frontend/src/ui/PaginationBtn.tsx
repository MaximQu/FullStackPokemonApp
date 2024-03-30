import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type PaginationIconProps = {
	children: ReactNode;
	disabled: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const PaginationBtn: FC<PaginationIconProps> = ({
	children,
	disabled,
	...props
}) => {
	return (
		<button
			{...props}
			type="button"
			className="min-h-10 min-w-10 rounded-full bg-lightPeach p-2 duration-200 hover:bg-secondary flex justify-center items-center active:bg-secondary disabled:cursor-default disabled:bg-primary"
			disabled={disabled}
		>
			{children}
		</button>
	);
};
