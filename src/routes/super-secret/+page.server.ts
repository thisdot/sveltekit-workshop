import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	// normally you would have to manually get the cookie/authorization
	// header from the request and pass them along with this response.
	// ALSO you would need a full url as the arg here
	const response = await fetch('/api/secret');

	if (!response.ok) {
		const reason = await response.json();
		throw error(response.status, reason.message);
	}

	const secret = await response.json();

	return {
		secret
	};
};
