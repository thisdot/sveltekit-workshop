You can have +server.js files in the same directory as +page files
The same route to be either a page or an API endpoint.

To determine which, SvelteKit applies the following rules:

- Since your browser only GET or POSTs, PUT/PATCH/DELETE are always handled by `+server.js`
- GET/POST requests are page requests if the accept header has text/html first

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-64tntm?file=README.md

---

- open the `bob` directory, show that it has both a `+page.ts` and `+server.ts` file
- click on the bob link, show that it's an HTML page
- open up the console and hit the exact same url with a `fetch()` request
- show it returns a JSON response
- add the header option to the fetch `{headers: { accept: 'text/html' }}` show it returns HTML
- explain it's the same with post
