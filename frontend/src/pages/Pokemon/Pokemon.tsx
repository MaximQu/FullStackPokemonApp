import {
	Ability,
	ErrorFallback,
	Loading,
	Moves,
	Photo,
	Stats,
	Tags,
} from "@/components";
import { useGetPokemonInfoQuery } from "@/redux/api/api";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useParams } from "react-router-dom";

export const Pokemon = () => {
	const { name } = useParams();
	const { data, isLoading } = useGetPokemonInfoQuery(name || "");
	if (isLoading) return <Loading />;

	return (
		<main className="container font-madimi">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div className="mb-10 flex flex-col items-center rounded-lg bg-lightPeach p-4 text-primary">
					<h1 className="mb-4 text-center text-3xl font-medium capitalize">
						{name}
					</h1>
					<div className="flex flex-wrap justify-center md:gap-8 sm:gap-4 text-sm md:text-lg ">
						<Photo data={data?.photo} name={name} />
						<div className="flex flex-wrap gap-5 sm:mb-4 md:mb-8">
							<Stats
								data={data?.stats}
								weight={data?.weight}
								height={data?.height}
							/>
							<div className="">
								<Tags data={data?.types} />
								<Ability data={data?.abilities} />
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
