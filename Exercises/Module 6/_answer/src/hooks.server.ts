import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const { cookies } = event;
	event.locals.user = cookies.get('loggedInUser') ?? null;

	return await resolve(event);
}) satisfies Handle;
