import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return { lang: params.lang ?? 'en' };
};
