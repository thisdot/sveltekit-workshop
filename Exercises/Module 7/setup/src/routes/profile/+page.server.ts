import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const data = await parent();
	if (!data.loggedInUser) {
		throw redirect(303, '/login');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		if (formData.has('logout')) {
			cookies.delete('loggedInUser');
			throw redirect(303, '/');
		}
	}
};
