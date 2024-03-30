import { FC } from "react";
import {
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

type ErrorFallbackProps = {
	error: FetchBaseQueryError ;
};

export const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => {

	return (
		<div className="text-center mx-auto w-fit">
			<p className="text-red-600 mb-4 text-xl">Something went wrong: {error.status}</p>
      <img className="mb-6" src="/img/error-pikachu.gif" alt="Sad pikachu" />
		</div>
	);
};
