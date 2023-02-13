import type { PageServerLoad } from './$types';

type Movie = {
	id: string;
	name: string;
	release: number;
	rating: number;
	comment?: string;
};

const movies: Movie[] = [
	{
		id: 'df5105ff-9d87-4bd9-be62-4743c0a243b9',
		name: 'Everything Everywhere All at Once',
		release: 2022,
		rating: 5,
		comment: `Unlike anything I have ever seen before. I loved it!`
	},
	{
		id: '446e2ae1-5cc4-4b84-9ea0-1e77428e46f6',
		name: 'The Shawshank Redemption',
		release: 1994,
		rating: 5,
		comment: 'Amazing, if a little over-hyped'
	}
];

export const load: PageServerLoad = () => {
	return {
		movies
	};
};
