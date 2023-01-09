import { client } from './contentful-client';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';

export interface BlogPost {
	title: string;
	date: string;
	description: string;
	content: Document;
	slug: string;
	theme: string;
}

export async function getPostSummaries() {
	const entries = await client.getEntries<BlogPost>({
		content_type: 'blogPost',
		select: ['fields.title', 'fields.slug', 'fields.description'],
		order: '-fields.date'
	});

	return entries.items.map((item) => item.fields);
}

export async function getPostBySlug(slug: string) {
	const entries = await client.getEntries<BlogPost>({
		content_type: 'blogPost',
		'fields.slug[in]': slug
	});
	const post = entries.items[0].fields;
	return { ...post, content: documentToHtmlString(post.content) };
}
