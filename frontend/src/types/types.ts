export interface IPokemon {
	_id?: number;
	photo: string;
	name: string;
	abilities: string[];
	stats: {
		name: string;
		value: string;
	}[];
	height: number;
	weight: number;
	moves: string[];
	types: string[];
}

// export enum SortName {
// 	"name",
// 	"weight",
// 	"height",
// }

export interface IOptions {
	type: string;
	name: string;
	sortType: {
		name: string;
		direction: number;
	};
	offset: number;
}

export interface IPokemonAll {
	count: number;
	results: IPokemon[];
}

export interface IPokemonAllTypes {
	types: string[];
}
