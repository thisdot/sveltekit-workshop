Somtimes you need to do things on a server...

- communicate with your database
- accept form input
- secret and crypto stuff, like signing JWTs and requesting tokens from OAuth providers
- send emails
- do some other stuff that is not safe to do in the browser

Svelte let’s you your app and deployment, but your "server" may be:

- A nodejs server
- Cloudflare workers
- A deno server
- Netlify/Vercel functions
- …something else

The point is, having access to the server is a good thing and let's you do a lot of things easily you can't do in an SPA (in the browser)

So, lets go back to our earlier example and move stuff to the server...

## [live code]

Stackblitz link: ???

- starting with the Bobs burgers characters from Module 2 - loading data
- change `page.ts` to `page.server.ts`, explain it only runs on the server now _\*note the difference in the console logs\*_
- not the change to `PageServerLoad` and how it adds some new parameter properties: request, cookies,locals, platform
  - request is the native web request object
  - cookies - is a little cookie helper for reading and setting cookies
  - locals - is a little object used for passing data between hooks (we'll get to later) layouts and pages
  - platform and getClientAddress are provided by the adapter, so different deployment targets can give you different things
    - for example in the CLoudflare Worker adapter you can get access to Cloudflares KV stores from the platform object
- so when should you use Server Load function rather than the universal load functions?
  - when you need to access a database directly (or the filesystem)
  - when you need to use private environment variables / secrets
- values return from server load functions need to be serializable BUT uses devalue so can handle things like Maps and Dates

- `layout.server.ts` - change the `characters/layout.ts` that loads the list of characters to `layout.server.ts` as well
- Since we are server-side now, we don'e have to fake the Bobs Burgers API, we can use the real one
- let's start by talking about Environment variables, because most API's will require you have an access token or secret key to use their API
  - Bobs Burgers doesn't but, let's learn this anyway

### Environment Variables

- So environment variables are defined by the platform you're running on, like on node it's `process.env`
  - in SvelteKit the Environment variables are abstracted for you in the virtual `$env` module
  - they are broken into static/dynamic and private/public
  - `PRIVATE` env vars cannot be imported into client code, SvelteKit will give you an error
  - `PUBLIC` env vars can be imported into client code, but MUST be prefixed with `PUBLIC_` (configurable)
  - `static` env vars are available (from `vite`) only at build time, and are statically replaced in code (enabled dead code elimination)
    - provided by `.env` or `.env.local` files in the root of your project, overidden by the ENV vars on the machine that runs the build
  - `dynamic` env vars are available at runtime
    - provided by the platform it is running on, equivilant to using `process.env` with `adapter-node`
  - `import { API_KEY } from '$env/static/private'`: must be set in `.env` or `.env.local` files, build time static replacement
  - `import { PUBLIC_BASE_URL } from '$env/static/public'`: must have prefix, build time replaces code statically in front-end
  - `import { env } from '$env/dynamic/private'`: like process.env, runtime provides it (may not be there)
    - in `dev`, `$env/dynamic` always includes env vars from `.env`, in prod, this behavior will depend on your adapter
  - `import { env } from '$env/dynamic/public';`: this actually comes from server to client, like a config, also needs `PUBLIC_` prefix

### Bobs Burgers API

- now create a .env file in the root of your project with the following content:
  - `BOBS_BURGERS_API=https://bobsburgers-api.herokuapp.com/`
  - talk about how this is where you would put a secret key or token for an API that requires it
  - talk abiout not commiting secrets to github (VC) `env.local` is vite's suggestion
- change the `+layout.server.fetch` to use the ENV var
- maybe use query params to limit the number of characters returned `?limit=10`
- then change the page to also use the real API

### Errors

- add an X to the path request for a character and see it silently break
- we're not dealing with errors here, but we should
- wrap request in a try/catch and throw an error, see the 500 page
- check `response.ok` instead
- instead of thorwing an `Error()` import `error` from `'@sveltejs/kit'`;
- throw an `error(404, 'Character not found')` see page
- use `response.status` and `response.statusText` to make a better error page
- Bobs Burgers API just does 500 errors, so we can't really show a 404 page
- Customize the error page by creating `+error.svelte` in `[id]`
- `import { page } from '$app/stores'` - talk about the page store properties
  - `url`: The URL of the current page
  - `params`: likefor a route like `/blog/[slug]`, a { slug: string } object
  - `route`: info about the current route like the ``/blog/[slug]` i
  - `status`: http status code of the current page
  - `error`: error object of the current page, if any
  - `data`: thing normally passed to `+page.svelte` as `data` prop
  - `form`: an object to do with form, which we will get into in the later section
- import the `Character` component and use it instead, but put name to status + error message
  - `<Character name={`${$page.status}: ${$page.error.message}`} />`

### API Pages

- sveltekit also lets us define API pages with `+server.ts` files
- you can put them anywhere but let's just go with `/api` for familiarty
- create a new route file `api/characters/server.ts`
- you're not really doing a load here, your responding to HTTP Requests
- you export `GET`, `POST`, `PATCH`, `PUT` and `DELETE` functions that take a `RequestEvent` and return a `Response`
- let's just recreate our Bob's Burger API from earlier but you could conntect to a DB here or whatever
- `import type { RequestHandler } from './$types';`
- export a `GET` function, fetch from the static json files and return a `Response`
  - `import { json } from '@sveltejs/kit';`
  - switch to using text
- import `fs` and `path` from `node:` and read from file to response (you'll need `env.PWD` for the root)

```ts
import fs from 'node:fs/promises';
import path from 'node:path';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  const fileContents = await fs.readFile(
    path.resolve(env.PWD, 'static', 'bobs-burgers', 'characters.json'),
    'utf-8'
  );
  return new Response(fileContents);
};
```

- with that working, come full circle and use our API endpoint in the fetch call for the list of characters
