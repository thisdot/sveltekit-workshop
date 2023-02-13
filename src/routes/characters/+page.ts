type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch('https://svelte.fun/api/bobs-burgers/characters');

	return {
		characters: response.json() as Promise<Character[]>
	};
};
