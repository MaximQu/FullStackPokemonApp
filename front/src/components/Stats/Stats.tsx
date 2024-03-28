import { FC } from "react";

type StatsProps = {
	data?: { name: string; value: string }[];
	weight?: number;
	height?: number;
};
export const Stats: FC<StatsProps> = ({ data, weight, height }) => {
	return (
		<table>
			<thead>
				<tr>
					<th className="text-left text-2xl font-normal">Stats:</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((item) => (
					<tr className="flex justify-between gap-6" key={item.name}>
						<td>{item.name.toUpperCase()}:</td>
						<td>{item.value}</td>
					</tr>
				))}
				<tr className="flex justify-between gap-6">
					<td>{`weight`.toUpperCase()}:</td>
					<td>{weight}</td>
				</tr>
				<tr className="flex justify-between gap-6">
					<td>{`height`.toUpperCase()}:</td>
					<td>{height}</td>
				</tr>
			</tbody>
		</table>
	);
};
