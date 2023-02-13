import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { config } = await parent();

	const colors = await fetch('/api/colors').then((r) => r.json());

	return {
		colors,
		theme: config?.theme
	};
};
