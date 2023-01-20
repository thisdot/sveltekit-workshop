- a server `load` and `actions` methods get this `cookies` helper passed as an arg
  - get/set/delete/serialize
  - options are sent on to the `cookie` package so you can see those docs
- be aware of the `path` option, in most cases you likely want `path: '/'`
- The `httpOnly` and `secure` options are `true` by default (except on localhost)

- you can also set headers with the `setHeaders` function, also passed as an arg
- useful if you want the page to be cached, or for Authentication
  - SvelteKit has a different way to manage CSP (content security policy), it's in the config, but you could override it with `setHeaders`
  - You could do cors for API endpoints with `setHeaders`

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-lz1n72?file=README.md

---

- open up `+page.server.ts`, set a cookie there, see it in dev tools
- get it and return something based on it to the page
- delete it in dev tools
