export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	theme?: 'A' | 'B' | 'C' | 'D';
	published: boolean;
};

const fetchFromDB = async () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return ((await import.meta.glob('./*.json')['./db.json']()) as any).default as Post[];
};

export async function getPostSummaries({ includeDrafts = false } = {}) {
	let posts = await fetchFromDB();
	if (!includeDrafts) posts = posts.filter((p) => p.published);
	const postSummaries = posts.map((p) =>
		includeDrafts
			? {
					slug: p.slug,
					title: p.title,
					excerpt: p.excerpt,
					published: p.published
			  }
			: {
					slug: p.slug,
					title: p.title,
					excerpt: p.excerpt
			  }
	);
	return postSummaries;
}

export async function getPostBySlug(slug: string) {
	const posts = await fetchFromDB();
	return posts.find((p) => p.slug === slug);
}
