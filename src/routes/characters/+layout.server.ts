type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch('/api/characters');

	return {
		characters: response.json() as Promise<Character[]>
	};
};
