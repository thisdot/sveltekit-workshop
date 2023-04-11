export const GET = async ({ fetch, params }) => {
	const response = await fetch(`https://svelte.fun/api/bobs-burgers/characters/${params.id}`);
	return new Response(response.body);
};
