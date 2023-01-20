import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	let user = cookies.get('user');
	if (!user) {
		throw error(401, 'Unauthorized');
	}
	return json('SvelteKit is the Best!');
};
