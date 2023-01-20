# 4.2 Environment Variables

let's start by talking about Environment variables, because most API's will require you have an access token or secret key to use their API

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

_[live code]_

Stackblitz link: ???

---

- now create a .env file in the root of your project with the following content:
  - `BOBS_BURGERS_API=https://bobsburgers-api.herokuapp.com/`
  - talk about how this is where you would put a secret key or token for an API that requires it
  - talk about not commiting secrets to github (VC) `env.local` is sveltekit/vite's suggestion
- change the `+layout.server.fetch` to use the ENV var
- maybe use query params to limit the number of characters returned `?limit=10`
- then change the individual page to also use the real API
