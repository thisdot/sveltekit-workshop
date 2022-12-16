Svelte Stores allow you to create reactive state outside of the component, and then use that state in the component.

Svelte gives us a few syntax nicieties to make consuming stores easier

---

Stackblitz project:
https://stackblitz.com/edit/sveltejs-kit-template-default-rhpmty?file=src/lib/components/App.svelte

- 1. check out the component, refresh the page, only shows the current time, not reactive
- 2. Create a `store.ts` file
- 2. import `readable` from `svelte/store`
- 3. create and export a `time` store with `readable` with the current date that updates every second using `setInterval`
- 4. have it clear the interval by returning a function that calls `clearInterval` with the intervaId
- 5. import the `time` store into `App.svelte`
- 6. first use `subscribe()` and a `let currentTime` variable and a `$: time.subscribe((t) => currentTime = t)` to subscribe to the store and update the `currentTime` variable
- 7. use the `$:` syntax to subscribe to the store directly in the `formatter.format()` call
- 8. talk about how there is also **writable** and **dervied** stores, but for this course you only need readable
