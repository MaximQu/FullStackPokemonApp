import { ArrowIcon } from "@/ui/icons";

export const ToTopBtn = () => {
	return (
		<button
			className="fixed md:bottom-5 bottom-24 right-5 rounded-md bg-blue p-2 duration-150 hover:-translate-y-1 z-50 active:bg-secondary"
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
      <ArrowIcon direction="toTop"/>
		</button>
	);
};
