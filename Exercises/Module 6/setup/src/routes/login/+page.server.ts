import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const data = await parent();
	if (data.loggedInUser) {
		return redirect(303, '/profile');
	}
};

const userFromCredentials = async (username: string, password: string) => {
	if (username.toLowerCase() === 'admin' && password === 'password') {
		return 'Adam';
	}
	return null;
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || typeof username !== 'string') {
			return fail(400, {
				username: { reason: 'Username is required' } // don't send back password
			});
		}

		if (!password || typeof password !== 'string') {
			return fail(400, {
				username: { value: username },
				password: { reason: 'Password is required' }
			});
		}

		const user = await userFromCredentials(username, password);

		if (!user) {
			return fail(404, {
				username: { value: username },
				password: { reason: 'That username/password combination is not found' }
			});
		}

		// Success!
		cookies.set('loggedInUser', user, { path: '/' });
		// send to homepage
		throw redirect(303, '/');
	}
};
