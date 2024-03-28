export const ToTopBtn = () => {
	return (
		<button
			className="fixed bottom-5 right-5 rounded-md bg-secondary p-2 duration-150 hover:-translate-y-1 z-50"
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<svg
				viewBox="0 0 96 96"
				width={25}
				height={25}
        fill='#283959'
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z" />
			</svg>
		</button>
	);
};
