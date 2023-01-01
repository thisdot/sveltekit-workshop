import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch('/bobs-burgers/characters.json');

	return {
		characters: response.json()
	};
};
