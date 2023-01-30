import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const post = await getPostBySlug(params.slug);
	if (!post) throw error(404, 'Post not found');

	if (!post.published && !locals.user) throw error(404, 'Post not found');
	return post;
};
