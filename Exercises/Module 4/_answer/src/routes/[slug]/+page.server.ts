import type { PageServerLoad } from './$types';
import { getPostBySlug } from '$lib/server/posts';

export const load: PageServerLoad = async ({ params }) => {
	return getPostBySlug(params.slug);
};
