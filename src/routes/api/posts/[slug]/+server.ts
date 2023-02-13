import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
};

export const GET = (async ({ params, request, setHeaders }) => {
	setHeaders({
		'Access-Control-Allow-Origin': '*'
	});

	if (request.headers.get('Authorization') !== 'svelte_is_fun') {
		throw error(403, 'Forbidden');
	}

	const slug = params.slug;
	const postsData = (await import('../db.json')).default as Post[];
	const post = postsData.find((p) => p.slug === slug);

	if (!post) {
		throw error(404, 'Post Not found');
	}

	return json(post);
}) satisfies RequestHandler;
