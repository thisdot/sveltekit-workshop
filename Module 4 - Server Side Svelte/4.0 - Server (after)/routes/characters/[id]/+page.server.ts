import { error } from '@sveltejs/kit';
import { BOBS_BURGERS_API } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, request, locals, cookies }) => {
	const url = new URL(`/characters/${params.id}`, BOBS_BURGERS_API);
	const response = await fetch(url);
	if (!response.ok) {
		throw error(response.status, response.statusText);
	}
	const character = await response.json();

	return {
		character
	};
};
