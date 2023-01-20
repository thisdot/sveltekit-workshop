So it's important to understand, that when you navigate to a SvelteKit page, all the `load()` functions you have set up, get called at the same time concurrently.

SvelteKit figures out which load functions are going to be needed, and then calls them.

This avoids waterfalls. You have to be careful, not to reintroduce those waterfalls. When you use the `await parent()` method, you have reintroduced a waterfall, so make sure you actually rely on that data, and start any fetching you can without waiting for the parent.

When you navigate to a new page client-side, sveltekit is smart enough to group all the load functions into one response, and once all the load functions have resolved, the page is rendered.

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-5f2hrc?file=src/routes/theme-picker/+page.ts

---

- check out the example code at `theme-picker/+page.ts`
- show how clicking **Theme Picker** takes approx 4 seconds
- move `const { config } = await parent();` below the fetch for colors
- show how it takes half the time now, ask if anyone knows why?
- because you aren't relying on any of the parent data, they have both started
- move to best example
  - remove call for config entirely because it's already available to component
  - don't await in load function, because SvelteKit will await/unwrap the top level properties returned from load
