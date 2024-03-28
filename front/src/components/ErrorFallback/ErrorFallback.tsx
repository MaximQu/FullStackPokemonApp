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
			<p className="text-red-600">Something went wrong: {error.status}</p>
      <img src="/img/error-pikachu.gif" alt="Sad pikachu" />
		</div>
	);
};
