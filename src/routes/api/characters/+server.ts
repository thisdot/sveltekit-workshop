export const GET = async ({ fetch }) => {
	const response = await fetch('https://svelte.fun/api/bobs-burgers/characters');
	return new Response(response.body);
};
