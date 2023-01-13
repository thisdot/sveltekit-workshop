import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await fetch(`/bobs-burgers/characters/${params.id}.json`);
	if (!response.ok) {
		throw error(response.status, response.statusText);
	}
	const character = await response.json();

	return {
		character
	};
};
