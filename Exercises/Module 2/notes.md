stackblitz setup link: https://stackblitz.com/edit/sveltejs-kit-template-default-asrcpy?file=README.md

stackblitz answer: https://stackblitz.com/edit/sveltejs-kit-template-default-gob6cg?file=README.md

---

- add a `page.ts` with an async load function, which calls get `getPostSummaries` (type with `PageLoad` from `'./$types'`)
- show how you actually don't need to await because SvelteKit will await the top level properties of the return value
- use the `PageData` from `'./$types'` to type date `data` prop of the `page.svelte` component
- make a list of articles with the titles as links using the `slug` property, and the `excerpt`
- style a little
- add a `[slug]` directory and a `+page.svelte` component
- add a `[slug]/page.ts` with a `load` function that calls `getPostBySlug` with the slug taken from `params` (type with `PageLoad` from `'./$types'`)
- use the `data` prop to access the post and style a little in the `+page.svelte` component
- review!
- (OPTIONAL: add a `+layout.server.ts` file with `export const prerender = true;` in the `src/routes` directory, and show a static export)

Helpful CSS:

```css
h1 {
  color: rebeccapurple;
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
```

```css
h1 {
  color: rebeccapurple;
  margin-bottom: 3rem;
}

article {
  margin: auto;
  max-width: min(800px, 90%);
}
```
