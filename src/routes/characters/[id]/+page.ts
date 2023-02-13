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
	const response = await fetch(`https://svelte.fun/api/bobs-burgers/characters/${params.id}`);

	return {
		character: response.json() as Promise<Character>
	};
};
