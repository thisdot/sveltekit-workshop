import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/posts';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		posts: getPostSummaries({ includeDrafts: !!locals.user })
	};
};
