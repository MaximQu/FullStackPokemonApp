import ContentLoader from "react-content-loader";
export const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={208}
			height={284}
			viewBox="0 0 208 284"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="16" cy="14" r="14" />
			<rect x="160" y="409" rx="23" ry="23" width="130" height="40" />
			<rect x="34" y="69" rx="5" ry="5" width="150" height="125" />
			<rect x="41" y="22" rx="5" ry="5" width="135" height="25" />
			<rect x="7" y="222" rx="5" ry="5" width="70" height="25" />
			<rect x="15" y="256" rx="5" ry="5" width="40" height="25" />
			<rect x="65" y="256" rx="5" ry="5" width="40" height="25" />
			<rect x="115" y="256" rx="5" ry="5" width="40" height="25" />
		</ContentLoader>
	);
};
