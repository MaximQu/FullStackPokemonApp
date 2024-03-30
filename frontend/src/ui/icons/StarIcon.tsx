import { FC } from "react";
import { IconType } from "./types";

type StartIconType = {
	width?: number;
	height?: number;
} & IconType;

export const StarIcon: FC<StartIconType> = ({ width = 25, height = 25, ...props }) => {
	return (
		<svg
			viewBox="0 0 512 512"
			width={width}
			height={height}
      {...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M370.24,425.59a14.89,14.89,0,0,1-7-1.72L257,368,150.74,423.87A15,15,0,0,1,129,408.06l20.3-118.32-86-83.8a15,15,0,0,1,8.31-25.59l118.81-17.26L243.55,55.43a15,15,0,0,1,26.9,0l53.13,107.66,118.8,17.26a15,15,0,0,1,8.32,25.59l-86,83.8L385,408.06a15,15,0,0,1-14.78,17.53ZM106,205.67l69.85,68.09A15,15,0,0,1,180.17,287l-16.49,96.14L250,337.78a15,15,0,0,1,14,0l86.34,45.39L333.83,287a15,15,0,0,1,4.31-13.27L408,205.67l-96.53-14a15,15,0,0,1-11.29-8.2L257,96l-43.17,87.47a15,15,0,0,1-11.3,8.2Z" />
		</svg>
	);
};
