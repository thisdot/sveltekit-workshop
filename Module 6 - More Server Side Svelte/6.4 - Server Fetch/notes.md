So the `fetch()` function, provided to `load()` functions and `Action`s as an argument is a "special fetch"

- it has the `cookie` and `authorization` headers for the page request
  - this is great for proxying requests along to something you are already authenticated to
- it can make relative requests on the server like `fetch('../api/whatever')`
  - ordinarily `fetch` requires a `URL` with an `origin` when used on a server
- requests for +server.js routes (internal APIs), directly call the handler function, without an HTTP call

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-ji6k37?file=README.md

---

- open `super-secret/+page.server.ts`
- show how `fetch` not the same with `console.log(fetch === global.fetch)`
- talk about how it also does not need the full hostname and protocol for the request
- if time permits you could show them how to make it work with `global.fetch`

```ts
global.fetch(new URL('/api/secret', 'http://localhost:5173'), {
  headers: {
    cookie: request.headers.get('cookie') ?? '',
    authorization: request.headers.get('authorization') ?? '',
  },
});
```
