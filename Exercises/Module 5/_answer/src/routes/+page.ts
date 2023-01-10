import type { PageLoad } from './$types';
import { getPostSummaries } from '$lib/posts';

export const load: PageLoad = async () => {
	return {
		posts: getPostSummaries()
	};
};
