import { BOBS_BURGERS_API } from '$env/static/private';

type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch(`${BOBS_BURGERS_API}/characters`);

	return {
		characters: response.json() as Promise<Character[]>
	};
};
