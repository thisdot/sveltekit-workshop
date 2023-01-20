import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`/bob`);

	return {
		character: response.json()
	};
};
