import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_PREVIEW_TOKEN,
	CONTENTFUL_DELIVERY_TOKEN
} from '$env/static/private';
import { dev } from '$app/environment';

export const client = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: dev ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN,
	host: dev ? 'preview.contentful.com' : 'cdn.contentful.com'
});
