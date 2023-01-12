import type { PageLoad } from './$types';

export const load: PageLoad = async ({  fetch }) => {
	return {
		colors: fetch('/api/colors').then((r) => r.json());
	};
};
