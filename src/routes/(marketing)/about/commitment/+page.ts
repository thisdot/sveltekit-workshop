import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	throw error(404, 'There is a lack of commitment here');
}) satisfies PageLoad;
