import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ setHeaders, url }) => {
	const characterData = (await import('./characters.json')).default;
	const characters = characterData.map((c) => ({
		...c,
		image: `//${url.host}${c.image}`
	}));

	setHeaders({
		'Access-Control-Allow-Origin': '*'
	});
	return json(characters);
}) satisfies RequestHandler;
