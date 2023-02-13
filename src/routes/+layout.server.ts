import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const userId = cookies.get('user');
	if (userId) {
		return {
			user: { id: userId }
		};
	}
};
