import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		sectionId: params.sectionId
	};
};
