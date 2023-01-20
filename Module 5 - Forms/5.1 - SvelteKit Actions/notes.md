Forms! One of the best parts of SvelteKit

---

### 5.1 SvelteKit Actions

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
