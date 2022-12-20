export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
};

const fetchFromDB = async () => {
	return ((await import.meta.glob('./*.json')['./db.json']()) as any).default as Post[];
};

export async function getPostSummaries() {
	const posts = await fetchFromDB();
	const postSummaries = posts.map((p) => ({
		slug: p.slug,
		title: p.title,
		excerpt: p.excerpt
	}));
	return postSummaries;
}

export async function getPostBySlug(slug: string) {
	const posts = await fetchFromDB();
	return posts.find((p) => p.slug === slug);
}
