## Enhance with JS

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-acyjpb?file=README.md

---

- disable JavaScript and show it is still working
- add `use:enhance` to the forms, this enhancment automatically...
  - calls the submit with fetch (instead of the browsers default submit) and then depending on the result
  - updates the `form` property (for validation failures or success)
  - resets the form and calls `invalidateAll()` for success
  - calls `goto()` for a redirect
  - renders the nearest `+error` boundary for an error
- talk about the options for enhancing forms, how you can take over front-end validation, etc.
- so you can pass a function to `use:enhance={}` to give you more control
- `{({ form, data, action, cancel }) => ({ result, update }) => {}`
  - `result` is an `ActionResult` object (`{ type: 'success' | 'failure' | 'redirect' | 'error'; status; data/location/eror; }`)
  - `update` is a function which triggers the logic that would be triggered if this callback wasn't set
- if time permits show how you can use this to add a front-end spinner
- and of course you could have even more control if you just use normal svelte JS to fetch a POST to the endpoint
  - the `$app/forms` module gives you a `deserialize` function to convert the response to an `ActionResult`
  - the `$app/forms` module gives you an `applyAction` to do the things `use:enhance` does
