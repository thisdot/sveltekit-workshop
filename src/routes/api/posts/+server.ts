import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
};

export const GET = (async ({ setHeaders, request }) => {
	const postData = (await import('./db.json')).default as Post[];
	setHeaders({
		'Access-Control-Allow-Origin': '*'
	});

	if (request.headers.get('Authorization') !== 'svelte_is_fun') {
		throw error(403, 'Forbidden');
	}

	return json(postData);
}) satisfies RequestHandler;
