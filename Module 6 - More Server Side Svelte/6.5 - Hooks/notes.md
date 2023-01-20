Hooks are appwide functions that can be used to modify the behavior of the app

There are two hooks files, both optional:

`src/hooks.server.ts` — your app's server hooks
`src/hooks.client.ts` — your app's client hooks

For **Server Hooks** there are

- `handle({ event, resolve })`
  - you return the result of calling resolve on the event, default is `({ event, resolve }) => resolve(event)`
  - `resolve(...)` will never throw an error
  - requests for static assets do not go through hooks
  - this is a good place to deal with auth
  - there is a `sequence` fucntion to pipe them through in order `import { sequence } from '@sveltejs/kit/hooks'`;
  - `resolve` takes a second argument of options
  ```ts
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('old', 'new'),
    filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
    preload: ({ type, path }) => type === 'js' || path.includes('/important/'),
  });
  ```
- `handleFetch({ request, fetch })`
  - modify (or replace) a fetch request that happens inside a `load` or `action` function that runs on the server
  - you could conditionally proxy, or maybe cache
- `handleError({ error, event })`
  - called if an unexpected error is thrown during loading or serverside rendering
    - you could log the error
    - generate a safe representation of the error to show to users

For **Client Hooks** there is only (so far)

- `handleError({ error, event })`
  - called if an unexpected error is thrown during loading or rendering
    - you could log the error
    - generate a safe representation of the error to show to users

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-wxtrlh?file=README.md

---

- open `src/hooks.server.js`
- show how `handle` is can be used to add a user to locals based on `authorization` header JWT
- show how `handleFetch` can be used to proxy requests to an external API
- show how `handleError` can be used to send errors to a logging service
