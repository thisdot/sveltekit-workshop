import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	let user = cookies.get('user');
	if (!user) {
		cookies.set('user', crypto.randomUUID(), { path: '/' });
	} else {
		cookies.delete('user', { path: '/' });
	}
	return json({
		user
	});
};
