import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/bobs-burgers/characters/${params.id}.json`);

	return {
		character: response.json()
	};
};
