import { useGetPokemonInfoQuery } from "@/api/pokemonApi";
import {
	Ability,
	ErrorFallback,
	Loading,
	Moves,
	Photo,
	Stats,
	Tags,
} from "@/components";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useParams } from "react-router-dom";

export const Pokemon = () => {
	const { name } = useParams();
	const { data, isLoading } = useGetPokemonInfoQuery(name || "");

  useEffect(() => {
		document.body.style.overflow = "auto";
	}, []);

	if (isLoading) return <Loading />;

	return (
		<main className="container font-madimi">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div className="xs:mb-10 mb-6 flex flex-col items-center rounded-lg bg-lightPeach p-4 text-primary">
					<h1 className="mb-4 text-center text-3xl font-medium capitalize">
						{name}
					</h1>
					<div className="flex flex-wrap justify-center text-sm sm:gap-4 md:gap-8 md:text-lg ">
						<Photo data={data?.photo} name={name} />
						<div className="flex flex-wrap gap-5 sm:mb-4 md:mb-8">
							<Stats
              className="mx-auto max-w-full w-full"
								data={data?.stats}
								weight={data?.weight}
								height={data?.height}
							/>
							<div>
								<Tags data={data?.types} className="mb-3 xs:block flex items-center gap-2" />
								<Ability data={data?.abilities} className="xs:block flex items-center gap-2" />
							</div>
						</div>
					</div>
					<Moves data={data?.moves} />
				</div>
			</ErrorBoundary>
			<Link to=".." className="btn mx-auto block w-32 text-center">
				<span>Back</span>
			</Link>
		</main>
	);
};
