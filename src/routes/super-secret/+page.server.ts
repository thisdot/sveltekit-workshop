import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ /* fetch, */ request }) => {
	const response = await global.fetch(new URL('/api/secret', 'http://localhost:5173'), {
		headers: {
			cookie: request.headers.get('cookie') ?? '',
			authorization: request.headers.get('authorization') ?? ''
		}
	});

	if (!response.ok) {
		const reason = await response.json();
		throw error(response.status, reason.message);
	}

	const secret = await response.json();

	return {
		secret
	};
};
