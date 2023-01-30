<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>The SvelteKit Blog!</h1>

<ul>
	{#each posts as post}
		<li>
			<article>
				<h4>
					<a href={post.slug}>{post.title}</a>
					{#if post.published === false}
						<span class="draft">(draft!)</span>
					{/if}
				</h4>
				<p>{post.excerpt}</p>
			</article>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: var(--color-theme-1);
		margin-bottom: 3rem;
	}

	ul {
		list-style: none;
	}

	h4 {
		margin: 0;
	}

	article {
		margin-bottom: 3rem;
	}

	.draft {
		color: red;
		font-size: 0.8rem;
		margin-left: 0.5rem;
	}
</style>
