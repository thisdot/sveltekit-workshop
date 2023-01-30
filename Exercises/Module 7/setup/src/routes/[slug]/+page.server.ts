import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPostBySlug } from '$lib/posts';

export const load: PageServerLoad = async ({ params, locals }) => {
	const post = await getPostBySlug(params.slug);
	if (!post) throw error(404, 'Post not found');

	if (!post.published && !locals.user) throw error(404, 'Post not found');

	return getPostBySlug(params.slug);
};
