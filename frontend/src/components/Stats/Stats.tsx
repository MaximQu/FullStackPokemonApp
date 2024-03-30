import { FC } from "react";

type StatsProps = {
	data?: { name: string; value: string }[];
	weight?: number;
	height?: number;
  className?: string
};
export const Stats: FC<StatsProps> = ({ data, weight, height,className }) => {
	return (
		<table className={className}>
			<thead>
				<tr>
					<th className="text-left text-2xl font-normal">Stats:</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((item) => (
					<tr className="flex justify-between gap-6" key={item.name}>
						<td>{item.name.toUpperCase()}:</td>
						<td className="text-lg leading-4">{item.value}</td>
					</tr>
				))}
				<tr className="flex justify-between gap-6">
					<td>{`weight`.toUpperCase()}:</td>
					<td className="text-lg leading-4">{weight}</td>
				</tr>
				<tr className="flex justify-between gap-6">
					<td>{`height`.toUpperCase()}:</td>
					<td className="text-lg leading-4">{height}</td>
				</tr>
			</tbody>
		</table>
	);
};
