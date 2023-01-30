# Exercise for Module 7 - Custom Styles

**challenge**: Enhance your blog, or use this demo blog, to have different categories for the blog posts.

When a blog post link is clicked the "category" should be the first segment of the URL.

> For example, if the URL is `/sveltekit/dec-2022` then the category is `sveltekit`.
> If the URL is `/personal/first-post` then the category is `personal`.

Have each "category" use a distinct `+layout.svelte` and import separate category-specifc styles.

As an added bonus, have it so if you remove the category segment from the URL you see the same blog post in the default style.

**Hint:** Either use groups or use a dynamic layout when loading the post
