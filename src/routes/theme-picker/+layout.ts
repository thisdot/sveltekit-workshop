import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const config = await fetch('/api/config').then((r) => r.json());

	return {
		config
	};
};
