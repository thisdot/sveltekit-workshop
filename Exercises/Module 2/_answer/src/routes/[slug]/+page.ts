import type { PageLoad } from './$types';
import { getPostBySlug } from '$lib/posts';

export const load: PageLoad = async ({ params }) => {
	return getPostBySlug(params.slug);
};
