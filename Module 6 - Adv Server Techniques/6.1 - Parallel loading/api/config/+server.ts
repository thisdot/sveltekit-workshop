import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	await new Promise((res) => setTimeout(res, 2000));

	return json({
		theme: 'orange'
	});
};
