import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/server/posts';

export const load: PageServerLoad = async () => {
	return {
		posts: getPostSummaries()
	};
};
