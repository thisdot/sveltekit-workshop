import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params, url, setHeaders }) => {
	const characterId = params.id;
	const db = import.meta.glob('./data/*.json');
	const dataPath = `./data/${characterId}.json`;

	setHeaders({
		'Access-Control-Allow-Origin': '*'
	});

	if (!(dataPath in db)) {
		throw error(404, 'Character not found');
	}

	const charData = ((await db[dataPath]()) as unknown as { default: { image: string } }).default;
	const character = { ...charData, image: `//${url.host}${charData.image}` };

	return json(character);
}) satisfies RequestHandler;
