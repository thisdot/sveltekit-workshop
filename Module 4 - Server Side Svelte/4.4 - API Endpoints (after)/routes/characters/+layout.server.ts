// import { BOBS_BURGERS_API } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	// const url = new URL('/characters', BOBS_BURGERS_API);
	// const url = new URL('/api/characters');
	// url.searchParams.append('limit', '10');

	const response = await fetch('../../api/characters');

	return {
		characters: response.json()
	};
};
