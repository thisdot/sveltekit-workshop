import { error } from '@sveltejs/kit';

type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
	hairColor?: string;
	gender?: string;
	firstEpisode?: string;
	voicedBy?: string;
};

export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/characters/${params.id}`);

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message);
	}

	return {
		character: response.json() as Promise<Character>
	};
};
