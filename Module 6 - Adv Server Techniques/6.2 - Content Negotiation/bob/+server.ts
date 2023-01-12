import fs from 'node:fs/promises';
import path from 'node:path';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({}) => {
	const fileContents = await fs.readFile(
		path.resolve(env.PWD, 'static', 'bobs-burgers', 'characters', '48.json'),
		'utf-8'
	);
	return new Response(fileContents, {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
