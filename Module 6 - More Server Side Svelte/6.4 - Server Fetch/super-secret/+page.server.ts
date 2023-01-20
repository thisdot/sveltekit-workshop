import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, request }) => {
	// normally you would have to manually get the cookie/authorization
	// header from the request and pass them along with this response.
	// ALSO you would need a full url as the arg here

	console.log(request.headers.get('cookie'), request.headers.get('authorization'));
	try {
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
	} catch (err) {
		console.log('ADAM', err);
	}
};
