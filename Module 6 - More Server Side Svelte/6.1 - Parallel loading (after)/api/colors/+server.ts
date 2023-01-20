import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	await new Promise((res) => setTimeout(res, 2000));
	return json([
		{
			id: 'red',
			hex: '#ff0000'
		},
		{
			id: 'yellow',
			hex: '#ffff00'
		},
		{
			id: 'blue',
			hex: '#0000ff'
		},
		{
			id: 'orange',
			hex: '#ffa500'
		},
		{
			id: 'Green',
			hex: '#00ff00'
		},
		{
			id: 'Violet',
			hex: '#8f00ff'
		}
	]);
};
