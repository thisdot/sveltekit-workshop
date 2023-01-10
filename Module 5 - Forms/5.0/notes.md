Forms! One of the best parts of SvelteKit

---

### Forms

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-acyjpb?file=README.md

## Stackblitz hack

- talk about why you need to do the Stackblitz hack, and turn `csrf.checkOrigin` to `false` in `svelte.config.js`
- "but don't do this, this is bad, this is just so stackblitz works"

```ts
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
```

## Form basics

- explain that any `+page.server.ts` file can also export an `Actions` object
- look at the existing `+page.server.ts` it defines a `Movie` type and a `PageServerLoad` action (just for demo purposes)

- you can get the type `Actions` from `'./$types'` just like `PageServerLoad`
- export an action object with an `async` method called `default` that gets a `request` property of the argument
- the `request` object has a `.formData()` method which async returns a `FormData` object (see MDN for `FormData`)
- console.log the `FormData` object with `console.log([...(await request.formData())])`
- now checkout the `page.svelte` file
- a movie log, we already have a table, so let's make a form
  - `name` a text input
  - `release` a number input for the year
  - `rating` a select input with 1-5 (stars?)
  - `comments` a textarea to write comments about the movie you watched
  - `submit` a submit button to "Log the Movie"
- submit and check out the log
- (optionally?) show why we needed the `csrf.checkOrigin` hack
- so now we need to convert that form data into a `Movie` object
- so we have to `.get()` each of the fields and then convert the where necessary using `as string` and `number`
- now we need to validate this is in fact a valid `Movie` object
  - make a `validate` function, if valid add to `movies` array, if not...?
  - import `fail` from `@sveltejs/kit` and return that `fail(statusCode, validationData)`
- talk about how you can use validation failures to show errors in the form
- talk about how `form` is ephemeral and will go away on the next page load

### Delete Button

- add a column to the table for a delete button
- `<button type="submit" name="movieToDelete" value={movie.id}>Delete</button>`
- talk about named actions
- add a `deleteMovie` action to the `+page.server.ts` file
- see the error, explain you can't have default and delete actions (explain why)
- change the `default` to `logMovie`
- how do we make the button work? (there are a couple different way actually)
- wrap it in a form and make the form action `/?deleteMovie`

### Respond with a redirect

- sometimes you want to redirect after a form submission, maybe after cerating something you want to go to the detail page
- to do that in a SvelteKit action is the same as in a load function, just throw a `redirect` object
  - `import { redirect } from '@sveltejs/kit';`
  - `throw redirect(303, 'super-secret-url');` (303 is pretty common code for post responses)
- you can get the redirect target from anywhere, the query param, formData, even the user whatever

### Enhance with JS

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
