So let’s talk about when something goes wrong in these load functions or fetches…

## [live code]

Stackblitz link: ???

---

- add an X to the path request for an individual character and see it silently break
- we're not dealing with errors here, but we should
- wrap request in a try/catch and throw an error, see the 500 page
- check `response.ok` instead
- instead of thorwing an `Error()` import `error` from `'@sveltejs/kit'`;
- throw an `error(404, 'Character not found')` see page
- use `response.status` and `response.statusText` to make a better error page
- Bobs Burgers API just does 500 errors, so we can't really show a 404 page
- Customize the error page by creating `+error.svelte` in `[id]`
- `import { page } from '$app/stores'` - talk about the page store properties
  - `url`: The URL of the current page
  - `params`: likefor a route like `/blog/[slug]`, a { slug: string } object
  - `route`: info about the current route like the ``/blog/[slug]` i
  - `status`: http status code of the current page
  - `error`: error object of the current page, if any
  - `data`: thing normally passed to `+page.svelte` as `data` prop
  - `form`: an object to do with form, which we will get into in the later section
- import the `Character` component and use it instead, but put name to status + error message
  - `<Character name={`${$page.status}: ${$page.error.message}`} />`
