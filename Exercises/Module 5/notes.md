# Exercise for Module 5 - Add a login form

**challenge**: Add a login form to your blog

You may use the blog you used in the earlier challenge or this demo code.

Create a login page, with a username and password form. The form should validate on both the server and the client.

You don't have to do any real authentication, just check for a hard-coded username password. We are learning forms, not auth.

The Demo has been set up with a simple (and insecure!) authorization method that simply checks the cookie `loggedInUser` for a name, and if it has one considers the user logged in.

On a successful login the root path cookie `loggedInUser` should be set to the `name` of the user, then the user should be redirected to the main page.

If everything is set up correctly the `Login` link should now be the users name and point to the `/profile` page where the user can log out (by deleteing the cookie).

Hint: you can check out the `/profile/+page.server.ts` for a reminder on how to work with form actions

**Setup stackblitz**: https://stackblitz.com/edit/sveltejs-kit-template-default-epup9j?file=README.md

**Answer stackblitz**: https://stackblitz.com/edit/sveltejs-kit-template-default-q2wncc?file=README.md

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

---

- show the participants the `+layout.svelte` and `+layout.server.ts` code and explain what needs to be done
- show the `/profile/+page.server.ts` is already implemented and we can copy past from there to get started
- add a `/login/+page.server.ts` file and paste the from `proflie` in, and change as needed
  - change the `load` redirect to `profile` if there IS a `loggedInUser`
  - delete everything after `formData`
- get the `username` and `password` from the `formData`
- switch to `/login/+page.svelte` and add `username` and `password` input fields with `label` and styles
  - css for form
  ```css
  form {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    grid-template-rows: repeat(1fr, 1fr);
    max-width: min(90%, 400px);
    margin: auto;
  }
  ```
- add a `submit` button
- back in the `/login/+page.server.ts` file validate username is a string and exists and return `fail` if not
  - code shortcut
  ```ts
  return fail(400, {
    username: { reason: 'Username is required' }, // don't send back password
  });
  ```
- don't send back the password and talk about why it's better for security, and will be fine once we enhance with js
- do the same for `password` but DO sendback whatever they sent in as `username` (in a `value` instead of `reason`)
- back in `/login/+page.svelte` add a place to show errors
  - css for errors
  ```css
  .error {
    grid-column: 2 / 3;
    margin-top: -1rem;
    font-size: 0.8em;
    color: red;
  }
  ```
- show auth error workign server side
- make an `async` `userFromCredentials` function in `/login/+page.server.ts` that takes username/password and returns `null` or a name like `Adam`
- exchange u/p for user, if there is no user return `fail(404)` with validation error
- if there IS a user set the cookie `cookies.set('loggedInUser', user, { path: '/' });` and throw a `redirect(303, '/')`
- show it working as expected
- now that we know our form action works, let's enhance it wil JS
- `import { enhance } from '$app/forms';` and add `use:enhance` to the `<form>`, that's it!
- show how it solved the not returning password issue
- add a `required` attribute to the inputs
- talk about how you could do any kind of cleint side validation you want here
