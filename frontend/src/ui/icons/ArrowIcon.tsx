import { FC } from "react";
import { IconType } from "./types";

type ArrowIconProps = {
	direction?: "toTop" | "toRight" | "toBottom" | "toLeft";
} & IconType;

const ARROW_DIRECTIONS: any = {
  toTop: {
    cords: "M1 7 L7 1 L13 7",
    viewPort: "0 0 14 8"
  },
  toBottom: {
    cords: "M1 1 L7 7 L13 1",
    viewPort: "0 0 14 8"
  },
  toRight: {
    cords: "M1 1 L7 7 L1 13",
    viewPort: "0 0 8 14"
  },
  toLeft: {
    cords: "M7 1 L1 7 L7 13",
    viewPort: "0 0 8 14"
  }
};

export const ArrowIcon: FC<ArrowIconProps> = ({
	width = 20,
	height = 20,
	direction = "toRight",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={ARROW_DIRECTIONS[direction].viewPort}
			fill="none"
			{...props}
		>
			<path
				d={ARROW_DIRECTIONS[direction].cords}
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
