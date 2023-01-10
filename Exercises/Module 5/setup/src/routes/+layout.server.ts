import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const loggedInUser = cookies.get('loggedInUser') ?? null;

	return {
		loggedInUser
	};
};
