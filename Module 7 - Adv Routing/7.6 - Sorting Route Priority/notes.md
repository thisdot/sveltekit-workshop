With all these different ways to match routes, it may have become obvious that one route can match several different route paths.

For example: navigating to `foo-abc` will match all these different routes:

```
src/routes/[...catchall]/+page.svelte
src/routes/[[a=x]]/+page.svelte
src/routes/[b]/+page.svelte
src/routes/foo-[c]/+page.svelte
src/routes/foo-abc/+page.svelte
```

To do so, it prioritizes the match according to the following rules...

- More specific routes are higher priority (e.g. a route with no parameters is more specific than a route with one dynamic parameter, and so on)
- Parameters with matchers ([name=type]) are higher priority than those without ([name])
- [[optional]] and [...rest] parameters are ignored unless they are the final part of the route, in which case they are treated with lowest priority.
  - In other words x/[[y]]/z is treated equivalently to x/z for the purposes of sorting
- lastly, ties are resolved alphabetically

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-6ptqfk?file=README.md

---

- show the links and how it matches to the most specific route
- delete that route and see where it matches, move down the list, showing what loads for `params` at each route
